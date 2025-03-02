import { WeekdaysLegendStyles as styles } from './styles';

export const WeekdaysLegend: React.FC = () => {
    return (
        <div className={styles.weekdays}>
            <span>Sun</span>
            <span>Wed</span>
            <span>Sat</span>
        </div>
    );
};
