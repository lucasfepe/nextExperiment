// src/components/FlipCard/utils/injectCSSVariables.ts
import {
    FLIP_CARD_ANIMATION_DURATION_CSS
} from '../constants';

export const injectFlipCardCSSVariables = () => {
    if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty(
            '--flip-card-animation-duration',
            FLIP_CARD_ANIMATION_DURATION_CSS
        );
    }
};

