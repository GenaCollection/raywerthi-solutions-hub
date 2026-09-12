import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { advantagesImage } from '@/data/siteImages';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const AdvantagesSection: React.FC = () => {
  const { t, tRaw } = useLanguage();
  const items = tRaw('advantages.items') as string[];

  return (
    <section className="section-padding">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal variant="slats" className="lg:col-span-5">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={advantagesImage} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 text-[0.6875rem] uppercase tracking-[0.2em] text-white/90 drop-shadow">
              HELLA Innenjalousien
            </figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow={t('advantages.eyebrow')} title={t('advantages.title')} />
          <ul className="mt-10 border-t border-foreground/15">
            {Array.isArray(items) &&
              items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 60}
                  className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-foreground/15 py-5"
                >
                  <span className="font-display text-xl text-primary">{String(i + 1).padStart(2, '0')}</span>
                  <span className="leading-relaxed text-foreground">{item}</span>
                </Reveal>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
