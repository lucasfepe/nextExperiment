'use client'
import { useRef } from 'react';
import styles from './styles.module.css';
import { useTheme } from '@/shared/hooks';
import { useNavVisibility } from '@/components/Navigation/hooks/useNavVisibility';
import { useMenu } from '@/components/Navigation/hooks/useMenu';
import { NavLinks } from './NavLinks';

export default function Navigation() {
    const hamburgerBtnRef = useRef<HTMLButtonElement>(null);
    const navLinksRef = useRef<HTMLUListElement>(null);
    const navRef = useRef<HTMLElement>(null);

    const { toggleTheme } = useTheme();
    const isVisible = useNavVisibility();
    const { isMenuOpen, toggleMenu } = useMenu(hamburgerBtnRef, navLinksRef);

    return (
        <nav ref={navRef} className={`${styles.navbar} ${isVisible ? styles.visible : ''}`}>
            <div className="logo">Luke Ferrari</div>
            <button
                ref={hamburgerBtnRef}
                className={styles.hamburger}
                aria-label="Toggle navigation"
                onClick={toggleMenu}
                type="button"
            >
                <i className="bi bi-list"></i>
            </button>
            <NavLinks
                ref={navLinksRef}
                isMenuOpen={isMenuOpen}
                toggleTheme={toggleTheme}
            />
        </nav>
    );
}
