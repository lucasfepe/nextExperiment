import { ColorLegendStyles as styles } from './styles';

interface ColorLegendProps {
    colors: {
        level0: string;
        level1: string;
        level2: string;
        level3: string;
        level4: string;
    };
}

export const ColorLegend: React.FC<ColorLegendProps> = ({ colors }) => {
    return (
        <div className={styles.legend}>
            <span>Less</span>
            {Object.values(colors).map((color, index) => (
                <div key={index} className={styles.legendItem}>
                    <div
                        className={styles.legendBox}
                        style={{ backgroundColor: color }}
                    />
                </div>
            ))}
            <span>More</span>
        </div>
    );
};
