// src/components/Showcase/index.tsx
"use client";
import React, { useState } from "react";
import { FlipCard } from "@/components/FlipCard";
import { Overlay } from "@/components/common/Overlay";
import { usePinnedRepos } from "./usePinnedRepos";
import styles from "./styles.module.css";
import { REPOS_DETAILS } from "./constants";

export const Showcase: React.FC = () => {
  const { pinnedRepos, isLoading, error } = usePinnedRepos();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [currentCardHandleClose, setCurrentCardHandleClose] = useState<(() => void) | null>(null);

  if (isLoading) {
    return <div className={styles.loading}>Loading projects...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        Error loading projects: {error.message}
      </div>
    );
  }

  const handleCardToggle = (repoName: string | null) => {
    setExpandedCard(repoName);
    // When a card is expanded, add class to prevent body scrolling
    if (repoName) {

      document.getElementById("showcase")!.style.overflow = "hidden";
    } else {
      document.getElementById("showcase")!.style.overflow = "auto";
    }
  };

  // const handleClose = () => {
  //   handleCardToggle(null);
  // };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement> | null) => {
    if (!event) return;
    const cardBack = event.currentTarget.children[1] as HTMLElement;
    const cardFront = event.currentTarget.children[0] as HTMLElement;
    const card = event.currentTarget.parentElement;

    if (cardBack && card && cardFront) {
      const rect = cardBack.getBoundingClientRect();
      const { x: screenCenterX, y: screenCenterY } = getScreenCenter();
      // Calculate the center position of the card
      let cardBackCenterX;
      let cardBackCenterY;
      if (window.innerWidth * .9 > 560) {
        cardBackCenterX = rect.left + 560 / 2;
      } else {
        cardBackCenterX = rect.left + window.innerWidth * 0.9 / 2;
      }
      if (window.innerHeight * .9 > 600) {
        console.log("rect.top: " + rect.top);
        cardBackCenterY = rect.top + 600 / 2;
      } else {
        cardBackCenterY = rect.top + window.innerHeight * 0.9 / 2;
      }

      // Get location of center of screen in px
      // Set these values as CSS custom properties
      // cardBack.style.setProperty("--y-diff", `${screenCenterY - cardBackCenterY}px`);
      // cardBack.style.setProperty("--x-diff", `${screenCenterX - cardBackCenterX}px`);
      card.style.setProperty("--y-diff", `${screenCenterY - cardBackCenterY}px`);
      card.style.setProperty("--x-diff", `${screenCenterX - cardBackCenterX}px`);
    }
  };

  const getScreenCenter = (): { x: number; y: number } => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    return { x: centerX, y: centerY };
  };

  const renderCards = () => {
    return pinnedRepos.map((repo) => (
      <FlipCard
        key={repo.name}
        title={repo.name}
        url={repo.url}
        shortDescription={repo.description || "No description available"}
        longDescription={repo.description || "No description available"}
        thumbnailUrl={repo.openGraphImageUrl || "/default-project-image.jpg"}
        projectImages={REPOS_DETAILS[repo.name].images}
        features={REPOS_DETAILS[repo.name].features}
        technologies={REPOS_DETAILS[repo.name].technologies}
        languages={repo.languages.nodes.map(
          (lang: { name: string }) => lang.name
        )}
        isExpanded={expandedCard === repo.name}
        onToggle={(e) => {
          handleCardToggle(expandedCard === repo.name ? null : repo.name);
          handleCardClick(e);
        }}
        onSetHandleClose={(closeFunc) => {
          if (repo.name === expandedCard) {
            setCurrentCardHandleClose(() => closeFunc);
          }
        }}
      />
    ));
  };

  return (
    <>
      <Overlay
        isVisible={expandedCard !== null}
        onClose={() => {
          if (currentCardHandleClose) {
            currentCardHandleClose();
          }
        }}
      />
      <section id="showcase" className={styles.showcase} data-showcase-class={styles.showcase}>
        <div className={styles.projectCards}>
          {renderCards()}
        </div>
      </section>
    </>
  );
};
