import Image from "next/image";
import styles from "./styles.module.css";
import { ScrollAnimationWrapper } from "@/components/common";
import { SectionArrow } from "@/components/common";

export default function About() {
  return (
    <ScrollAnimationWrapper>
      <section id="about" className={`${styles.about} section`}>
        <h2>About Me</h2>
        <div className={styles.container}>
          <div className={styles["about-content"]}>
            <div className="row">
              <div className="col-lg-6 flex-image">
                <div className={styles["about-image"]}>
                  <Image
                    src="/assets/images/luke.png"
                    alt="Luke Ferrari"
                    width={500}
                    height={500}
                    className="img-fluid rounded shadow"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <p className="p1">
                  Lucas Ferrari Pereira is a software developer with experience
                  in QA engineering and full-stack development. He has worked at
                  TD Bank and Envirosoft, contributing to high-quality software
                  solutions and automated testing.
                </p>
                <p>
                  He combines strong problem-solving skills with a creative
                  approach to coding, bringing precision, adaptability, and a
                  collaborative mindset to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SectionArrow sectionId="about" />
      </section>
    </ScrollAnimationWrapper>
  );
}
