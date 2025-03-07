"use client";
import { createPortal } from 'react-dom';
import styles from './styles.module.css';

interface ExpandedCardPortalProps {
  children: React.ReactNode;
  isExpanded: boolean;
}

export const ExpandedCardPortal: React.FC<ExpandedCardPortalProps> = ({ 
  children, 
  isExpanded 
}) => {
  if (typeof window === 'undefined' || !isExpanded) return null;

  return createPortal(
    <div className={styles.expandedCardWrapper}>
      {children}
    </div>,
    document.getElementById('portal-root')!
  );
};
