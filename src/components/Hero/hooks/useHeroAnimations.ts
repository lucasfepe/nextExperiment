'use client';
import { useEffect, RefObject } from 'react';
import { fadeUpAnimation } from '@/shared/animations';

export const useHeroAnimations = (
  titleRef: RefObject<HTMLHeadingElement | null>,
  textRef: RefObject<HTMLParagraphElement | null>
) => {
  useEffect(() => {
    if (titleRef.current) {
      fadeUpAnimation(titleRef.current, 200);
    }
    if (textRef.current) {
      fadeUpAnimation(textRef.current, 800);
    }
  }, []);
};