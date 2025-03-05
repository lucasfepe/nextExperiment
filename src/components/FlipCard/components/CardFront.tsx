import Image from 'next/image';
import React from "react";
import styles from "@/components/FlipCard/styles.module.css";

interface CardFrontProps {
  title: string;
  description: string;
  thumbnailUrl: string;
}

export const CardFront: React.FC<CardFrontProps> = ({
  title,
  description,
  thumbnailUrl,
}) => (
  <div className={styles.cardFront}>
    <Image
      src={thumbnailUrl}
      alt="Project Thumbnail"
      className={styles.thumbnail}
      width={1200} // Adjust this value based on your needs
      height={600} // Adjust this value based on your needs
      priority
    />
  </div>
);
