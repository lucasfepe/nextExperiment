import { DateRange } from './types';
import { MonthsLegend } from './MonthsLegend';
import { WeekdaysLegend } from './WeekdaysLegend';
import { HeatmapGrid } from './HeatmapGrid';
import { GitContributionsStyles as styles } from './styles';

interface HeatmapContainerProps {
    contributionData: Map<string, number>;
    dateRange: DateRange;
    setDateRange: (range: DateRange) => void;
    waveDelay: number;
    isLoading: boolean;
}

export const HeatmapContainer: React.FC<HeatmapContainerProps> = ({
    contributionData,
    dateRange,
    setDateRange,
    waveDelay,
    isLoading
}) => (
    <div className={styles.heatmapWrapper}>
        <MonthsLegend startDate={dateRange.startDate} endDate={dateRange.endDate} />
        <WeekdaysLegend />
        <HeatmapGrid
            contributionData={contributionData}
            dateRange={dateRange}
            setDateRange={setDateRange}
            waveDelay={waveDelay}
            isLoading={isLoading}
        />
    </div>
);