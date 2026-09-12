import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Reveal from './Reveal';

const StatsBand: React.FC = () => {
  const { t, tRaw } = useLanguage();
  const items = tRaw('stats.items') as { value: string; label: string }[];

  return (
    <section aria-label={t('stats.label')} className="bg-ink text-ink-foreground">
      <div className="container-site">
        <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 90}
              className="lamella-texture flex flex-col-reverse justify-end bg-ink py-10 pr-4 sm:px-6 md:py-14"
            >
              <dt className="mt-4 max-w-[15rem] text-sm leading-relaxed text-ink-muted">{item.label}</dt>
              <dd className="font-display text-4xl leading-none text-gold sm:text-5xl lg:text-6xl">{item.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsBand;
