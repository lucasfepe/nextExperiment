'use client';

// components/SectionArrows.tsx
import { useCallback } from 'react';
import { navigate } from '@/shared/hooks';

export const SectionArrow = ({ sectionId }: { sectionId: string }) => {
    const handleClick = useCallback(() => {
        const section = document.getElementById(sectionId);
        const nextSection = section?.nextElementSibling as HTMLElement;
        if (nextSection) {
            navigate(null, nextSection);
        }
    }, [sectionId]);

    return (
        <button
            className="side-scroll-arrow text-white"
            onClick={handleClick}
            aria-label={`Navigate from ${sectionId}`}
            style={{ opacity: 0, visibility: 'hidden' }}
        >
            <i className="bi bi-chevron-right fs-6 icon-bold"></i>


        </button>
    );
};


