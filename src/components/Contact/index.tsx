'use client'
import styles from './styles.module.css';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';
import { useContactForm } from '@/components/Contact/hooks';

export default function Contact() {
  const { formData, status, handleSubmit, handleInputChange } = useContactForm();

  return (
    <section id="contact" className={`${styles.contact} section`}>
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
    </section>
  );
}
