import { useState, useEffect } from 'react';
import {
    getContributionData
} from '@/components/GitContributions/utils'

// Create a singleton promise to ensure only one request is made
let contributionDataPromise: Promise<Map<string, number>> | null = null;

export const useGithubContributions = () => {
    const [contributionData, setContributionData] = useState<Map<string, number>>(new Map());
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setIsLoading(true);

                // If there's no existing promise, create one
                if (!contributionDataPromise) {
                    contributionDataPromise = getContributionData();
                }

                // Reuse the existing promise
                const data = await contributionDataPromise;

                if (isMounted) {
                    setContributionData(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err : new Error('Unknown error occurred'));
                }
                // Clear the promise if there was an error
                contributionDataPromise = null;
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return { contributionData, isLoading, error };
};
