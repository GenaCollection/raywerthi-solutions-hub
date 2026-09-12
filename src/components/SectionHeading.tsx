import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
  size?: 'lg' | 'md';
  action?: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'light',
  as: Heading = 'h2',
  size = 'lg',
  action,
  className,
}) => {
  const centered = align === 'center';
  const dark = tone === 'dark';

  return (
    <div
      className={cn(
        'flex flex-col gap-8 md:flex-row md:items-end md:justify-between',
        centered && 'text-center md:flex-col md:items-center',
        className,
      )}
    >
      <div className={cn('max-w-3xl', centered && 'mx-auto')}>
        {eyebrow && (
          <p className={cn('eyebrow mb-5', dark ? 'text-gold' : 'text-primary', centered && 'justify-center')}>{eyebrow}</p>
        )}
        <Heading className={cn(size === 'lg' ? 'display-2' : 'display-3', dark ? 'text-ink-foreground' : 'text-foreground')}>
          {title}
        </Heading>
        {lede && (
          <p className={cn('lede mt-5 max-w-2xl', centered && 'mx-auto', dark ? 'text-ink-muted' : 'text-muted-foreground')}>
            {lede}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default SectionHeading;
