'use client';

// hooks/useScrollEffects.ts
import { useEffect } from 'react';
import { fadeUpAnimation } from "@/hooks/useAnimations";
import { navigate } from "@/hooks/useNavigation";

export const useScrollEffects = () => {
    // Handle smooth scrolling
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

    // Handle scroll animations
    useEffect(() => {
        let isScrolling = false;
        let scrollTimeout: NodeJS.Timeout;

        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = isScrolling ? 200 : 0;
                    fadeUpAnimation(entry.target as HTMLElement, delay);
                }
            });
        }, observerOptions);

        // Setup sections
        const sections = document.querySelectorAll<HTMLElement>('#about');
        sections.forEach((section) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.5s ease-in-out';
            observer.observe(section);
        });

        // Scroll handler
        const handleScroll = () => {
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 150);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            clearTimeout(scrollTimeout);
        };
    }, []);
};
