import { fadeUpAnimation } from "@/hooks/useAnimations";
import { navigate } from "@/hooks/useNavigation";

export function initScrollEffects(): void {
    // Smooth scrolling for navigation links
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor: HTMLAnchorElement) => {
        anchor.addEventListener('click', function (e: MouseEvent) {
            e.preventDefault();
            const href = this.getAttribute('href');

            if (href) {
                const targetElement = document.querySelector<HTMLElement>(href);
                if (targetElement) {  // Add null check
                    navigate(e, targetElement);
                }
            }
        });

    });

    // Select all sections except the home section
    const sections = document.querySelectorAll<HTMLElement>('#about');

    // Configuration for the IntersectionObserver
    const observerOptions: IntersectionObserverInit = {
        threshold: 0.1
    };

    // Track if user is actively scrolling
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    // Create IntersectionObserver to handle scroll animations
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        // Process each element that intersects with viewport
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
                // Add a slight delay if user is actively scrolling
                const delay = isScrolling ? 200 : 0;
                fadeUpAnimation(entry.target as HTMLElement, delay);
            }
        });
    }, observerOptions);

    // Detect when user is actively scrolling
    window.addEventListener('scroll', () => {
        // Set scrolling flag when scroll starts
        isScrolling = true;

        // Clear any existing timeout
        clearTimeout(scrollTimeout);

        // Reset scrolling flag after user stops scrolling for 150ms
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 150);
    });

    // Initialize each section with starting styles and add to observer
    sections.forEach((section: HTMLElement) => {
        // Set initial state: invisible and shifted down
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';

        // Add smooth transition for opacity and transform
        section.style.transition = 'all 0.5s ease-in-out';

        // Start observing this section
        observer.observe(section);
    });
}
