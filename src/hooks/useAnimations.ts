export const fadeUpAnimation = (
    element: HTMLElement | null,
    delay: number
): void => {
    if (element) {
        // Trigger animation after a short delay
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    }
};
