import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';

import blindsImg from '@/assets/solutions/blinds.jpg';
import rollshuttersImg from '@/assets/solutions/rollshutters.jpg';
import awningsImg from '@/assets/solutions/awnings.jpg';
import screensImg from '@/assets/solutions/screens.jpg';
import interiorImg from '@/assets/solutions/interior.jpg';
import smarthomeImg from '@/assets/solutions/smarthome.jpg';

const categoryImages: Record<string, string> = {
  blinds: blindsImg,
  rollshutters: rollshuttersImg,
  awnings: awningsImg,
  screens: screensImg,
  interior: interiorImg,
  smarthome: smarthomeImg,
};

const categoryKeys = ['blinds', 'rollshutters', 'awnings', 'screens', 'interior', 'smarthome'];

const brands = [
  { name: 'HELLA', url: 'https://www.hella.info' },
  { name: 'WAREMA', url: 'https://www.warema.com' },
  { name: 'Silent Gliss', url: 'https://www.silentgliss.com' },
];

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Солнцезащитные решения: Маркизы, Рафшторы, Роллеты | Raywerthi</title>
        <meta name="description" content="Полный каталог систем внешней и внутренней солнцезащиты, фасадных экранов и автоматики для умного дома." />
        <link rel="canonical" href="https://raywerthi.com/solutions" />
        <meta property="og:title" content="Солнцезащитные решения: Маркизы, Рафшторы, Роллеты | Raywerthi" />
        <meta property="og:description" content="Полный каталог систем внешней и внутренней солнцезащиты, фасадных экранов и автоматики для умного дома." />
        <meta property="og:url" content="https://raywerthi.com/solutions" />
        <meta name="twitter:title" content="Солнцезащитные решения: Маркизы, Рафшторы, Роллеты | Raywerthi" />
        <meta name="twitter:description" content="Полный каталог систем внешней и внутренней солнцезащиты, фасадных экранов и автоматики для умного дома." />
      </Helmet>
      <Header />
      <main className="pt-20">
        {/* Header */}
        <section className="section-padding gradient-warm-soft">
          <div className="container-site text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('solutions.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('solutions.subtitle')}
            </p>
          </div>
        </section>

        {/* Categories grid */}
        <section className="section-padding">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryKeys.map((key) => (
                <div
                  key={key}
                  className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={categoryImages[key]}
                      alt={t(`solutions.categories.${key}.title`)}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {t(`solutions.categories.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {t(`solutions.categories.${key}.desc`)}
                    </p>
                    <p className="text-xs text-primary font-semibold mb-4">
                      {t(`solutions.categories.${key}.brands`)}
                    </p>
                    <Link
                      to={`/contacts?solution=${encodeURIComponent(t(`solutions.categories.${key}.title`))}`}
                      className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                    >
                      {t('solutions.learnMore')} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catalog links */}
        <section className="section-padding bg-secondary">
          <div className="container-site text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('solutions.catalogTitle')}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('solutions.catalogDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {brands.map((brand) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  {brand.name} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
