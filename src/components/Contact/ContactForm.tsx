'use client'

import styles from './styles.module.css';
import { ContactFormHookReturn } from '@/components/Contact/hooks';
import { useState, useRef, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

type ContactFormProps = ContactFormHookReturn;

export const ContactForm = ({
    formData,
    status,
    handleSubmit,
    handleInputChange
}: ContactFormProps) => {
    const [errors, setErrors] = useState({
        email: ''
    });
    const emailErrorRef = useRef<HTMLDivElement>(null);

    const validateForm = () => {
        const newErrors = { email: '' };
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        } else {
            newErrors.email = '';
        }
        setErrors(newErrors);
        return !newErrors.email;
    };
    useEffect(() => {
        if (errors.email !== '') {
            triggerEmailError();
        }
    }, [errors.email]);
    
    const triggerEmailError = () => {
        if (emailErrorRef.current) {
            emailErrorRef.current.classList.add(`${styles.emailError}`);
            setTimeout(() => {
                emailErrorRef.current!.classList.remove(`${styles.emailError}`);
            }, 3000);
            setTimeout(() => {
                setErrors({ email: '' });
            }, 4000);
        }
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit(e);
        } else {

        }
    };

    return (
        <div className={styles['form-wrapper']}>
            <form id="contact-form" className={styles.form} onSubmit={handleFormSubmit}>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className={styles.input}
                    required
                    value={formData.name}
                    onChange={handleInputChange('name')}
                />
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={styles.input}
                    required
                    value={formData.email}
                    onChange={handleInputChange('email')}
                />
                <textarea
                    id="message"
                    placeholder="Message"
                    className={styles.textarea}
                    required
                    value={formData.message}
                    onChange={handleInputChange('message')}
                />
                <button
                    type="submit"
                    className={styles.button}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                <Alert 
                    ref={emailErrorRef}
                    key={'email'} 
                    variant={'danger'} 
                    className={styles.emailInvalid}
                >
                    {errors.email}
                </Alert>
            </form>

            <div style={{ height: '60px', marginTop: '1rem' }}>
                <div
                    className={`alert alert-success alert-dismissible w-100 ${styles.fade}`}
                    role="alert"
                    style={{
                        opacity: status === 'success' ? 1 : 0,
                        visibility: status === 'success' ? 'visible' : 'hidden'
                    }}
                >
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Message sent successfully!
                </div>

                <div
                    className={`alert alert-danger alert-dismissible w-100 ${styles.fade}`}
                    role="alert"
                    style={{
                        opacity: status === 'error' ? 1 : 0,
                        visibility: status === 'error' ? 'visible' : 'hidden'
                    }}
                >
                    <i className="bi bi-exclamation-circle-fill me-2"></i>
                    Failed to send message. Please try again.
                </div>
            </div>
        </div>
    );
};
