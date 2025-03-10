'use client';
import { forwardRef, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { fadeUpAnimation } from '@/shared/animations';

interface ScrollButtonProps {
  onClick: () => void;
}

export const ScrollButton = forwardRef<HTMLButtonElement, ScrollButtonProps>(
  (props, ref) => {
    const downArrowRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      fadeUpAnimation(downArrowRef.current, 1500)
    }, [])
    return (
      <div ref={downArrowRef} className={styles['scroll-indicator']}>
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