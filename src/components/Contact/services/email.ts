'use client';

import emailjs from '@emailjs/browser';

const EMAIL_JS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
const EMAIL_JS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const EMAIL_JS_TEMPLATE_ID_COPY = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID_COPY;

import { ContactFormData, EmailServiceParams } from '@/components/Contact/types';

// Mapper function to convert between formats
function mapFormDataToEmailParams(formData: ContactFormData): EmailServiceParams {
    return {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
    };
}

export async function sendEmail(formData: ContactFormData) {
    const emailParams = mapFormDataToEmailParams(formData);

    // Initialize with public key
    emailjs.init(EMAIL_JS_PUBLIC_KEY!);
    emailjs.send(
        EMAIL_JS_SERVICE_ID!,
        EMAIL_JS_TEMPLATE_ID_COPY!,
        emailParams
    );
    return emailjs.send(
        EMAIL_JS_SERVICE_ID!,
        EMAIL_JS_TEMPLATE_ID!,
        emailParams
    );
}
