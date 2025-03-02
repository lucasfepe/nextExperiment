import { FC, useRef, useState } from 'react';
import { Tooltip } from './Tooltip';
import { useEmptyHeatMap } from './hooks';
import { HeatmapGridStyles as styles } from './styles';
import { HeatmapDay } from './HeatmapDay';
import { TooltipProps } from './Tooltip';

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
    const heatmapRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const { days } = useEmptyHeatMap();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [tooltipState, setTooltipState] = useState<TooltipProps>({
        text: '',
        visible: false,
        x: 0,
        y: 0
    });
    const handleDayMouseEnter = (e: React.MouseEvent) => {
        if (tooltipRef.current) {
            tooltipRef.current.innerHTML = "Loading...";
            tooltipRef.current.style.display = "block";
            tooltipRef.current.style.left = `${e.pageX + 10}px`;
            tooltipRef.current.style.top = `${e.pageY + 10}px`;
        }
    };
    const handleDayMouseLeave = () => {
        if (tooltipRef.current) {
            tooltipRef.current.style.display = "none";
        }
    };
    return (
        <div ref={heatmapRef} className={styles.grid} id="heatmap">
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
            <Tooltip ref={tooltipRef} state={tooltipState} />
        </div>
    );
};
