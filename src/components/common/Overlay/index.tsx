"use client";
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

interface OverlayProps {
  isVisible: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({ isVisible }) => {
  if (typeof window === 'undefined') return null;

  return createPortal(
    <div className={`${styles.overlay} ${isVisible ? styles.visible : ''}`} />,
    document.getElementById('overlay-root')!
  );
};
