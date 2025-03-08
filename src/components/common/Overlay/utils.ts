import { OVERLAY_FADE_DURATION_CSS } from './constants';

export const injectOverlayFadeDurationCSSVariables = () => {
    if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty(
            '--overlay-fade-duration',
            OVERLAY_FADE_DURATION_CSS
        );
    }
};