import { navigate, createArrowButton } from '@/hooks/useNagivation';

// Initialize navigation setup
export const initSideScroll = () => {
    // Define sections that should have arrow buttons
    const sectionsWithArrows = ['about', 'projects'];

    // Setup arrow buttons for specified sections
    sectionsWithArrows.forEach(sectionId => {

        const section = document.getElementById(sectionId);
        if (section) {
            const arrowButton = createArrowButton();
            section.appendChild(arrowButton);

            // Add click handler for the arrow button
            arrowButton.addEventListener('click', () => {
                // Find the next section in the document flow
                const nextSection = section.nextElementSibling as HTMLElement;
                if (nextSection) {
                    navigate(null, nextSection);
                }

            });
        }
    });
};
