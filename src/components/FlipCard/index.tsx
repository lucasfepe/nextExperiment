// src/components/FlipCard/index.tsx
"use client";
import React from "react";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";
import { ExpandedCardPortal } from "@/components/common/ExpandedCardPortal";
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
  const cardContent = (
    <div
      className={`${styles.cardContainer} ${isExpanded ? styles.expanded : ""}`}
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

  return (
    <>
      {!isExpanded && cardContent}
      <ExpandedCardPortal isExpanded={isExpanded}>
        {cardContent}
      </ExpandedCardPortal>
    </>
  );
};
