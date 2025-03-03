// src/components/Showcase/index.tsx
"use client";
import React, { useState } from "react";
import { FlipCard } from "@/components/FlipCard";
import { usePinnedRepos } from "./usePinnedRepos";
import styles from "./styles.module.css";

export const Showcase: React.FC = () => {
  const { pinnedRepos, isLoading, error } = usePinnedRepos();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <section className={styles.showcase}>
      {/* Single overlay for all cards */}
      {expandedCard && (
        <div
          className={styles.overlay}
          onClick={() => handleCardToggle(null)}
        />
      )}
      <div className={styles.projectCards}>
        {pinnedRepos.map((repo) => (
          <FlipCard
            key={repo.name}
            title={repo.name}
            shortDescription={repo.description || "No description available"}
            longDescription={repo.description || "No description available"}
            thumbnailUrl={
              repo.openGraphImageUrl || "/default-project-image.jpg"
            }
            projectImages={[
              repo.openGraphImageUrl || "/default-project-image.jpg",
            ]}
            features={[]}
            technologies={repo.languages.nodes.map(
              (lang: { name: string }) => lang.name
            )}
            isExpanded={expandedCard === repo.name}
            onToggle={() =>
              handleCardToggle(expandedCard === repo.name ? null : repo.name)
            }
          />
        ))}
      </div>
    </section>
  );
};
