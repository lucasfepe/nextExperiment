import { useCallback } from 'react';
import { AnimationControllerStyles as styles } from './styles';

interface AnimationControllerProps {
    onWaveDurationChange: (duration: number) => void;
    onWaveSpreadChange: (spread: number) => void;
    onWaveDelayChange: (delay: number) => void;
}

export const AnimationController: React.FC<AnimationControllerProps> = ({
    onWaveDurationChange,
    onWaveSpreadChange,
    onWaveDelayChange,
}) => {
    const handleDurationChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        document.documentElement.style.setProperty('--wave-duration', `${value}s`);
        onWaveDurationChange(value);
    }, [onWaveDurationChange]);

    const handleSpreadChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        onWaveSpreadChange(value);
    }, [onWaveSpreadChange]);

    const handleDelayChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        onWaveDelayChange(value);
    }, [onWaveDelayChange]);

    return (
        <div className={styles.controls}>
            <div className={styles.controlGroup}>
                <label htmlFor="wave-duration">Wave Duration (s):</label>
                <input
                    type="range"
                    id="wave-duration"
                    min="0.1"
                    max="3"
                    step="0.1"
                    defaultValue="1"
                    onChange={handleDurationChange}
                />
                <span id="wave-duration-value">1s</span>
            </div>

            <div className={styles.controlGroup}>
                <label htmlFor="wave-spread">Wave Spread:</label>
                <input
                    type="range"
                    id="wave-spread"
                    min="5"
                    max="45"
                    step="5"
                    defaultValue="30"
                    onChange={handleSpreadChange}
                />
            </div>

            <div className={styles.controlGroup}>
                <label htmlFor="wave-delay">Wave Speed:</label>
                <input
                    type="range"
                    id="wave-delay"
                    min="0.001"
                    max="0.01"
                    step="0.001"
                    defaultValue="0.003"
                    onChange={handleDelayChange}
                />
            </div>
        </div>
    );
};
