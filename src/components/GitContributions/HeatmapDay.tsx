import React, { useState } from 'react'
import { DayElement } from './types';
import { HeatmapDayStyles as styles } from './styles';
import { Tooltip } from './Tooltip';
import { getGitContributionColor } from './utils';

interface HeatmapDayProps {
    day: DayElement;
}

export const HeatmapDay: React.FC<HeatmapDayProps> = ({ day }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const message = `${day.contributionCount || 0} contributions on ${day.date}`;

    // Determine styles based on loading state
    const dayStyles = {
        animationDelay: day.animationDelay,
        ...(day.isLoading 
                ? {} 
                : { backgroundColor: getGitContributionColor(day.contributionCount || 0) })
    };
    
    return (
        <>
            <div
                className={`${styles.day} ${day.isLoading ? styles.loading : ''}`}
                data-date={day.date}
                style={dayStyles}
                onMouseEnter={(e) => {
                    setShowTooltip(true);
                }}
                onMouseLeave={() => {
                    setShowTooltip(false);
                }}
            />
            {!day.isLoading && showTooltip && <Tooltip text={message} />}
        </>
    );
};