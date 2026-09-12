import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pause, Play } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { heroSlides } from '@/data/siteImages';
import { cn } from '@/lib/utils';

// Keep in sync with the `progress` animation duration in tailwind.config.ts.
const AUTOPLAY_MS = 7000;

const HeroSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % heroSlides.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, reducedMotion]);

  const autoplaying = !paused && !reducedMotion;

  return (
    <section
      aria-roledescription="carousel"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white"
    >
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== active}
            className={cn(
              'absolute inset-0 transition-opacity [transition-duration:1600ms] ease-out',
              i === active ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img
              src={slide.src}
              alt={slide.alt[lang]}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              {...(i === 0 ? { fetchpriority: 'high' } : {})}
              className={cn('h-full w-full object-cover', i === active && 'motion-safe:animate-ken-burns')}
            />
          </div>
        ))}
        <div className="absolute inset-0 scrim-left" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
      </div>

      <div className="container-site flex flex-1 flex-col justify-end pb-10 pt-32 md:justify-center md:pb-16">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-in-up text-gold">{t('hero.eyebrow')}</p>
          <h1 id="hero-title" className="display-1 mt-6 animate-fade-in-up text-white [animation-delay:120ms]">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-xl animate-fade-in-up text-base leading-relaxed text-white/80 [animation-delay:240ms] md:text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex animate-fade-in-up flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Link to="/solutions" className="btn btn-gold">
              {t('hero.cta')} <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <Link to="/contacts" className="btn btn-outline-light">
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>

      <div className="container-site relative pb-24 md:pb-8">
        <div className="flex items-center justify-between gap-6 border-t border-white/15 pt-5">
          <div className="flex items-center gap-3">
            <div className="flex">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${t('hero.slide')} ${i + 1}: ${slide.caption}`}
                  aria-current={i === active}
                  className="relative h-8 w-10 md:w-14"
                >
                  <span className="absolute inset-x-1 top-1/2 h-px bg-white/30" />
                  <span
                    className={cn(
                      'absolute inset-x-1 top-1/2 h-px origin-left bg-white',
                      i !== active && 'scale-x-0',
                      i === active && autoplaying && 'animate-progress',
                    )}
                  />
                </button>
              ))}
            </div>
            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? t('hero.play') : t('hero.pause')}
                className="grid h-8 w-8 place-items-center text-white/70 transition-colors hover:text-white"
              >
                {paused ? <Play size={14} strokeWidth={1.5} /> : <Pause size={14} strokeWidth={1.5} />}
              </button>
            )}
          </div>

          <div aria-hidden className="hidden flex-col items-center gap-2 md:flex">
            <span className="text-[0.625rem] uppercase tracking-[0.3em] text-white/60">{t('hero.scroll')}</span>
            <span className="relative block h-8 w-px overflow-hidden bg-white/20">
              <span className="absolute inset-0 bg-white motion-safe:animate-scroll-cue" />
            </span>
          </div>

          <p aria-live="polite" className="text-right text-[0.6875rem] uppercase tracking-[0.2em] text-white/65">
            <span className="hidden sm:inline">{t('hero.pictured')}: </span>
            <span className="text-white">{heroSlides[active].caption}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
