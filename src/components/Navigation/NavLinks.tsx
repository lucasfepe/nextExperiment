'use client'

import { forwardRef } from 'react';
import styles from './styles.module.css';
import { ThemeToggle } from './ThemeToggle';
import { useNavbarLinks } from './hooks/useNavbarLinks';

interface NavLinksProps {
    isMenuOpen: boolean;
    toggleTheme: () => void;
}

export const NavLinks = forwardRef<HTMLUListElement, NavLinksProps>(
    ({ isMenuOpen, toggleTheme }, ref) => {
        useNavbarLinks();
        return (
            <ul ref={ref} className={`${styles['nav-links']} ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <ThemeToggle toggleTheme={toggleTheme} />
                </li>
            </ul>
        );
    }
);

NavLinks.displayName = 'NavLinks';
