import React, { forwardRef, useState, useEffect, ForwardedRef } from 'react';
import { TooltipStyles as styles } from './styles';

export interface TooltipProps {

    text: string;
    visible: boolean;
    x: number;
    y: number;
}

interface TooltipState {
    state: TooltipProps;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipState>(
    ({ state }, ref: ForwardedRef<HTMLDivElement>) => {
        const [position, setPosition] = useState({ left: 0, top: 0 });
        const { text, visible, x, y } = state;

        useEffect(() => {
            if (ref && 'current' in ref && ref.current && visible) {
                const rect = ref.current.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                let left = x + 10;
                let top = y + 10;

                // Adjust position if tooltip would go off screen
                if (left + rect.width > viewportWidth) {
                    left = x - rect.width - 10;
                }
                if (top + rect.height > viewportHeight) {
                    top = y - rect.height - 10;
                }

                setPosition({ left, top });
            }
        }, [x, y, visible]);

        if (!visible) return null;

        return (
            <div
                ref={ref}
                className={styles.tooltip}
                style={{
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    display: visible ? 'block' : 'none'
                }}
            >
                {text}
            </div>
        );
    });

Tooltip.displayName = 'Tooltip';
