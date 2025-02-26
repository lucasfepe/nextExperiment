import Image from 'next/image'
import styles from '@/ui/about.module.css';

export default function About() {
  return (
    <section id="about" className={`about section ${styles.about}`}>
      <h2>About Me</h2>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <p className="intro">
              Lucas Ferrari Pereira is a multidisciplinary creator with expertise in
              software development, game design, chemical engineering, and dance. He
              earned a BASc in Chemical Engineering from the University of Toronto,
              sharpening his analytical and problem-solving skills.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 flex-image">
              <div className="about-image">
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
                His passion for technology led him to software and game development,
                gaining experience as a QA engineer and developer. He has worked on
                projects like Celestes, an online multiplayer card game, showcasing
                skills in Unity, AWS, and cloud solutions.
              </p>

              <p className="p2">
                Beyond tech, Lucas values the arts. His work with Xing Dance
                Theatre and Decidedly Jazz Danceworks reflects his dedication to
                movement and creative expression.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="additional-content">
              <p>
                With a strong engineering foundation, a love for software, and a
                creative spirit shaped by dance, Lucas thrives at the intersection
                of logic and artistry. Whether building applications, designing
                games, or dancing, he brings innovation, precision, and energy to
                every endeavor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
