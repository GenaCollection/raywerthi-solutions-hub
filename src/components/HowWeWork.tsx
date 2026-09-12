import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const steps = ['1', '2', '3', '4'];

const HowWeWork: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-sand">
      <div className="container-site">
        <SectionHeading eyebrow={t('howWeWork.eyebrow')} title={t('howWeWork.title')} />

        <ol className="mt-14 grid gap-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-0">
          {steps.map((n, i) => (
            <Reveal as="li" key={n} delay={i * 110} className="lg:pr-10">
              <div className="flex items-center gap-5">
                <span className="font-display text-6xl leading-none text-primary md:text-7xl">0{n}</span>
                <span aria-hidden className="h-px flex-1 bg-foreground/15" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{t(`howWeWork.step${n}title`)}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{t(`howWeWork.step${n}desc`)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowWeWork;
