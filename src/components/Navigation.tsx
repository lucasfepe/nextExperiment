'use client'
import { useState, useRef, useEffect } from 'react'
import styles from '@/ui/navigation.module.css'

type Theme = 'dark' | 'light';

const THEME = {
  DARK: 'dark' as Theme,
  LIGHT: 'light' as Theme
};

const STORAGE_KEY = 'theme';
const THEME_ATTRIBUTE = 'data-theme';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [theme, setTheme] = useState<Theme>('light')
  const hamburgerBtnRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#home');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom <= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        hamburgerRef.current &&
        navLinksRef.current &&
        !hamburgerRef.current.contains(e.target as Node) &&
        !navLinksRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={`${styles.navbar} ${isVisible ? styles.visible : ''}`}>
      <div className="logo">Luke Ferrari</div>
      <button
        ref={hamburgerBtnRef}
        className={styles.hamburger}
        aria-label="Toggle navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
      >
        <i className="bi bi-list"></i>
      </button>
      <ul ref={navLinksRef} className={`${styles['nav-links']} ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
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
        </li>
      </ul>
    </nav>
  )
}
