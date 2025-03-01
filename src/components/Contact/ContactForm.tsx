
import styles from './styles.module.css';
import { ContactFormHookReturn } from '@/components/Contact/hooks';

type ContactFormProps = ContactFormHookReturn;

export const ContactForm = ({
    formData,
    status,
    handleSubmit,
    handleInputChange
}: ContactFormProps) => {



    return (
        <div className={styles['form-wrapper']}>
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
