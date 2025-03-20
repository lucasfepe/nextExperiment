interface RepoDetail {
    features: string[];
    technologies: string[];
    images?: string[];
    live?: string;
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
    },
    "lucasferraripereira": {
        "features": [
            "Interactive, responsive portfolio",
            "Seamless navigation"
        ],
        "technologies": [
            "HTML5",
            "CSS3",
            "Bootstrap",
            "Render"
        ],
        "live": "https://website-tzf6.onrender.com/"
    }

}
