interface RepoDetail {
    features: string[];
    technologies: string[];
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
        ]
    },
    "nextExperiment": {
        "features": [
            "Portal-based card animations",
            "Custom React hooks",
            "Stacking context-aware animation layers"
        ],
        "technologies": [
            "Next.js",
            "GitHub API",
            "Husky"
        ]
    },
    "Divine": {
    "features": [
        "Hundreds of scripts utilizing OOP principles",
        "Implementation of design patterns",
        "Scalable, maintainable, and reusable architecture"
    ],
    "technologies": [
        "DOTween",
        "Unity"
    ]
}
}
