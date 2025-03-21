export interface FlipCardProps {
    title: string;
    shortDescription: string;
    longDescription: string;
    thumbnailUrl: string;
    url: string;
    projectImages?: string[];
    features: string[];
    languages: string[];
    extraLanguages?: string[];
    technologies: string[];
    live?: string;
    isExpanded: boolean;
    onToggle: (event: React.MouseEvent<HTMLDivElement> | null) => void;
    onSetHandleClose?: (handleClose: () => void) => void;
}