import { FC, useEffect, useRef, useState } from 'react';
import { ControlsStyles as styles } from './styles';
import { useAnimationController } from './hooks';
import { WAVE_SPEED } from '@/shared/utils';

interface ControlsProps {
    onWaveSpeedChange: (value: number) => void;
    defaultWaveSpeed?: number;
}

export const Controls: FC<ControlsProps> = ({ onWaveSpeedChange, defaultWaveSpeed = 0.003 }) => {
    const {
        updateWaveDuration,
        updateWaveSpread,
        updateDelayMultiplier
    } = useAnimationController();

    const [durationValue, setDurationValue] = useState(1);
    const waveSpreadInputRef = useRef<HTMLInputElement>(null);
    const waveDurationInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const waveSpreadInput = waveSpreadInputRef.current;
        const waveDurationInput = waveDurationInputRef.current;

        if (!waveSpreadInput || !waveDurationInput) return;

        // Get the initial values from the inputs
        const initialSpread = parseInt(waveSpreadInput.value);
        const initialDuration = parseFloat(waveDurationInput.value);

        // Run the animation updates with initial values
        updateWaveSpread(initialSpread);
        updateWaveDuration(`${initialDuration}s`);

        // Add the input event listeners
        const handleSpreadInput = function (this: HTMLInputElement) {
            updateWaveSpread(parseInt(this.value));
        };
        const handleDurationInput = function (this: HTMLInputElement) {
            setDurationValue(parseFloat(this.value));
            updateWaveDuration(`${this.value}s`);
        };


        waveSpreadInput.addEventListener('input', handleSpreadInput);
        waveDurationInput.addEventListener('input', handleDurationInput);

        return () => {
            waveSpreadInput.removeEventListener('input', handleSpreadInput);
            waveDurationInput.removeEventListener('input', handleDurationInput);
        };
    }, [updateWaveDuration, updateWaveSpread, updateDelayMultiplier]);


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
                    defaultValue={1}
                    ref={waveDurationInputRef}
                />
                <span id="wave-duration-value">{durationValue.toFixed(1)}</span>
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
                    ref={waveSpreadInputRef}
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
                    defaultValue={defaultWaveSpeed}
                    // Cool: lift wave-delay value up to a common ancestor
                    onChange={(e) => onWaveSpeedChange(Number(e.target.value))}
                />
            </div>
        </div>
    );
};
