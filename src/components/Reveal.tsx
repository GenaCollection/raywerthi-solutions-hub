import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: 'up' | 'slats';
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Animates its content in when scrolled into view. Content already on screen at mount
 * (and everything in the prerendered HTML) stays visible, so there is no flash and
 * nothing is hidden from crawlers or when JS fails.
 */
const Reveal: React.FC<RevealProps> = ({ as = 'div', variant = 'up', delay = 0, className, children }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.classList.add('reveal-pending');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        el.classList.replace('reveal-pending', 'reveal-in');
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);

    const onEnd = (e: AnimationEvent) => {
      if (e.target === el) el.classList.remove('reveal-in');
    };
    el.addEventListener('animationend', onEnd);

    return () => {
      observer.disconnect();
      el.removeEventListener('animationend', onEnd);
      el.classList.remove('reveal-pending', 'reveal-in');
    };
  }, []);

  return React.createElement(
    as,
    {
      ref,
      className: cn(`reveal-${variant}`, className),
      style: delay ? { animationDelay: `${delay}ms` } : undefined,
    },
    children,
  );
};

export default Reveal;
