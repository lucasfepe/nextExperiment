import { fadeUpAnimation } from "../utils/animations.js";
import { navigate } from "../utils/navigation.js";

export let finalTitleBottom;

export function initHeroEffects() {
    // Initial setup for hero section
    fadeUpAnimation(document.querySelector('.hero-content-title'), 200);
    fadeUpAnimation(document.querySelector('.hero-content-text'), 800);

    // Down Arrow functionality
    document.querySelector('.scroll-indicator button').addEventListener('click', () => {
        navigate(null, document.querySelector('#about'));
    }
    );
}