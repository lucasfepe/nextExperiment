'use client' 
import React, { useState, useEffect } from 'react';
import { CardFront } from './components/CardFront';
import { CardBack } from './components/CardBack';
import styles from './styles.module.css';
import type { FlipCardProps } from './types';

export const FlipCard: React.FC<FlipCardProps> = ({
    title,
    shortDescription,
    longDescription,
    thumbnailUrl,
    projectImages,
    features,
    technologies
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isExpanded) {
                toggleCard();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isExpanded]);

    return (
        <>
            <div 
                className={`${styles.overlay} ${isExpanded ? styles.active : ''}`}
                onClick={toggleCard}
            />
            <div className={styles.cardContainer}>
                <div 
                    className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
                    onClick={() => !isExpanded && toggleCard()}
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
        </>
    );
};