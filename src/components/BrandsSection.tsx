import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandVisuals } from '@/data/siteImages';
import hellaLogo from '@/assets/brands/hella-logo.svg';
import waremaLogo from '@/assets/brands/warema-logo.svg';
import silentglissLogo from '@/assets/brands/silentgliss-logo.svg';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const brands = [
  { name: 'HELLA', key: 'hella', slug: 'hella', url: 'https://www.hella.info', logo: hellaLogo },
  { name: 'WAREMA', key: 'warema', slug: 'warema', url: 'https://www.warema.com', logo: waremaLogo },
  { name: 'Silent Gliss', key: 'silentgliss', slug: 'silent-gliss', url: 'https://www.silentgliss.com', logo: silentglissLogo },
] as const;

const BrandsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-site">
        <SectionHeading eyebrow={t('brands.eyebrow')} title={t('brands.title')} />

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-6">
          {brands.map((brand, i) => (
            <Reveal key={brand.key} delay={i * 120} className="flex flex-col">
              <Link
                to={`/solutions/${brand.slug}`}
                className="group relative isolate flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-sm p-6 text-white md:p-7"
              >
                <img
                  src={brandVisuals[brand.slug].image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform [transition-duration:1400ms] ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 scrim-bottom" />

                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 items-center rounded-sm bg-background/95 px-4">
                    <img src={brand.logo} alt={brand.name} className="h-6 w-auto max-w-[8rem] object-contain" />
                  </span>
                  <span className="pt-1 text-[0.6875rem] uppercase tracking-[0.2em] text-white/85">
                    {t(`brands.origin.${brand.key}`)}
                  </span>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-white/85">{t(`brands.${brand.key}`)}</p>
                  <span className="link-arrow mt-5 text-white">
                    {t('brands.viewCatalog')} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 self-start text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {t('brands.visitSite')} <ArrowUpRight size={13} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
