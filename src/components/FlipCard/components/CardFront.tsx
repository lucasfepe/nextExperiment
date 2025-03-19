import Image from 'next/image';
import React from "react";
import styles from "@/components/FlipCard/styles.module.css";

interface CardFrontProps {
  hasClicked: boolean;
  title: string;
  description: string;
  thumbnailUrl: string;
}

export const CardFront: React.FC<CardFrontProps> = ({
  thumbnailUrl,
  hasClicked
}) => (
  <div className={`${styles.cardFront}`}>
    <div className={`${styles.flipHint} ${hasClicked ? 'd-none' : 'd-block'}`}>click to flip</div>
    <Image
      src={thumbnailUrl}
      alt="Project Thumbnail"
      className={styles.thumbnail}
      width={1200}
      height={600}
      priority
    />
  </div>
);
