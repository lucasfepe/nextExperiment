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
      className={`${styles.cardContainer}`}
    >
      <div
        className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}
        onClick={onToggle}
      >

        <CardFront
          title={title}
          description={shortDescription}
          thumbnailUrl={thumbnailUrl}
        />


        <CardBack
          title={title}
          description={longDescription}
          projectImages={projectImages}
          features={features}
          technologies={technologies}
        />

      </div>
    </div>
  );
};
