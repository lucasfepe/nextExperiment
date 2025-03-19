import styles from './styles.module.css';
import { SectionArrowNext } from '@/components/common';
import { SectionArrowPrevious } from '@/components/common';

export default function WorkHistory() {
    const experiences = [
        {
          title: 'Software Developer',
          company: 'Envirosoft, Calgary, AB',
          date: 'November 2021 – July 2023',
          description: [
            'Designed and developed features for main software product using Java, Spring Boot, SQL, and React.',
            'Optimized workflows and resolved software inefficiencies to migrate mission-critical tool under schedule.',
            'Handled critical maintenance, quickly addressing urgent production issues.',
          ],
        },
        {
          title: 'Quality Assurance Engineer',
          company: 'TD Bank, Toronto, ON',
          date: 'April 2019 – April 2020',
          description: [
            'Led weekly test plan meetings with 20+ teams to align on testing needs.',
            'Directed a 5-person team to automate ingestion tests, improving data validation.',
            'Automated tests and integrated them with Jenkins, emailing results for visibility.',
          ],
        },
        {
          title: 'IT Consultant and Graduate Program',
          company: 'FDM Group, Toronto, ON',
          date: 'February 4, 2019 - September 9, 2020',
          description: [
            'Secured consulting contracts and collaborated on Agile projects with FDM clients.',
            'Built projects with React, TypeScript, and JavaScript following Agile practices.',
            'Completed classes in Java, SQL, Unix, Selenium, Spring Boot, and testing principles.',
          ],
        },
      ];
      
      

  return (
    <section id="workHistory" className={`${styles.workHistory} section`}>
      <h2 className={styles.title}>...or not!</h2>
      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <div key={index} className={styles.timelineItem}>
              <h3 className={styles.timelineTitle}>{experience.title}</h3>
              <h4 className={styles.timelineCompany}>{experience.company}</h4>
              <p className={styles.timelineDate}>{experience.date}</p>
              <ul className={styles.timelineDescription}>
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <SectionArrowNext sectionId="workHistory" />
      <SectionArrowPrevious sectionId="workHistory" />
    </section>
  );
}