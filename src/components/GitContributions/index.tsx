import { HeatmapGrid } from './HeatmapGrid';
import { MonthsLegend } from './MonthsLegend';
import { WeekdaysLegend } from './WeekdaysLegend';
import { ColorLegend } from './ColorLegend';
import { Controls } from './Controls';
import { GitContributionsStyles as styles } from './styles';
import { useGithubContributions } from './hooks';
import { useDateRange } from './hooks/useDateRange';

export const GitContributions = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { contributionData, isLoading, error } = useGithubContributions();
    const { dateRange, setDateRange } = useDateRange();


    if (error) {
        return <div>Error loading contribution data: {error.message}</div>;
    }

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>GitHub Contribution Activity</h2>
            <div className={styles.heatmapWrapper}>
                <MonthsLegend startDate={dateRange.startDate} endDate={dateRange.endDate} />
                <WeekdaysLegend />
                <HeatmapGrid
                    contributionData={contributionData}
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                />
            </div>
            <ColorLegend colors={{
                level0: '#ebedf0',
                level1: '#9be9a8',
                level2: '#40c463',
                level3: '#30a14e',
                level4: '#216e39'
            }} />
            <Controls />
        </div>
    );
};
