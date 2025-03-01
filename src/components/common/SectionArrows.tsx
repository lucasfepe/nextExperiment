'use client';

// components/SectionArrows.tsx
import { useCallback } from 'react';
import { navigate } from '@/shared/hooks';
import { SECTION_ORDER } from '@/shared/constants';

export const SectionArrow = ({ sectionId }: { sectionId: string }) => {
    const handleClick = useCallback(() => {
        const currentIndex = SECTION_ORDER.indexOf(sectionId);
        const nextSectionId = SECTION_ORDER[currentIndex + 1];

        if (nextSectionId) {
            const nextSection = document.getElementById(nextSectionId);
            if (nextSection) {
                navigate(null, nextSection);
            }
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


