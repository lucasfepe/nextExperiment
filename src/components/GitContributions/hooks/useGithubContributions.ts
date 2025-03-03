import { useState, useEffect } from 'react';
import {
    getContributionData
} from '@/components/GitContributions/utils'
export const useGithubContributions = () => {
    const [contributionData, setContributionData] = useState<Map<string, number>>(new Map());
    const [pinnedRepos, setPinnedRepos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const contributionData = await
                    getContributionData()
                    ;
                setContributionData(contributionData);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error occurred'));
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { contributionData, pinnedRepos, isLoading, error };
};
