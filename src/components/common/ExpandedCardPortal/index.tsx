"use client";
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

interface ExpandedCardPortalProps {
  children: React.ReactNode;
  isExpanded: boolean;
  showCloseButton?: boolean; // New prop to control button visibility
  onClose?: () => void; // Callback for closing the portal
}

export const ExpandedCardPortal: React.FC<ExpandedCardPortalProps> = ({
  children,
  isExpanded,
  showCloseButton = false,
  onClose = () => { }
}) => {
  if (typeof window === 'undefined' || !isExpanded) return null;

  return createPortal(
    <div className={styles.expandedCardWrapper}>
      {showCloseButton && (
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          Close
        </button>
      )}
      {children}
    </div>,
    document.getElementById('portal-root')!
  );
};