interface StyleElementOptions {
    cssContent: string;
    id?: string;
}

/**
 * Creates a style element with the provided CSS content
 * @param {string} cssContent - The CSS content to be added to the style element
 * @param {string} [id] - Optional ID for the style element
 * @returns {HTMLStyleElement} The created style element
 */
export function createStyleElement(cssContent: string, id: string = ''): HTMLStyleElement {
    const style: HTMLStyleElement = document.createElement('style');

    // Add optional ID if provided
    if (id) {
        style.id = id;
    }

    // Ensure style element is valid for older browsers
    style.type = 'text/css';

    // Add the CSS content
    if ('styleSheet' in style) {
        // For IE8 and below
        (style as any).styleSheet.cssText = cssContent;
    } else {
        // For modern browsers
        style.textContent = cssContent;
    }

    return style;
}