export interface FlipCardProps {
    title: string;
    shortDescription: string;
    longDescription: string;
    thumbnailUrl: string;
    projectImages: string[];
    features: string[];
    technologies: string[];
    isExpanded: boolean;
    onToggle: () => void;
}