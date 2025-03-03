import { HeatmapGrid } from './HeatmapGrid';
import { MonthsLegend } from './MonthsLegend';
import { WeekdaysLegend } from './WeekdaysLegend';
import { ColorLegend } from './ColorLegend';
import { Controls } from './Controls';
import { GitContributionsStyles as styles } from './styles';
import { useGithubContributions } from './hooks';
import { useDateRange } from './hooks/useDateRange';
import { useState } from 'react';
import { WAVE_SPEED, speedToDelay } from '@/shared/utils';
import { Button, Collapse, Card } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import { GIT_CONTIBUTION_LEVEL_COLORS } from './constants';


export const GitContributions = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { contributionData, isLoading, error } = useGithubContributions();
    const { dateRange, setDateRange } = useDateRange();
    const [waveSpeed, setWaveSpeed] = useState<number>(WAVE_SPEED.DEFAULT_WAVE_SPEED);  // Rename the state setter
    const [open, setOpen] = useState(false);

    if (error) {
        return <div>Error loading contribution data: {error.message}</div>;
    }

    const renderButtonContent = () => {
        // First check if there's no contribution data
        if (contributionData?.size === 0) {
            // No contribution data - check if open or closed
            if (open) {
                return (
                    <>
                        Collapse
                        <br />
                        <ChevronUp className="mt-1" size={16} />
                    </>
                );
            } else {
                return (
                    <>
                        Play with loading animation! 🎮
                        <br />
                        <ChevronDown className="mt-1" size={16} />
                    </>
                );
            }
        }

        // Has contribution data - check if open or closed
        if (open) {
            return (
                <>
                    See git contributions
                    <br />
                    <ChevronUp className="mt-1" size={16} />
                </>
            );
        } else {
            return (
                <>
                    Play with loading animation! 🎮
                    <br />
                    <ChevronDown className="mt-1" size={16} />
                </>
            );
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>GitHub Contribution Activity</h2>
            <div className={styles.heatmapWrapper}>
                <MonthsLegend startDate={dateRange.startDate} endDate={dateRange.endDate} />
                <WeekdaysLegend />
                <HeatmapGrid
                    contributionData={contributionData}
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                    waveDelay={speedToDelay(waveSpeed)}
                    isLoading={isLoading || open}
                />
            </div>
            {
                !isLoading && !open 
                    ? <ColorLegend colors={GIT_CONTIBUTION_LEVEL_COLORS}/> 
                    : <div className={styles.legendPlaceholder}></div>
            }
            <div className="d-flex justify-content-center">
                <Button
                    onClick={() => setOpen(!open)}
                    className={`mt-3 mb-3 ${styles['custom-button']}`}
                    aria-controls="controlsCollapse"
                    aria-expanded={open}
                >
                    {renderButtonContent()}
                </Button>
            </div>

            <Collapse in={open}>
                <div id="controlsCollapse">
                    <Card body>
                        <Controls onWaveSpeedChange={setWaveSpeed} defaultWaveSpeed={waveSpeed} />
                    </Card>
                </div>
            </Collapse>
        </div>
    );
};
