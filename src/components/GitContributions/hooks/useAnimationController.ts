import { useCallback } from 'react';

export const useAnimationController = () => {
    const updateAnimation = useCallback((property: string, value: string) => {
        document.documentElement.style.setProperty(property, value);
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const updateWaveSpread = useCallback((spread: number) => {
        const start = 10;
        const end = 90;
        updateAnimation('--wave-start', `${start}%`);
        updateAnimation('--wave-end', `${end}%`);
    }, [updateAnimation]);

    const updateDelayMultiplier = useCallback((multiplier: number) => {
        document.documentElement.style.setProperty('--wave-delay-multiplier', String(multiplier));
    }, []);

    return {
        updateAnimation,
        updateWaveSpread,
        updateDelayMultiplier
    };
};
