import { navigate } from "./useNavigation";
import { useEffect } from 'react';

export const useNavbarLinks = () => {
    // Adds functionality to navbar links to scroll to respective section
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            const target = e.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute('href');

            if (href) {
                const targetElement = document.querySelector<HTMLElement>(href);
                if (targetElement) {
                    navigate(e, targetElement);
                }
            }
        };

        const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleClick);
        });

        // Cleanup
        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleClick);
            });
        };
    }, []);
    // Empty dependency array ensures this effect runs once on mount
};