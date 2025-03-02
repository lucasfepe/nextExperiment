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
}

export const HeatmapGrid: FC<HeatmapGridProps> = () => {
    const heatmapRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const { days } = useEmptyHeatMap(heatmapRef, tooltipRef);
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
            {days.map((day) => (
                <HeatmapDay
                    key={day.date}
                    day={day}
                    onMouseEnter={handleDayMouseEnter}
                    onMouseLeave={handleDayMouseLeave}
                />
            ))}
            <Tooltip ref={tooltipRef} state={tooltipState} />
        </div>
    );
};
