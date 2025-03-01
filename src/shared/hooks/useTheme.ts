'use client'

import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

const THEME = {
    DARK: 'dark' as Theme,
    LIGHT: 'light' as Theme
};

const STORAGE_KEY = 'theme';
const THEME_ATTRIBUTE = 'data-theme';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
        const initialTheme = savedTheme || (prefersDarkScheme.matches ? THEME.DARK : THEME.LIGHT);

        setTheme(initialTheme);
        document.documentElement.setAttribute(THEME_ATTRIBUTE, initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
        setTheme(newTheme);
        document.documentElement.setAttribute(THEME_ATTRIBUTE, newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
    };

    return { theme, toggleTheme };
};
