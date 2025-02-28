import { FormEvent } from 'react';
import styles from '@/ui/contact.module.css';
import { FormData } from '@/types/contact';
import { ContactFormHookReturn } from '@/hooks/useContactForm';

type ContactFormProps = ContactFormHookReturn;

export const ContactForm = ({
    formData,
    status,
    handleSubmit,
    handleInputChange
}: ContactFormProps) => {
    return (
        <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
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

            {status === 'success' && (
                <p className="success-message">Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="error-message">Failed to send message. Please try again.</p>
            )}
        </form>
    );
};
