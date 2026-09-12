import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import StatsBand from '@/components/StatsBand';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/i18n/LanguageContext';
import { pageHeroes } from '@/data/siteImages';
import hellaLogo from '@/assets/brands/hella-logo.svg';
import waremaLogo from '@/assets/brands/warema-logo.svg';
import silentglissLogo from '@/assets/brands/silentgliss-logo.svg';
import whoWeAreImg from '@/assets/products/warema/terrea-k55-red-house.jpg';
import partnershipImg from '@/assets/products/silentgliss/sg5600-black-finish.jpg';
import geographyImg from '@/assets/products/warema/perea-p70-lakeside.jpg';
import valuesImg from '@/assets/products/hella/hella-innenjalousien-light.jpg';

const sections = [
  { key: 'whoWeAre', image: whoWeAreImg },
  { key: 'partnership', image: partnershipImg },
  { key: 'geography', image: geographyImg },
  { key: 'values', image: valuesImg },
];

const partners = [
  { name: 'HELLA', slug: 'hella', logo: hellaLogo },
  { name: 'WAREMA', slug: 'warema', logo: waremaLogo },
  { name: 'Silent Gliss', slug: 'silent-gliss', logo: silentglissLogo },
];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO
        title="О компании Raywerthi — Партнер HELLA, WAREMA, Silent Gliss"
        description="Премиальная культура комфорта и солнцезащиты на Кавказе. Многолетний опыт реализации сложных архитектурных проектов."
        keywords="Raywerthi Армения, партнер HELLA, WAREMA Кавказ, Silent Gliss Ереван, солнцезащитные системы Грузия"
        canonicalUrl="https://raywerthi.com/about"
      />

      <Header overlay />
      <main>
        <PageHero
          image={pageHeroes.about}
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
          lede={t('about.lede')}
        />

        <StatsBand />

        <section className="section-padding">
          <div className="container-site flex flex-col gap-20 md:gap-28">
            {sections.map((section, i) => (
              <div key={section.key} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  variant="slats"
                  className={i % 2 === 0 ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-last'}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-sand">
                    <img
                      src={section.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal className="lg:col-span-6">
                  <p className="eyebrow text-primary">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="display-3 mt-5 text-foreground">{t(`about.${section.key}.title`)}</h2>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{t(`about.${section.key}.text`)}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-sand">
          <div className="container-site">
            <h2 className="eyebrow text-primary">{t('about.partnersTitle')}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {partners.map((partner, i) => (
                <Reveal key={partner.slug} delay={i * 90}>
                  <Link
                    to={`/solutions/${partner.slug}`}
                    className="group flex h-32 flex-col items-center justify-center gap-4 border border-border bg-background transition-colors hover:border-foreground/30"
                  >
                    <img src={partner.logo} alt={partner.name} className="h-7 w-auto object-contain" />
                    <span className="link-arrow text-primary">
                      {t('brands.viewCatalog')} <ArrowRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
