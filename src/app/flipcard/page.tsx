import { FlipCard } from '@/components/FlipCard';

export default function FlipCardPage() {
    return (
        
        <FlipCard 
            title="Project Title"
            shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            longDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            thumbnailUrl="https://picsum.photos/300/150"
            projectImages={[
                "https://picsum.photos/400/250",
                "https://picsum.photos/400/250",
                "https://picsum.photos/400/250"]}
            features={[
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
            ]}
            technologies={[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Vite"
            ]}
        />
    );
}
