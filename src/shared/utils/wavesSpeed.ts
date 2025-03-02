// src/utils/waveSpeed.ts

export const WAVE_SPEED = {
    MIN_SPEED: 0.001,
    MAX_SPEED: 0.01,
    MIN_DELAY: 0.001,
    MAX_DELAY: 0.01,
    DEFAULT_WAVE_SPEED: 0.008
} as const;

// Convert from UI speed (0.001 to 0.01) to animation delay (0.01 to 0.001)
export const speedToDelay = (speed: number): number => {
    return WAVE_SPEED.MAX_DELAY - speed + WAVE_SPEED.MIN_DELAY;
};

// Convert from animation delay (0.01 to 0.001) to UI speed (0.001 to 0.01)
export const delayToSpeed = (delay: number): number => {
    return WAVE_SPEED.MAX_SPEED - delay + WAVE_SPEED.MIN_SPEED;
};
