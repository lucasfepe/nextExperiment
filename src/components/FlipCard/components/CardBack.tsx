import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import styles from "@/components/FlipCard/styles.module.css";
import Link from 'next/link';
import Image from 'next/image';
import { ExpandedCardPortal } from "@/components/common/ExpandedCardPortal";

interface CardBackProps {
  title: string;
  description: string;
  url: string;
  projectImages?: string[];
  features: string[];
  technologies: string[];
  languages: string[];
}

interface ProcessedImage {
  src: string;
  width: number;
  height: number
}

export const CardBack: React.FC<CardBackProps> = ({
  title,
  description,
  url,
  projectImages,
  features,
  languages,
  technologies,
}) => {
  const [expandedCarousel, setExpandedCarousel] = useState<boolean>(false);
  const [carouselImages, setCarouselImages] = useState<ProcessedImage[]>([]);

  const handleImageClick = () => {

    setExpandedCarousel(true);
  };

  const handleClosePortal = () => {
    setExpandedCarousel(false);
    setCarouselImages([]);
  };

  useEffect(() => {
    !expandedCarousel && handleClosePortal();
  }, [expandedCarousel]);

  useEffect(() => {
    if (projectImages) {
      const processedImages: ProcessedImage[] = projectImages.map((image) => {
        const img = new window.Image();
        img.src = image;

        const maxWidth = window.innerWidth * 0.9;
        const maxHeight = window.innerHeight * 0.9;

        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const widthRatio = maxWidth / width;
          const heightRatio = maxHeight / height;
          const scale = Math.min(widthRatio, heightRatio);

          width = Math.floor(width * scale);
          height = Math.floor(height * scale);
        }

        return { src: image, width, height };
      });

      setCarouselImages(processedImages);
    }
  }, [projectImages]);

  return (
    <div className={`${styles.cardBack}`}>
      <div className="flex-none">
        <h2 className={`text-xl font-bold mb-2 mt-0 ${styles.repoTitle}`}>
          <Link href={url} passHref legacyBehavior>
            <a target="_blank">{title}</a>
          </Link>
        </h2>
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
        {projectImages && (
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
                    onClick={() => handleImageClick()}
                    style={{ cursor: "pointer", transition: "all 1s ease" }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </div>

      {/* Expanded Image Portal */}
      {expandedCarousel && carouselImages.length > 0 && (
        <ExpandedCardPortal isExpanded={true} showCloseButton={true} onClose={() => setExpandedCarousel(false)}>
          <Carousel
            interval={3000}
            className={styles.carousel}
            indicators={true}
            style={{
              textAlign: 'center',
              display: 'flex',
              height: '100vh',
              alignItems: 'center'
            }}
          >
            {carouselImages.map((image, index) => (
              <Carousel.Item key={index} className={styles.carouselItem}>
                <Image
                  src={image.src}
                  alt={`Expanded project screenshot ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className={styles.expandedImage}
                  style={{ transition: "all 1s ease" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </ExpandedCardPortal>
      )}
    </div>
  );
};