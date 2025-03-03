import { useState, useEffect } from 'react';
import { GITHUB_USERNAME } from '@/components/GitContributions/constants';
export const useGithubContributions = () => {
    const [contributionData, setContributionData] = useState<Map<string, number>>(new Map());
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const getContributionData = async (): Promise<Map<string, number>> => {
        // Check if cached data exists and is from today
        const cached = localStorage.getItem('githubContributions');
        if (cached) {
            const { timestamp, data } = JSON.parse(cached);
            const isToday = new Date(timestamp).toDateString() === new Date().toDateString();

            if (isToday) {
                await new Promise(resolve => setTimeout(resolve, 7000));
                return new Map(Object.entries(data));
            }
        }

        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setMonth(endDate.getMonth() - 6);

        const contributionData = new Map();

        try {
            const headers = {
                Accept: "application/vnd.github.v3+json"
            };

            const reposResponse = await fetch(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
                { headers }
            );
            const repos = await reposResponse.json();

            for (const repo of repos) {
                const commitsResponse = await fetch(
                    `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?author=${GITHUB_USERNAME}&since=${startDate.toISOString()}`,
                    { headers }
                );
                const commits = await commitsResponse.json();

                if (Array.isArray(commits)) {
                    commits.forEach((commit) => {
                        const date = commit.commit.author.date.split("T")[0];
                        contributionData.set(date, (contributionData.get(date) || 0) + 1);
                    });
                }
            }

            // Cache the response with timestamp
            localStorage.setItem('githubContributions', JSON.stringify({
                timestamp: new Date().toISOString(),
                data: Object.fromEntries(contributionData)
            }));

            return contributionData;
        } catch (error) {
            throw new Error("Error fetching contribution data: " + error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await getContributionData();
                setContributionData(data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error occurred'));
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { contributionData, isLoading, error };
};
