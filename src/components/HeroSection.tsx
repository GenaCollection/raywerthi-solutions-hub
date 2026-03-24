import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import heroImage from '@/assets/hero-home.jpg';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sun protection systems"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container-site relative z-10 py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-base md:text-lg text-background/80 leading-relaxed mb-8 max-w-xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 gradient-warm text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-background/30 text-background font-semibold rounded-lg hover:bg-background/10 transition-colors text-sm md:text-base"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
