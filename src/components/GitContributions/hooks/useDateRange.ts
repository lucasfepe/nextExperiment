import { useState } from 'react';
import { DateRange } from '@/components/GitContributions/types';
import { adjustToSunday } from '@/components/GitContributions/utils';

export const useDateRange = (adjustToWeekStart: boolean = false) => {
    const [dateRange, setDateRange] = useState<DateRange>(() => {
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setMonth(endDate.getMonth() - 6);

        return {
            startDate: adjustToWeekStart ? adjustToSunday(startDate) : startDate,
            endDate
        };
    });

    return { dateRange, setDateRange };
};
