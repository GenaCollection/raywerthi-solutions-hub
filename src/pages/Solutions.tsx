import SEO from '@/components/SEO';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandCatalogs, unifiedCategories } from '@/data/products';

const brands = [
  { name: 'HELLA', slug: 'hella', url: 'https://www.hella.info' },
  { name: 'WAREMA', slug: 'warema', url: 'https://www.warema.com' },
  { name: 'Silent Gliss', slug: 'silent-gliss', url: 'https://www.silentgliss.com' },
];

const Solutions: React.FC = () => {
  const { t, lang } = useLanguage();

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

        {/* Categories grid — click a product type to see every matching model from all our brands */}
        <section className="section-padding">
          <div className="container-site">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {unifiedCategories.map((category) => {
                const brandLogos = [...new Map(
                  category.sources.map((s) => [s.brand, brandCatalogs[s.brand]])
                ).values()];

                return (
                  <Link
                    key={category.slug}
                    to={`/solutions/category/${category.slug}`}
                    className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name[lang]}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                        {brandLogos.map((b) => (
                          <span key={b.slug} className="bg-white/90 rounded px-1.5 py-1 flex items-center">
                            <img src={b.logo} alt={b.name} className="h-3 w-auto object-contain" />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{category.name[lang]}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                        {category.description[lang]}
                      </p>
                      <span className="inline-flex items-center gap-2 self-start px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm group-hover:bg-primary/90 transition-colors">
                        {t('solutions.learnMore')} <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                );
              })}
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
