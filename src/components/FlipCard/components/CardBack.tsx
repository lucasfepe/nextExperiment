import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "@/components/FlipCard/styles.module.css";
import Link from 'next/link'
import Image from 'next/image'

interface CardBackProps {
  title: string;
  description: string;
  url: string;
  projectImages: string[];
  features: string[];
  technologies: string[];
  languages: string[];
}

export const CardBack: React.FC<CardBackProps> = ({
  title,
  description,
  url,
  projectImages,
  features,
  languages,
  technologies,
}) => (
  <div className={`${styles.cardBack}`}>
    <div className="flex-none">
      <h2 className={`text-xl font-bold mb-2 mt-0 ${styles.repoTitle}`}><Link href={url} passHref legacyBehavior>
        <a target="_blank">
          {title}
        </a>
      </Link></h2>
      <p className={styles.longDescription}>{description}</p>
    </div>
    <div className={`${styles.backContent} `}>
      <div>
        <div className="mt-2">
          <h4>Features</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <h4>Languages</h4>
          <div className="flex gap-2 flex-wrap">
            {languages.map((tech, index) => (
              <span key={index} className={`${styles.techBadge} badge bg-primary`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <h4>Technologies</h4>
          <div className="flex gap-2 flex-wrap">
            {technologies.map((tech, index) => (
              <span key={index} className={`${styles.techBadge} badge bg-primary`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Image Carousel */}
      {/* <div className={`h-full ${styles.carouselContainer}`}> */}
      <div className={styles.carouselContainer}>
        <Carousel
          interval={3000}
          className={styles.carousel}
          indicators={true}
        >
          {projectImages.map((image, index) => (
            <Carousel.Item key={index} className={styles.carouselItem}>
              <Image
                src={image}
                alt={`Project screenshot ${index + 1}`}
                width={500}
                height={500}
                className={styles.carouselImage}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
    {/* </div> */}
  </div>
);
