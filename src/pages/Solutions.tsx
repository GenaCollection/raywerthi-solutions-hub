import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandCatalogs, unifiedCategories } from '@/data/products';
import { brandVisuals, pageHeroes } from '@/data/siteImages';

const brands = [
  { name: 'HELLA', slug: 'hella' as const },
  { name: 'WAREMA', slug: 'warema' as const },
  { name: 'Silent Gliss', slug: 'silent-gliss' as const },
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

      <Header overlay />
      <main>
        <PageHero
          image={pageHeroes.solutions}
          eyebrow={t('solutions.eyebrow')}
          title={t('solutions.title')}
          lede={t('solutions.subtitle')}
        />

        <section className="section-padding">
          <div className="container-site">
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {unifiedCategories.map((category, i) => {
                const brandLogos = [
                  ...new Map(category.sources.map((s) => [s.brand, brandCatalogs[s.brand]])).values(),
                ];

                return (
                  <Reveal key={category.slug} variant="slats" delay={(i % 3) * 90}>
                    <Link to={`/solutions/category/${category.slug}`} className="group block">
                      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                        <img
                          src={category.image}
                          alt={category.name[lang]}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform [transition-duration:1400ms] ease-out-expo group-hover:scale-105"
                        />
                        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          {brandLogos.map((brand) => (
                            <span key={brand.slug} className="flex h-7 items-center bg-background/95 px-2">
                              <img src={brand.logo} alt={brand.name} className="h-3 w-auto object-contain" />
                            </span>
                          ))}
                        </div>
                      </div>
                      <h2 className="display-3 mt-6 text-foreground">{category.name[lang]}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.description[lang]}</p>
                      <span className="link-arrow mt-5 text-primary">
                        {t('solutions.learnMore')} <ArrowRight size={13} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding bg-ink text-ink-foreground">
          <div className="container-site">
            <SectionHeading
              tone="dark"
              eyebrow={t('solutions.brandsEyebrow')}
              title={t('solutions.catalogTitle')}
              lede={t('solutions.catalogDesc')}
            />

            <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
              {brands.map((brand, i) => {
                const catalog = brandCatalogs[brand.slug];
                return (
                  <Reveal key={brand.slug} delay={i * 100}>
                    <Link to={`/solutions/${brand.slug}`} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={brandVisuals[brand.slug].image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform [transition-duration:1400ms] ease-out-expo group-hover:scale-105"
                        />
                        <div aria-hidden className="absolute inset-0 bg-ink/25" />
                        <span className="absolute bottom-4 left-4 flex h-11 items-center bg-background/95 px-4">
                          <img src={catalog?.logo} alt={brand.name} className="h-5 w-auto object-contain" />
                        </span>
                      </div>
                      <span className="link-arrow mt-5 text-gold">
                        {t('solutions.visitCatalog')} <ArrowRight size={13} />
                      </span>
                    </Link>
                  </Reveal>
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
