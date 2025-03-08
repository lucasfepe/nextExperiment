// src/components/FlipCard/index.tsx
"use client";
import React, { useEffect, useState, useRef } from "react";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";
import { ExpandedCardPortal } from "@/components/common/ExpandedCardPortal";
import styles from "./styles.module.css";
import type { FlipCardProps } from "./types";
import { FLIP_CARD_ANIMATION_DURATION } from './constants';
import { OVERLAY_FADE_DURATION } from "../common/Overlay/constants";
import { injectFlipCardCSSVariables } from "./utils";

export const FlipCard: React.FC<FlipCardProps> = ({
  title,
  shortDescription,
  longDescription,
  url,
  thumbnailUrl,
  projectImages,
  features,
  languages,
  technologies,
  isExpanded,
  onToggle,
  onSetHandleClose
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [initialRect, setInitialRect] = useState<DOMRect | null>(null);
  const [expandedRect, setExpandedRect] = useState<DOMRect | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRenderInPortal, setShouldRenderInPortal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleInitialFlip = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isExpanded && cardRef.current) {
      // Find the showcase container
      const showcaseElement = cardRef.current.closest(`[data-showcase-class]`);
      console.log('styles.hideOverflow:', styles.hideOverflow);
      showcaseElement?.classList.add(styles.hideOverflow);

      const rect = cardRef.current.getBoundingClientRect();
      setInitialRect(rect);
      onToggle(e);

      // Capture expanded dimensions after the card is expanded
      setTimeout(() => {
        // wait for portal to be setup before flipping animation starts
        setIsFlipped(true);
      }, 50);
    }
  };
  //NOT COOL: upon clicking card to expand the scroll bar becomes vicible for a moment
  const handleClose = () => {
    // Cool: amazon Q wanted to move this setExpandedRect (for reference point to initialize shrinking animation)
    // to handleInitialFlip but this didn't work because the rectangle isn't fully expanded
    // by the time the initialFlip begins so it resulted in the shrinking animation actually startoing
    // at the shrunk position
    if (cardRef.current) {
      setExpandedRect(cardRef.current.getBoundingClientRect());
    }
    setIsClosing(true);

    setTimeout(() => {

      setIsFlipped(false);
      onToggle(null);
      setExpandedRect(null);
      // COOL: Wait for overlay fade to complete before transporting card back
      // to avoid moment in which card is behind overlay
      setTimeout(() => {
        setIsClosing(false);
        setShouldRenderInPortal(false);

        // Remove the hideOverflow class after animation completes
        const showcaseElement = cardRef.current?.closest(`[data-showcase-class]`);
        showcaseElement?.classList.remove(styles.hideOverflow);
      }, OVERLAY_FADE_DURATION);
    }, (FLIP_CARD_ANIMATION_DURATION));
  };
  //NOT COOL: card when expanded leaves space that is taken up by other cards how to prevent this
  useEffect(() => {
    if (isExpanded && onSetHandleClose) {
      onSetHandleClose(handleClose);
      setShouldRenderInPortal(true);
    }
  }, [isExpanded]);

  useEffect(() => {
    injectFlipCardCSSVariables();
  }, []);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        handleClose();
      }
    };

    if (isExpanded) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isExpanded]);

  const cardContent = (
    <div
      ref={cardRef}
      className={`${styles.cardContainer} ${isExpanded ? styles.expanded : ""} ${isClosing ? styles.closing : ""
        }`}
      style={{
        ...(initialRect && {
          '--initial-width': `${initialRect.width}px`,
          '--initial-height': `${initialRect.height}px`,
          '--initial-left': `${initialRect.left}px`,
          '--initial-top': `${initialRect.top}px`,
        }),
        ...(expandedRect && {
          '--expanded-width': `${expandedRect.width}px`,
          '--expanded-height': `${expandedRect.height}px`,
          '--expanded-left': `${expandedRect.left}px`,
          '--expanded-top': `${expandedRect.top}px`,
        })
      } as React.CSSProperties}
    >
      <div
        className={`${styles.card} ${isFlipped ? styles.flipped : ""} ${isClosing ? styles.closing : ""}`}
        onClick={handleInitialFlip}
      >
        <CardFront
          title={title}
          description={shortDescription}
          thumbnailUrl={thumbnailUrl}
        />
        <CardBack
          title={title}
          url={url}
          description={longDescription}
          projectImages={projectImages}
          features={features}
          languages={languages}
          technologies={technologies}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Always render the original card to preserve space */}
      <div
        className={`${styles.cardContainer} ${shouldRenderInPortal ? styles.placeholder : ''}`}
      // style={{
      //   visibility: shouldRenderInPortal ? 'hidden' : 'visible',
      //   height: initialRect?.height, // Preserve the original height
      //   width: initialRect?.width    // Preserve the original width
      // }}
      >
        {!shouldRenderInPortal && cardContent}
      </div>
      <ExpandedCardPortal isExpanded={shouldRenderInPortal}>
        {cardContent}
      </ExpandedCardPortal>
    </>
  );
};
