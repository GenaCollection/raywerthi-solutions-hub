import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { flagships } from '@/data/siteImages';
import SectionHeading from './SectionHeading';
import ProductImage from './ProductImage';
import Reveal from './Reveal';

const arrowButton =
  'grid h-12 w-12 place-items-center rounded-full border border-foreground/25 text-foreground transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30';

const FlagshipsSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector('li');
    if (!el || !card) return;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + 24), behavior: smooth ? 'smooth' : 'auto' });
  };

  return (
    <section className="section-padding overflow-hidden bg-sand">
      <div className="container-site">
        <SectionHeading
          eyebrow={t('flagships.eyebrow')}
          title={t('flagships.title')}
          action={
            <div className="hidden gap-2 md:flex">
              <button type="button" onClick={() => scrollByCard(-1)} disabled={edges.start} aria-label={t('flagships.prev')} className={arrowButton}>
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button type="button" onClick={() => scrollByCard(1)} disabled={edges.end} aria-label={t('flagships.next')} className={arrowButton}>
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          }
        />

        <ul
          ref={trackRef}
          onScroll={updateEdges}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-16 md:scroll-px-0 md:px-0"
        >
          {flagships.map((item, i) => (
            <li key={item.name} className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-3rem)/3)]">
              <Reveal delay={i * 100}>
                <Link to={`/solutions/category/${item.categorySlug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-background">
                    <ProductImage
                      src={item.image}
                      alt={`${item.brand} ${item.name}`}
                      className="transition-transform [transition-duration:1200ms] ease-out-expo group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-5 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">{item.brand}</p>
                  <h3 className="mt-2 font-display text-3xl text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.tagline[lang]}</p>
                  <span className="link-arrow mt-4 text-primary">
                    {t('flagships.explore')} <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FlagshipsSection;
