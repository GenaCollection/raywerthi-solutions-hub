import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  image: string;
  title: string;
  eyebrow?: string;
  lede?: string;
  /** Back link or breadcrumb rendered above the title. */
  above?: React.ReactNode;
  children?: React.ReactNode;
  size?: 'sm' | 'md';
}

const PageHero: React.FC<PageHeroProps> = ({ image, title, eyebrow, lede, above, children, size = 'md' }) => (
  <section
    className={cn(
      'relative isolate flex items-end overflow-hidden bg-ink text-white',
      size === 'md' ? 'min-h-[72vh]' : 'min-h-[58vh]',
    )}
  >
    <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" fetchpriority="high" decoding="async" />
    <div aria-hidden className="absolute inset-0 -z-10 scrim-left" />
    <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-ink/85 to-transparent" />

    <div className="container-site pb-14 pt-32 md:pb-20">
      {above && <div className="mb-6">{above}</div>}
      {eyebrow && <p className="eyebrow mb-5 text-gold">{eyebrow}</p>}
      <h1 className={cn(size === 'md' ? 'display-1' : 'display-2', 'max-w-4xl text-white')}>{title}</h1>
      {lede && <p className="lede mt-6 max-w-2xl text-white/80">{lede}</p>}
      {children && <div className="mt-9">{children}</div>}
    </div>
  </section>
);

export default PageHero;
