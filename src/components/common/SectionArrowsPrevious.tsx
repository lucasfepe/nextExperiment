'use client';

// components/SectionArrows.tsx
import { useCallback } from 'react';
import { navigate } from '@/shared/hooks';
import { SECTION_ORDER } from '@/shared/constants';

export const SectionArrowPrevious = ({ sectionId }: { sectionId: string }) => {
    const handleClick = useCallback(() => {
        const currentIndex = SECTION_ORDER.indexOf(sectionId);
        const previousSectionId = SECTION_ORDER[currentIndex - 1];

        if (previousSectionId) {
            const nextSection = document.getElementById(previousSectionId);
            if (nextSection) {
                navigate(null, nextSection);
            }
        }
    }, [sectionId]);

    return (
        <button
            className="side-scroll-arrow text-white arrow-prev"
            onClick={handleClick}
            aria-label={`Navigate from ${sectionId}`}
            style={{  }}
        >
            <i className="bi bi-chevron-left fs-6 icon-bold"></i>


        </button>
    );
};


