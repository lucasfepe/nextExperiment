import { FC } from 'react';
import { ControlsStyles as styles } from './styles';

export const Controls: FC = () => {
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
                />
            </div>
        </div>
    );
};
