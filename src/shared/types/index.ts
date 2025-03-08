interface LanguageNode {
    name: string;
    color: string;
}

interface LanguageEdge {
    size: number;
}

interface LanguagesInfo {
    nodes: LanguageNode[];
    totalSize: number;
    edges: LanguageEdge[];
}

export interface PinnedRepo {
    name: string;
    description: string | null;
    url: string;
    openGraphImageUrl: string;
    languages: LanguagesInfo;
}

export interface GitHubGraphQLResponse {
    data: {
        user: {
            pinnedItems: {
                nodes: PinnedRepo[];
            };
        },
    };
    errors?: { message: string }[];
}
