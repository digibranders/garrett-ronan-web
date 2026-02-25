'use server';

import * as Brevo from '@getbrevo/brevo';

const apiInstance = new Brevo.TransactionalEmailsApi();
const apiKey = process.env.BREVO_API_KEY;
const templateId = process.env.BREVO_TEMPLATE_ID ? parseInt(process.env.BREVO_TEMPLATE_ID) : null;
const thankYouTemplateId = process.env.BREVO_THANK_YOU_TEMPLATE_ID ? parseInt(process.env.BREVO_THANK_YOU_TEMPLATE_ID) : null;
const senderName = process.env.BREVO_SENDER_NAME ?? 'GKR Hospitality';
const senderEmail = process.env.BREVO_SENDER_EMAIL ?? 'connect@GKRHospitality.com';
const adminEmail = process.env.BREVO_ADMIN_EMAIL ?? senderEmail;

if (apiKey) {
  apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);
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
}) {
  if (!apiKey || !templateId) {
    console.error('Brevo API key or Template ID is missing');
    return { success: false, error: 'Email service configuration error.' };
  }

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
      } catch (userEmailError) {
        // We don't want to fail the whole submission if the thank you email fails
        console.error('Error sending Thank You email to user:', userEmailError);
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Error calling Brevo API for admin email:', error);
    return { success: false, error: 'Failed to send email. Please check your configuration.' };
  }
}
