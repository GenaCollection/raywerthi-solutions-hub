import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { inspiration } from '@/data/siteImages';
import { cn } from '@/lib/utils';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const tileLayout = [
  'aspect-[16/11] sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:aspect-auto',
  'aspect-[4/3] lg:col-span-5',
  'aspect-[4/3] lg:col-span-5',
  'aspect-[4/3] lg:col-span-4',
  'aspect-[4/3] lg:col-span-4',
  'aspect-[4/3] lg:col-span-4',
];

const PortfolioPreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-sand">
      <div className="container-site">
        <SectionHeading
          eyebrow={t('portfolioPreview.eyebrow')}
          title={t('portfolioPreview.title')}
          lede={t('portfolioPreview.subtitle')}
          action={
            <Link to="/portfolio" className="btn btn-outline">
              {t('portfolioPreview.viewAll')} <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-12 lg:gap-5">
          {inspiration.map((item, i) => (
            <Reveal
              as="figure"
              key={item.src}
              variant="slats"
              delay={(i % 3) * 110}
              className={cn('group relative overflow-hidden rounded-sm bg-background', tileLayout[i])}
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform [transition-duration:1400ms] ease-out-expo group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/75 to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-4 text-white">
                <span className="block text-sm font-medium">{item.caption}</span>
                <span className="mt-0.5 block text-[0.625rem] uppercase tracking-[0.2em] text-white/70">
                  {t('portfolioPreview.photoCredit')}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
