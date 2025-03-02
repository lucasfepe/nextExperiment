import { useEffect, useState } from 'react';
import { DayElement } from '@/components/GitContributions/types';
import { calculateDaysFromStart } from '@/components/GitContributions/utils';
import { useDateRange } from './useDateRange';

export const useEmptyHeatMap = () => {
    const [days, setDays] = useState<DayElement[]>([]);
    const { dateRange, setDateRange } = useDateRange(true); // true to adjust to Sunday

    useEffect(() => {
        const generateHeatmapData = () => {
            const newDays: DayElement[] = [];

            for (let d = new Date(dateRange.startDate); d <= dateRange.endDate; d.setDate(d.getDate() + 1)) {
                const dateStr = d.toISOString().split('T')[0];
                const daysFromStart = calculateDaysFromStart(d, dateRange.startDate);
                const delayMultiplier = getComputedStyle(document.documentElement)
                    .getPropertyValue('--wave-delay-multiplier') || '0.003';

                newDays.push({
                    date: dateStr,
                    animationDelay: `${daysFromStart * parseFloat(delayMultiplier)}s`
                });
            }

            setDays(newDays);
            setDateRange({ startDate: dateRange.startDate, endDate: dateRange.endDate });
        };

        generateHeatmapData();
    }, []);

    return {
        days,
        dateRange,
        setDateRange
    };
};
