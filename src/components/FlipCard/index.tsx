"use client";
import React, { useState, useEffect } from "react";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";
import styles from "./styles.module.css";
import type { FlipCardProps } from "./types";

export const FlipCard: React.FC<FlipCardProps> = ({
  title,
  shortDescription,
  longDescription,
  thumbnailUrl,
  projectImages,
  features,
  technologies,

  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className={`${styles.cardContainer} ${isExpanded ? styles.expanded : ""}`}
    >
      <div
        className={`${styles.card} ${isExpanded ? styles.flipped : ""}`}
        onClick={onToggle}
      >
        <div className={styles.cardFront}>
          <div className={styles.cardContent}>
            <CardFront
              title={title}
              description={shortDescription}
              thumbnailUrl={thumbnailUrl}
            />
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            <CardBack
              title={title}
              description={longDescription}
              projectImages={projectImages}
              features={features}
              technologies={technologies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
