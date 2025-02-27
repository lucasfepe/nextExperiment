interface ButtonElement extends HTMLButtonElement {
    style: CSSStyleDeclaration;
}

export const navigate = (event: MouseEvent | null, element: HTMLElement): void => {
    debugger;
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

// Create arrow button factory function
export const createArrowButton = (): HTMLButtonElement => {
    const button = document.createElement('button');
    button.classList.add('side-scroll-arrow');
    button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    button.style.opacity = '0';
    button.style.visibility = 'hidden';
    return button;
};

// Helper function to toggle button visibility
export const toggleButtonVisibility = (button: ButtonElement, show: boolean): void => {
    button.style.opacity = show ? '1' : '0';
    button.style.visibility = show ? 'visible' : 'hidden';
};
