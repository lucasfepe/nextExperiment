// Tooltip.tsx
import React, { FC, useState, useEffect } from 'react';
import { TooltipStyles as styles } from './styles';

interface TooltipProps {
    text: string;
}

export const Tooltip: FC<TooltipProps> = ({ text }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Don't render until we have a non-zero position
    if (position.x === 0 && position.y === 0) return null;

    return (
        <div
            className={styles.tooltip}
            style={{
                position: 'fixed',
                left: `${position.x + 15}px`,
                top: `${position.y + 15}px`
            }}
        >
            {text}
        </div>
    );
};
