// New: src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return { isDarkMode, toggleTheme };
}
