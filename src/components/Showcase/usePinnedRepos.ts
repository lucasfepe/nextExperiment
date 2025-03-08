import {
    getPinnedRepos
} from '@/components/GitContributions/utils'
import { useState, useEffect } from 'react';
import { GitHubGraphQLResponse, PinnedRepo } from '@/shared/types'

export const usePinnedRepos = () => {
    const [pinnedRepos, setPinnedRepos] = useState<PinnedRepo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const pinnedReposData = await getPinnedRepos();
                setPinnedRepos(pinnedReposData);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error occurred'));
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { pinnedRepos, isLoading, error };
};