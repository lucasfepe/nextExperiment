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
      width={300} // Adjust this value based on your needs
      height={150} // Adjust this value based on your needs
    />
  </div>
);
