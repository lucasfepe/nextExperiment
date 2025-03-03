export interface DayElement {
    date: string;
    contributionCount?: number;
    animationDelay?: string;
    isLoading?: boolean;
}

export interface DateRange {
    startDate: Date;
    endDate: Date;
}