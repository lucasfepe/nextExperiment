import { useState, useEffect } from 'react';

export const useNavVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('#home');
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setIsVisible(heroBottom <= 0);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isVisible;
};
