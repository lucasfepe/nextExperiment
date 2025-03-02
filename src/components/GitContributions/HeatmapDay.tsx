import { DayElement } from './types';
import { HeatmapDayStyles as styles } from './styles';

interface HeatmapDayProps {
    day: DayElement;
    onMouseEnter: (e: React.MouseEvent) => void;
    onMouseLeave: () => void;
}

export const HeatmapDay: React.FC<HeatmapDayProps> = ({ day, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className={`${styles.day} ${styles.loading}`}
            data-date={day.date}
            style={{ animationDelay: day.animationDelay }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
};