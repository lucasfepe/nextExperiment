import { useState, useEffect, RefObject } from 'react';

export const useMenu = (
    hamburgerRef: RefObject<HTMLButtonElement | null>,
    navLinksRef: RefObject<HTMLUListElement | null>
) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                hamburgerRef.current &&
                navLinksRef.current &&
                !hamburgerRef.current.contains(e.target as Node) &&
                !navLinksRef.current.contains(e.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [hamburgerRef, navLinksRef]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return { isMenuOpen, toggleMenu };
};
