import { FormEvent, useState } from 'react';
import { FormData, FormStatus } from '@/types/contact';

export const useContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: FormEvent) => {
        // ... implementation remains the same
    };

    const handleInputChange = (field: keyof FormData) => (
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
