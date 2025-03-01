'use client';

// components/Section.tsx
import { ReactNode } from 'react';
import { SectionArrow } from './SectionArrows';

interface SectionProps {
    id: string;
    children: ReactNode;
    showArrow?: boolean;
}

export const HorizontalSectionWrapper = ({ id, children, showArrow = false }: SectionProps) => {
    return (
        <section id={id} className={`section`}>
            {children}
            {showArrow && <SectionArrow sectionId={id} />}
        </section>
    );
};
