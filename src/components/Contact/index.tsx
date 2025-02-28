'use client'
import styles from '@/ui/contact.module.css';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';
import { useContactForm } from '@/hooks/useContactForm';

export default function Contact() {
  const { formData, status, handleSubmit, handleInputChange } = useContactForm();

  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles['form-container']}>
        <ContactForm
          formData={formData}
          status={status}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </div>
      <Footer />
    </div>
  );
}
