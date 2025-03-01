'use client'

import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { ContactFormData } from '../types';
import { sendEmail } from '../services/email';
import { EmailJSResponseStatus } from '@emailjs/browser';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const useContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response: EmailJSResponseStatus = await sendEmail(formData);

            if (response.status === 200) {
                setStatus('success');
                // Reset form after successful submission
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                console.error('Failed to send email:', response.text);
            }
        } catch (error) {
            setStatus('error');
            console.error('Error sending email:', error);
        }
    };

    const handleInputChange = (field: keyof ContactFormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    return {
        formData,
        status,
        handleSubmit,
        handleInputChange
    };
};

export type ContactFormHookReturn = ReturnType<typeof useContactForm>;
