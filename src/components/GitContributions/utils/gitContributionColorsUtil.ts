import { GIT_CONTIBUTION_LEVEL_COLORS } from '@/components/GitContributions/constants';
export function getGitContributionColor(count: number): string {
    if (count === 0) return GIT_CONTIBUTION_LEVEL_COLORS.level0;
    if (count <= 3) return GIT_CONTIBUTION_LEVEL_COLORS.level1;
    if (count <= 6) return GIT_CONTIBUTION_LEVEL_COLORS.level2;
    if (count <= 9) return GIT_CONTIBUTION_LEVEL_COLORS.level3;
    return GIT_CONTIBUTION_LEVEL_COLORS.level4;
}