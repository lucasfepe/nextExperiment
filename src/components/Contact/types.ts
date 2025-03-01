// src/components/Contact/types.ts
export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface EmailServiceParams extends Record<string, unknown> {
    from_name: string;    // mapped from name
    from_email: string;   // mapped from email
    message: string;      // direct mapping
}
