import styles from '@/ui/navigation.module.css';

interface ThemeToggleProps {
    toggleTheme: () => void;
}

export const ThemeToggle = ({ toggleTheme }: ThemeToggleProps) => {
    return (
        <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            type="button"
            className={styles['theme-toggle']}
        >
            <span className={styles.sun}>☀️</span>
            <span className={styles.moon}>🌙</span>
        </button>
    );
};
