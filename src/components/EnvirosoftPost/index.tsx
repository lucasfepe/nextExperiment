import styles from './styles.module.css';
import { SectionArrowNext } from '@/components/common';
import { SectionArrowPrevious } from '@/components/common';

export default function EnvirosoftPost() {
  return (
    <section id="envirosoftPost" className={`${styles.envirosoftPost} section`}>
      <h2 className={styles.title}>Engineering success, living with intention.</h2>
      <div className={styles.iframeContainer}>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7023740248014671872?collapsed=1"
          height="600" // Increased height
          width="800" // Increased width
          title="Embedded post"
          className={styles.iframe}
        ></iframe>
      </div>
      <SectionArrowNext sectionId="envirosoftPost" />
      <SectionArrowPrevious sectionId="envirosoftPost" />
    </section>
  );
}