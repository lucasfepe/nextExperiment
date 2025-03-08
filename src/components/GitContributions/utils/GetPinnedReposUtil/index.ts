import { GITHUB_USERNAME } from "@/components/GitContributions/constants";
import { GitHubGraphQLResponse } from '@/shared/types'

const CACHE_KEY = 'github_pinned_repos';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface CachedData {
    timestamp: number;
    data: any;
}

export const getPinnedRepos = async () => {
    // Try to get cached data
    const cachedData = getCachedData();
    if (cachedData) {
        return cachedData;
    }

    if (process.env.NODE_ENV === 'development') {
        console.log('GitHub token exists:', !!process.env.NEXT_PUBLIC_GITHUB_TOKEN);
    }

    const query = `{
        user(login: "${GITHUB_USERNAME}") {
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                    ... on Repository {
                        name
                        description
                        url
                        openGraphImageUrl
                        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                            nodes {
                                name
                                color
                            }
                            totalSize
                            edges {
                                size
                            }
                        }
                    }
                }
            }
        }
    }`;

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`GitHub API error: ${errorData}`);
        }

        const data: GitHubGraphQLResponse = await response.json();

        if (data.errors) {
            throw new Error(data.errors[0].message);
        }

        const repos = data.data.user.pinnedItems.nodes;

        // Cache the fresh data
        setCachedData(repos);

        return repos;
    } catch (error) {
        throw new Error("Error fetching pinned repositories: " + error);
    }
};

function getCachedData(): any | null {
    try {
        // Only run in browser environment
        if (typeof window === 'undefined') return null;

        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return null;

        const { timestamp, data }: CachedData = JSON.parse(cached);

        // Check if cache is expired
        if (Date.now() - timestamp > CACHE_EXPIRY) {
            localStorage.removeItem(CACHE_KEY);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error reading from cache:', error);
        return null;
    }
}

function setCachedData(data: any): void {
    try {
        // Only run in browser environment
        if (typeof window === 'undefined') return;

        const cacheData: CachedData = {
            timestamp: Date.now(),
            data
        };

        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
        console.error('Error setting cache:', error);
    }
}
