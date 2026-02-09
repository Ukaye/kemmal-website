import emailjs from "@emailjs/browser";

// EmailJS Configuration
// Replace these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id",
  consultationTemplateId:
    process.env.NEXT_PUBLIC_EMAILJS_CONSULTATION_TEMPLATE_ID ||
    "consultation_template",
  eventTemplateId:
    process.env.NEXT_PUBLIC_EMAILJS_EVENT_TEMPLATE_ID || "event_template",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key",
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send consultation form
export const sendConsultationForm = async (formData: {
  fullName: string;
  phoneNumber: string;
  email: string;
  organizationName: string;
  organizationType: string;
  serviceNeeded: string;
  challengeSummary: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.consultationTemplateId,
      {
        to_email: "info@kemmalonuoha.com",
        from_name: formData.fullName,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        organization_name: formData.organizationName,
        organization_type: formData.organizationType,
        service_needed: formData.serviceNeeded,
        challenge_summary: formData.challengeSummary,
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};

// Send event registration form
export const sendEventRegistration = async (formData: {
  fullName: string;
  phoneNumber: string;
  email: string;
  companySector: string;
  heardFrom: string;
  eventName: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.eventTemplateId,
      {
        to_email: "info@kemmalonuoha.com",
        from_name: formData.fullName,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        company_sector: formData.companySector,
        heard_from: formData.heardFrom,
        event_name: formData.eventName,
      }
    );
    return { success: true, response };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};

