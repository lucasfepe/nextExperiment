import { GITHUB_USERNAME } from '../constants'
import { components } from "@octokit/openapi-types";

type Repository = components["schemas"]["repository"];

export const getContributionData = async (): Promise<Map<string, number>> => {
    // Check if cached data exists and is from today
    const cached = localStorage.getItem('githubContributions');
    if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        const isToday = new Date(timestamp).toDateString() === new Date().toDateString();

        if (isToday) {
            return new Map(Object.entries(data));
        }
    }

    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setMonth(endDate.getMonth() - 6);

    const contributionData = new Map();

    try {
        const headers = {
            Accept: "application/vnd.github.v3+json",
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        };

        const reposResponse = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
            { headers }
        );
        if (!reposResponse.ok) {
            throw new Error(`Failed to fetch repositories: ${reposResponse.status}`);
        }

        const repos = (await reposResponse.json()) as Repository[];

        const commitPromises = repos.map(async (repo: Repository) => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?author=${GITHUB_USERNAME}&since=${startDate.toISOString()}`,
                    { headers }
                );

                // Handle empty repositories
                if (response.status === 409) {
                    console.warn(`Repository ${repo.name} is empty`);
                    return [];
                }

                if (!response.ok) {
                    console.warn(`Failed to fetch commits for ${repo.name}: ${response.status}`);
                    return [];
                }

                return response.json();
            } catch (error) {
                console.warn(`Error fetching commits for ${repo.name}:`, error);
                return [];
            }
        });

        const allCommits = await Promise.all(commitPromises);

        // Now process the flattened commits
        allCommits.flat().forEach((commit) => {
            if (commit?.commit?.author?.date) {
                const date = commit.commit.author.date.split("T")[0];
                contributionData.set(date, (contributionData.get(date) || 0) + 1);
            }
        });

        // Cache the response with timestamp
        localStorage.setItem('githubContributions', JSON.stringify({
            timestamp: new Date().toISOString(),
            data: Object.fromEntries(contributionData)
        }));

        return contributionData;
    } catch (error) {
        console.error("Error fetching contribution data:", error);
        throw new Error("Error fetching contribution data: " + error);
    }
};