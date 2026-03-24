import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Blinds, DoorOpen, Umbrella, Layers, PanelTop, Cpu, ExternalLink } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  blinds: Blinds,
  rollshutters: DoorOpen,
  awnings: Umbrella,
  screens: Layers,
  interior: Curtains,
  smarthome: Cpu,
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryKeys.map((key) => {
                const Icon = categoryIcons[key] || Layers;
                return (
                  <div key={key} className="bg-background border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center mb-5">
                      <Icon className="text-primary-foreground" size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {t(`solutions.categories.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {t(`solutions.categories.${key}.desc`)}
                    </p>
                    <p className="text-xs text-primary font-semibold mb-5">
                      {t(`solutions.categories.${key}.brands`)}
                    </p>
                    <Link
                      to={`/contacts?solution=${encodeURIComponent(t(`solutions.categories.${key}.title`))}`}
                      className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"
                    >
                      {t('solutions.learnMore')} →
                    </Link>
                  </div>
                );
              })}
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
