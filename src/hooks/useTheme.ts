type Theme = 'dark' | 'light';

const THEME = {
  DARK: 'dark' as Theme,
  LIGHT: 'light' as Theme
};

// Local storage key
const STORAGE_KEY = 'theme';

const THEME_ATTRIBUTE = 'data-theme';

export function initThemeToggle(): void {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Check for saved theme preference or default to user's system preference
  const getCurrentTheme = (): Theme => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (savedTheme) {
      return savedTheme;
    }
    return prefersDarkScheme.matches ? THEME.DARK : THEME.LIGHT;
  };

  // Set theme
  const setTheme = (theme: Theme): void => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };

  // Initialize theme
  setTheme(getCurrentTheme());

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute(THEME_ATTRIBUTE) as Theme;
      const newTheme = currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      setTheme(newTheme);
    });
  }
}
