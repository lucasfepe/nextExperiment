// useAnimationController.ts
import { useCallback, useState } from 'react';

export const useAnimationController = () => {
    const [currentColor, setCurrentColor] = useState('#9c9c9c');

    const setStyleProperty = useCallback((property: string, value: string) => {
        document.documentElement.style.setProperty(property, value);
    }, []);

    const updateWaveDuration = useCallback((duration: string) => {
        setStyleProperty('--wave-duration', duration);
    }, [setStyleProperty]);

    const updateWaveColor = useCallback((color: string) => {
        setCurrentColor(color);
    }, []);

    const updateWaveSpread = useCallback((spread: number) => {
        const ANIMATION_MIDPOINT = 50;
        const keyframes = `
            @keyframes loadingWave {
                0% { background-color: #ebedf0; }
                ${ANIMATION_MIDPOINT - spread}% { background-color: #ebedf0; }
                50% { background-color: ${currentColor}; }
                ${ANIMATION_MIDPOINT + spread}% { background-color: #ebedf0; }
                100% { background-color: #ebedf0; }
            }
        `;

        // Remove any previous animation
        document.querySelectorAll('style[data-wave-animation]').forEach(el => el.remove());

        // Create new style element with the animation
        const styleElement = document.createElement('style');
        styleElement.setAttribute('data-wave-animation', '');
        styleElement.textContent = keyframes;
        document.head.appendChild(styleElement);
    }, [currentColor]);

    const updateDelayMultiplier = useCallback((multiplier: number) => {
        return (index: number) => `${index * multiplier}s`;
    }, []);

    return {
        updateWaveDuration,
        updateWaveSpread,
        updateDelayMultiplier,
        updateWaveColor
    };
};
