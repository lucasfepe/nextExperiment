"use client";
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.css';
import { injectOverlayFadeDurationCSSVariables } from './utils';

interface OverlayProps {
  isVisible: boolean;
  onClose?: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose }) => {

  useEffect(() => {
    injectOverlayFadeDurationCSSVariables();
  }, []);

  return createPortal(
    <div
      className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}
      onClick={onClose}
    />,
    document.getElementById('overlay-root')!
  );
};
