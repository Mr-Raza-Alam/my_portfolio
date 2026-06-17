import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds scroll-triggered fade-in animations.
 * Observes elements with `.fade-in` or `.stagger-children` classes
 * and adds `.visible` class when they enter the viewport.
 */
export default function useScrollFadeIn() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.fade-in, .stagger-children');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
