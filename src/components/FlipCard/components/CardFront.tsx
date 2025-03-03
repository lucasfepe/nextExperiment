import React from 'react';
import styles from '@/components/FlipCard/styles.module.css';

interface CardFrontProps {
    title: string;
    description: string;
    thumbnailUrl: string;
}

export const CardFront: React.FC<CardFrontProps> = ({ title, description, thumbnailUrl }) => (
    <div className={styles.cardFront}>
        
        <img src={thumbnailUrl} alt="Project Thumbnail" className={styles.thumbnail} />
        <div className={styles.contentSmall}>
            <h5>{title}</h5>
            
            <p className={styles.shortDescription}>{description}</p>
        </div>
        
    </div>
);