export const adjustToSunday = (date: Date): Date => {
    const adjustedDate = new Date(date);
    while (adjustedDate.getDay() !== 0) {
        adjustedDate.setDate(adjustedDate.getDate() + 1);
    }
    return adjustedDate;
};

export const calculateDaysFromStart = (current: Date, start: Date): number => {
    return Math.floor((current.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
};