'use client';
import { useEffect, RefObject } from 'react';
import { navigate } from '@/shared/hooks';

export const useScrollButton = (buttonRef: RefObject<HTMLButtonElement | null>) => {
  useEffect(() => {
    const button = buttonRef.current;

    const handleClick = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        navigate(null, aboutSection);
      }
    };

    button?.addEventListener('click', handleClick);

    return () => {
      button?.removeEventListener('click', handleClick);
    };
  }, []);
};