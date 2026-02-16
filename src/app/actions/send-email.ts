'use server';

import * as Brevo from '@getbrevo/brevo';

const apiInstance = new Brevo.TransactionalEmailsApi();
const apiKey = process.env.BREVO_API_KEY;
const templateId = process.env.BREVO_TEMPLATE_ID ? parseInt(process.env.BREVO_TEMPLATE_ID) : null;

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

  const sendSmtpEmail = new Brevo.SendSmtpEmail();

  sendSmtpEmail.templateId = templateId;
  sendSmtpEmail.sender = { name: "GKR Hospitality", email: "connect@GKRHospitality.com" };
  sendSmtpEmail.to = [{ email: "connect@GKRHospitality.com", name: "GKR Hospitality Support" }];

  // Map form data to Brevo template parameters
  sendSmtpEmail.params = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || 'N/A',
    company: formData.company || 'N/A',
    role: formData.roleDescription ? `${formData.role} (${formData.roleDescription})` : formData.role,
    projectType: formData.projectType,
    message: formData.message
  };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Brevo template email sent successfully:', JSON.stringify(data));
    return { success: true };
  } catch (error) {
    console.error('Error calling Brevo API:', error);
    return { success: false, error: 'Failed to send email. Please check your configuration.' };
  }
}
