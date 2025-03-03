import { FC, useState } from 'react';
import { Tooltip } from './Tooltip';
import { useEmptyHeatMap } from './hooks';
import { HeatmapGridStyles as styles } from './styles';
import { HeatmapDay } from './HeatmapDay';

interface HeatmapGridProps {
    contributionData: Map<string, number>;
    dateRange: { startDate: Date; endDate: Date };
    setDateRange: (range: { startDate: Date; endDate: Date }) => void;
    waveDelay: number;
}

export const HeatmapGrid: FC<HeatmapGridProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contributionData,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dateRange,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setDateRange,
    waveDelay
}) => {
    const getDelay = (index: number) => `${index * waveDelay}s`;
    const { days } = useEmptyHeatMap();
    const [showTooltip, setShowTooltip] = useState(false);
    const handleDayMouseEnter = (e: React.MouseEvent) => {

    };
    const handleDayMouseLeave = () => {

    };

    return (
        <div
            className={styles.grid}
            id="heatmap"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {days.map((day, index) => (
                <HeatmapDay
                    key={day.date}
                    day={{
                        ...day,
                        animationDelay: getDelay(index)
                    }}
                    onMouseEnter={handleDayMouseEnter}
                    onMouseLeave={handleDayMouseLeave}
                />
            ))}
            {contributionData.size === 0 && showTooltip && (
                <Tooltip text="Loading data..." />
            )}
        </div>
    );
};
