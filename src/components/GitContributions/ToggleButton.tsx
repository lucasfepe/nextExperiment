import { GitContributionsStyles as styles } from './styles';
import { Button } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

interface ToggleButtonProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    contributionData: Map<string, number>;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ open, setOpen, contributionData }) => {
    const renderButtonContent = () => {
        if (contributionData?.size === 0) {
            return open ? (
                <>
                    Collapse<br />
                    <ChevronUp className="mt-1" size={16} />
                </>
            ) : (
                <>
                    Play with loading animation! 🎮<br />
                    <ChevronDown className="mt-1" size={16} />
                </>
            );
        }

        return open ? (
            <>
                See git contributions<br />
                <ChevronUp className="mt-1" size={16} />
            </>
        ) : (
            <>
                Play with loading animation! 🎮<br />
                <ChevronDown className="mt-1" size={16} />
            </>
        );
    };

    return (
        <Button
            onClick={() => setOpen(!open)}
            className={`mt-3 mb-3 ${styles['custom-button']}`}
            aria-controls="controlsCollapse"
            aria-expanded={open}
        >
            {renderButtonContent()}
        </Button>
    );
};