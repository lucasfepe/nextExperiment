import { FC, useEffect, useState } from 'react';
import { ControlsStyles as styles } from './styles';
import { useAnimationController } from './hooks';
import { WAVE_SPEED } from '@/shared/utils';

interface ControlsProps {
    onWaveSpeedChange: (value: number) => void;
    defaultWaveSpeed?: number;
}

export const Controls: FC<ControlsProps> = ({ onWaveSpeedChange }) => {
    const {
        updateWaveDuration,
        updateWaveSpread,
        updateDelayMultiplier,
        updateWaveColor
    } = useAnimationController();

    const [selectedColor, setSelectedColor] = useState('#9c9c9c');
    const [waveSpread, setWaveSpread] = useState(30);
    const [waveDuration, setWaveDuration] = useState(1);

    // Effect to initialize and update animations
    useEffect(() => {
        updateWaveSpread(waveSpread);
        updateWaveDuration(`${waveDuration}s`);
    }, [waveSpread, waveDuration, updateWaveDuration, updateWaveSpread]);

    // Handlers for each control
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setSelectedColor(newColor);
        updateWaveColor(newColor);
    };

    const handleSpreadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSpread = parseInt(e.target.value);
        setWaveSpread(newSpread);
        updateWaveSpread(newSpread);
    };

    const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDuration = parseFloat(e.target.value);
        setWaveDuration(newDuration);
        updateWaveDuration(`${newDuration}s`);
    };

    return (
        <div className={styles.controls}>
            <div className={styles.controlGroup}>
                <label htmlFor="wave-duration">Wave Duration (s):</label>
                <input
                    type="range"
                    id="wave-duration"
                    min={0.1}
                    max={3}
                    step={0.1}
                    value={waveDuration}
                    onChange={handleDurationChange}
                />
                <span id="wave-duration-value">{waveDuration.toFixed(1)}</span>
            </div>
            <div className={styles.controlGroup}>
                <label htmlFor="wave-spread">Wave Spread:</label>
                <input
                    type="range"
                    id="wave-spread"
                    min="5"
                    max="45"
                    step="5"
                    value={waveSpread}
                    onChange={handleSpreadChange}
                />
            </div>
            <div className={styles.controlGroup}>
                <label htmlFor="wave-delay">Wave Speed:</label>
                <input
                    type="range"
                    id="wave-delay"
                    min={WAVE_SPEED.MIN_SPEED}
                    max={WAVE_SPEED.MAX_SPEED}
                    step={0.001}
                    defaultValue={WAVE_SPEED.DEFAULT_WAVE_SPEED}
                    // Cool: lift wave-delay value up to a common ancestor
                    onChange={(e) => onWaveSpeedChange(Number(e.target.value))}
                />
            </div>
            <div className={styles.controlGroup}>
                <label htmlFor="color-picker">Color:</label>
                <input
                    type="color"
                    className="form-control form-control-color"
                    id="color-picker"
                    title="Choose your color"
                    value={selectedColor}
                    onChange={handleColorChange}
                />
            </div>
        </div>
    );
};
