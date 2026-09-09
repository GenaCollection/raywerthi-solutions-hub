import SEO from '@/components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandCatalogs } from '@/data/products';

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

// Deep links from each generic category into the relevant brand catalogue section.
const categoryBrandLinks: Record<string, { brand: string; anchor: string }[]> = {
  blinds: [
    { brand: 'warema', anchor: 'raffstoren' },
    { brand: 'hella', anchor: 'raffstoren' },
  ],
  rollshutters: [
    { brand: 'warema', anchor: 'rollladen' },
    { brand: 'hella', anchor: 'rollladen' },
  ],
  awnings: [
    { brand: 'warema', anchor: 'terrassenmarkisen' },
    { brand: 'warema', anchor: 'pergola-markisen' },
    { brand: 'hella', anchor: 'markisen' },
  ],
  screens: [
    { brand: 'warema', anchor: 'fenstermarkisen' },
    { brand: 'hella', anchor: 'wind-sichtschutz' },
  ],
  interior: [
    { brand: 'silent-gliss', anchor: 'curtain-tracks' },
    { brand: 'hella', anchor: 'innenbeschattung' },
  ],
  smarthome: [
    { brand: 'warema', anchor: 'smart-home' },
    { brand: 'hella', anchor: 'onyx' },
    { brand: 'silent-gliss', anchor: 'smart-motorisation' },
  ],
};

const brands = [
  { name: 'HELLA', slug: 'hella', url: 'https://www.hella.info' },
  { name: 'WAREMA', slug: 'warema', url: 'https://www.warema.com' },
  { name: 'Silent Gliss', slug: 'silent-gliss', url: 'https://www.silentgliss.com' },
];

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO
        title="Каталог систем: Маркизы, Рафшторы, Экраны, Карнизы | Raywerthi"
        description="Полный ассортимент внешней и внутренней солнцезащиты премиум-класса. Автоматические маркизы, перголы, ZIP-системы и рафшторы."
        keywords="маркизы Ереван, рафшторы Тбилиси, ZIP-системы, перголы Армения, фасадные экраны Кавказ, моторизованные карнизы Silent Gliss"
        canonicalUrl="https://raywerthi.com/solutions"
      />

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
                    <div className="flex flex-wrap gap-2 mb-4">
                      {categoryBrandLinks[key]?.map(({ brand, anchor }) => {
                        const catalog = brandCatalogs[brand];
                        if (!catalog) return null;
                        return (
                          <Link
                            key={`${brand}-${anchor}`}
                            to={`/solutions/${brand}#${anchor}`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary rounded-md text-xs font-medium text-foreground hover:bg-secondary/70 transition-colors"
                          >
                            <img src={catalog.logo} alt={catalog.name} className="h-3 w-auto object-contain" />
                            {catalog.name}
                          </Link>
                        );
                      })}
                    </div>
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

        {/* Catalog by brand */}
        <section className="section-padding bg-secondary">
          <div className="container-site text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('solutions.catalogTitle')}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              {t('solutions.catalogDesc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {brands.map((brand) => {
                const catalog = brandCatalogs[brand.slug];
                return (
                  <Link
                    key={brand.slug}
                    to={`/solutions/${brand.slug}`}
                    className="group bg-background border border-border rounded-xl p-6 flex flex-col items-center hover:border-primary hover:shadow-lg transition-all"
                  >
                    <img src={catalog?.logo} alt={brand.name} className="h-10 w-auto object-contain mb-4" />
                    <span className="font-semibold text-foreground mb-1">{brand.name}</span>
                    <span className="text-xs text-primary font-medium group-hover:underline">
                      {t('solutions.visitCatalog')} →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
