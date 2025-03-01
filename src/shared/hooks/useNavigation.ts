interface ButtonElement extends HTMLButtonElement {
    style: CSSStyleDeclaration;
}
//very cool: used in three components
export const navigate = (event: MouseEvent | null, element: HTMLElement): void => {
    event?.preventDefault();

    // Get all arrow buttons
    const allArrowButtons = document.querySelectorAll<ButtonElement>('.side-scroll-arrow');

    // Hide all arrow buttons first
    allArrowButtons.forEach(button => {
        toggleButtonVisibility(button, false);
    });

    // Show the arrow button for the target section if it exists
    const sectionArrowButton = element.querySelector<ButtonElement>('.side-scroll-arrow');
    if (sectionArrowButton) {
        toggleButtonVisibility(sectionArrowButton, true);
    }

    element.scrollIntoView({
        behavior: 'smooth'
    });
}



// Helper function to toggle button visibility
export const toggleButtonVisibility = (button: ButtonElement, show: boolean): void => {
    button.style.opacity = show ? '1' : '0';
    button.style.visibility = show ? 'visible' : 'hidden';
};
