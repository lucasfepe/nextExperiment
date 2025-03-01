'use client';
import { forwardRef } from 'react';
import styles from './styles.module.css';

interface ScrollButtonProps {
  onClick: () => void;
}

export const ScrollButton = forwardRef<HTMLButtonElement, ScrollButtonProps>(
  (props, ref) => {
    return (
      <div className={styles['scroll-indicator']}>
        <button
          ref={ref}
          onClick={props.onClick}
          title="Scroll to next section"
          aria-label="Scroll to next section"
          type="button"
        >
          <i className="bi bi-chevron-down"></i>
        </button>
      </div>
    );
  }
);

ScrollButton.displayName = 'ScrollButton';