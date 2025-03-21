interface RepoDetail {
    features: string[];
    technologies: string[];
    images?: string[];
    live?: string;
    languages?: string[];
}

type ReposDetailsType = {
    [key: string]: RepoDetail;
}

export const REPOS_DETAILS: ReposDetailsType = {
    "CelestesWebsite": {
        "features": [
            "AI-generated game art",
            "AWS Cognito authentication",
            "Global multiplayer with CloudFront"
        ],
        "technologies": [
            "Unity",
            "Xsolla",
            "AWS",
            "WebGL"
        ],
        "images": [
            "/assets/images/Celestes/Celestes1.png",
            "/assets/images/Celestes/Celestes2.png",
            "/assets/images/Celestes/Celestes3.png",
            "/assets/images/Celestes/Celestes4.png",
            "/assets/images/Celestes/Celestes5.png",
            "/assets/images/Celestes/Celestes6.png"
        ]
    },
    "recorderhero": {
        "features": [
            "Real-time audio feedback",
            "Musical notation display",
            "Competitive ranking system"
        ],
        "technologies": [
            "React",
            "SpringBoot",
            "Keycloak"
        ],
        "images": [
            "/assets/images/RH/RH1.jpg"
        ]
    },

    "nextExperiment": {
        "features": [
            "Engaging portal-based card animations for dynamic user interaction",
            "Custom React hooks that streamline component behavior",
            "Layered, stacking-context-sensitive animations for enhanced UI fluidity"
        ],
        "technologies": [
            "Next.js",
            "GitHub REST API",
            "GitHub GraphQL API",
            "Husky",
            "Prettier"
        ]
    },
    "Divine": {
        "features": [
            "Hundreds of scripts employing robust OOP principles",
            "Seamless implementation of design patterns for scalability",
            "Architected for performance: reusable, maintainable code"
        ],
        "technologies": [
            "Unity Services",
            "Xsolla",
            "DOTween",
            "AWS API",
            "AWS SDK .NET"
        ]
    },
    "lucasferraripereira": {
        "features": [
            "Fully responsive design for flawless mobile and desktop views",
            "Interactive, creative portfolio",
            "Sleek Bootstrap carousel for captivating art display",
            "JS-driven email masking"
        ],
        "technologies": [
            "JS",
            "HTML5",
            "CSS3",
            "Bootstrap",
            "Render",
            "Typekit"
        ],
        "languages": [
            "JavaScript"
        ],
        "live": "https://website-tzf6.onrender.com/"
    },
    "AWS_IAC_Celestes": {
        "features": [
            "Serverless, scalable backend leveraging AWS SAM",
            "Reusable Lambda Layers to streamline cloud operations",
            "Highly secure authentication with AWS Cognito"
        ],
        "technologies": [
            "AWS Lambda",
            "AWS SAM",
            "AWS DynamoDB",
            "AWS Cognito",
            "AWS IAM",
            "Lambda Layers",
            "SSM Parameter Store"
        ],
        "languages": [
            "YAML"
        ]
    }




}
