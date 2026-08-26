'use server';

import * as Brevo from '@getbrevo/brevo';

const apiKey = process.env.BREVO_API_KEY;
const templateId = process.env.BREVO_TEMPLATE_ID ? parseInt(process.env.BREVO_TEMPLATE_ID) : null;
const thankYouTemplateId = process.env.BREVO_THANK_YOU_TEMPLATE_ID ? parseInt(process.env.BREVO_THANK_YOU_TEMPLATE_ID) : null;
const senderName = process.env.BREVO_SENDER_NAME ?? 'GKR Hospitality';
const senderEmail = process.env.BREVO_SENDER_EMAIL ?? 'connect@GKRHospitality.com';
const adminEmail = process.env.BREVO_ADMIN_EMAIL ?? senderEmail;

interface BrevoApiError {
  message?: string;
  response?: { body?: unknown };
}

function getBrevoErrorInfo(error: unknown): { message?: string; body?: unknown } {
  if (typeof error === 'object' && error !== null) {
    const brevoError = error as BrevoApiError;
    return { message: brevoError.message, body: brevoError.response?.body };
  }
  return { message: error instanceof Error ? error.message : String(error) };
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  role: string;
  roleDescription?: string;
  message: string;
  turnstileToken: string;
}) {
  if (!apiKey || !templateId) {
    console.error('Brevo API key or Template ID is missing');
    return { success: false, error: 'Email service configuration error.' };
  }

  if (!formData.turnstileToken) {
    return { success: false, error: 'Please verify that you are not a robot.' };
  }

  try {
    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY?.trim();
    if (!turnstileSecretKey) {
      console.error('Turnstile secret key is missing');
      return { success: false, error: 'Security configuration error.' };
    }

    const formDataBody = new URLSearchParams();
    formDataBody.append('secret', turnstileSecretKey);
    formDataBody.append('response', formData.turnstileToken);

    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataBody.toString(),
      cache: 'no-store',
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.error('Turnstile verification failed:', verifyData);
      const errors = verifyData['error-codes']?.join(', ') || 'unknown-error';
      return { success: false, error: `Robot verification failed (${errors}). Please try again.` };
    }
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return { success: false, error: 'Failed to verify security token.' };
  }

  const apiInstance = new Brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

  // 1. Send Admin Notification Email
  const sendAdminEmail = new Brevo.SendSmtpEmail();
  sendAdminEmail.templateId = templateId;
  sendAdminEmail.sender = { name: senderName, email: senderEmail };
  sendAdminEmail.to = [{ email: adminEmail, name: senderName }];

  // Set replyTo so replying from admin goes to the user who filled the form
  sendAdminEmail.replyTo = { email: formData.email, name: formData.name };

  // Map form data to Brevo template parameters
  sendAdminEmail.params = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || 'N/A',
    company: formData.company || 'N/A',
    role: formData.roleDescription ? `${formData.role} (${formData.roleDescription})` : formData.role,
    projectType: formData.projectType,
    message: formData.message
  };

  try {
    await apiInstance.sendTransacEmail(sendAdminEmail);

    // 2. Send Thank You Email to User (only when template is configured in Brevo)
    if (thankYouTemplateId) {
      try {
        const sendUserEmail = new Brevo.SendSmtpEmail();
        sendUserEmail.to = [{ email: formData.email, name: formData.name }];
        // Sender & subject are configured in the Brevo dashboard template
        sendUserEmail.templateId = thankYouTemplateId;
        sendUserEmail.params = { name: formData.name };

        await apiInstance.sendTransacEmail(sendUserEmail);
      } catch (userEmailError: unknown) {
        // We don't want to fail the whole submission if the thank you email fails
        const { message, body } = getBrevoErrorInfo(userEmailError);
        console.error('Error sending Thank You email to user:', {
          message,
          response: body,
        });
      }
    }

    return { success: true };
  } catch (error: unknown) {
    const { message, body } = getBrevoErrorInfo(error);
    console.error('Error calling Brevo API for admin email:', {
      message,
      response: body,
    });
    return { success: false, error: 'Failed to send email. Please check your configuration.' };
  }
}
