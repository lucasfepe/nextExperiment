import { ColorLegend } from './ColorLegend';
import { Controls } from './Controls';
import { GitContributionsStyles as styles } from './styles';
import { useGithubContributions } from './hooks';
import { useDateRange } from './hooks/useDateRange';
import { useState } from 'react';
import { WAVE_SPEED, speedToDelay } from '@/shared/utils';
import { Collapse, Card } from 'react-bootstrap';
import { GIT_CONTIBUTION_LEVEL_COLORS } from './constants';
import { HeatmapContainer } from './HeatmapContainer';
import { ToggleButton } from './ToggleButton';


export const GitContributions = () => {
    const { contributionData, isLoading, error } = useGithubContributions();
    const { dateRange, setDateRange } = useDateRange();
    const [waveSpeed, setWaveSpeed] = useState<number>(WAVE_SPEED.DEFAULT_WAVE_SPEED);
    const [open, setOpen] = useState(false);

    if (error) {
        return <div>Error loading contribution data: {error.message}</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>GitHub Contribution Activity</h2>
            <HeatmapContainer
                contributionData={contributionData}
                dateRange={dateRange}
                setDateRange={setDateRange}
                waveDelay={speedToDelay(waveSpeed)}
                isLoading={isLoading || open}
            />

            {!isLoading && !open 
                ? <ColorLegend colors={GIT_CONTIBUTION_LEVEL_COLORS}/> 
                : <div className={styles.legendPlaceholder}></div>
            }

            <div className="d-flex justify-content-center">
                <ToggleButton 
                    open={open} 
                    setOpen={setOpen}
                    contributionData={contributionData}
                />
            </div>

            <Collapse in={open}>
                <div id="controlsCollapse">
                    <Card body>
                        <Controls 
                            onWaveSpeedChange={setWaveSpeed} 
                            defaultWaveSpeed={waveSpeed} 
                        />
                    </Card>
                </div>
            </Collapse>
        </div>
    );
};
