import { useEffect } from 'react';
import { fadeUpAnimation } from "@/shared/animations";

// Constants
const SCROLL_DEBOUNCE_TIME = 150;
const SCROLL_ANIMATION_DELAY = 200;
const INTERSECTION_THRESHOLD = 0.1;

// Types
interface ScrollState {
    isScrolling: boolean;
    timeout: NodeJS.Timeout | null;
}

export const ScrollAnimationWrapper = ({ children }) => {
    useEffect(() => {
        // Scroll state management
        const scrollState: ScrollState = {
            isScrolling: false,
            timeout: null
        };

        // Create intersection observer
        const observer = createIntersectionObserver(scrollState);

        // Observe target elements
        const targetElements = document.querySelectorAll(targetSelector);
        targetElements.forEach(element => observer.observe(element));

        // Setup scroll handler
        const handleScroll = createScrollHandler(scrollState);
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => cleanup(observer, handleScroll, scrollState);
    }, [targetSelector]);
};

// Helper functions
const createIntersectionObserver = (scrollState: ScrollState): IntersectionObserver => {
    const observerOptions: IntersectionObserverInit = {
        threshold: INTERSECTION_THRESHOLD
    };

    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = scrollState.isScrolling ? SCROLL_ANIMATION_DELAY : 0;
                fadeUpAnimation(entry.target as HTMLElement, delay);
            }
        });
    }, observerOptions);
};

const createScrollHandler = (scrollState: ScrollState) => {
    return () => {
        scrollState.isScrolling = true;

        if (scrollState.timeout) {
            clearTimeout(scrollState.timeout);
        }

        scrollState.timeout = setTimeout(() => {
            scrollState.isScrolling = false;
        }, SCROLL_DEBOUNCE_TIME);
    };
};

const cleanup = (
    observer: IntersectionObserver,
    handleScroll: () => void,
    scrollState: ScrollState
) => {
    window.removeEventListener('scroll', handleScroll);
    observer.disconnect();

    if (scrollState.timeout) {
        clearTimeout(scrollState.timeout);
    }
};
