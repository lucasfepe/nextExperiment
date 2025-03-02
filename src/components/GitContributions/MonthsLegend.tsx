import { useMemo } from 'react';
import { MonthsLegendStyles as styles } from './styles';

interface MonthsLegendProps {
    startDate: Date;
    endDate: Date;
}

export const MonthsLegend: React.FC<MonthsLegendProps> = ({ startDate, endDate }) => {
    const months = useMemo(() => {
        const months: string[] = [];
        const currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            const month = currentDate.toLocaleString('default', { month: 'short' });
            if (!months.includes(month)) {
                months.push(month);
            }
            currentDate.setDate(currentDate.getDate() + 7);
        }

        return months;
    }, [startDate, endDate]);

    return (
        <div className={styles.months}>
            {months.map((month, index) => (
                <span key={index}>{month}</span>
            ))}
        </div>
    );
};
