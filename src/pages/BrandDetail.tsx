import React, { useEffect } from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactBlock from '@/components/ContactBlock';
import CategoryNav from '@/components/brand/CategoryNav';
import CategorySection from '@/components/brand/CategorySection';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandCatalogs } from '@/data/products';

const otherBrandSlugs = (current: string) => Object.keys(brandCatalogs).filter((s) => s !== current);

const BrandDetail: React.FC = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const { t, lang } = useLanguage();
  const location = useLocation();

  const catalog = brandSlug ? brandCatalogs[brandSlug] : undefined;

  useEffect(() => {
    if (!catalog) return;
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Wait for layout to settle before scrolling to the anchored section.
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [catalog, location.hash, location.pathname]);

  if (!catalog) {
    return <Navigate to="/solutions" replace />;
  }

  const seoTitles: Record<string, string> = {
    warema: 'WAREMA в Армении и Грузии — жалюзи, маркизы, перголы, рольставни | RayWerThi',
    hella: 'HELLA в Армении и Грузии — жалюзи, маркизы, VENTUR, ONYX | RayWerThi',
    'silent-gliss': 'Silent Gliss в Армении и Грузии — карнизы, шторы, моторизация | RayWerThi',
  };
  const seoDescriptions: Record<string, string> = {
    warema: 'Официальный дилер WAREMA на Кавказе: наружные жалюзи, рольставни, маркизы Terrea и Perea, крыша Lamaxa, москитные сетки, умное управление WMS.',
    hella: 'Официальный дилер HELLA на Кавказе: раффшторы ARB 80, рольставни, маркизы PAN 7040, биоклиматическая пергола VENTUR, умный дом ONYX.',
    'silent-gliss': 'Официальный дилер Silent Gliss на Кавказе: электрокарнизы SG 5600, римские и рулонные шторы, панельные системы, приложение Move.',
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={seoTitles[catalog.slug]}
        description={seoDescriptions[catalog.slug]}
        canonicalUrl={`https://raywerthi.com/solutions/${catalog.slug}`}
      />

      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="section-padding gradient-warm-soft">
          <div className="container-site">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={15} /> {t('brandPage.backToSolutions')}
            </Link>

            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <img src={catalog.logo} alt={`${catalog.name} logo`} className="h-14 md:h-16 w-auto object-contain flex-shrink-0" />
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">{catalog.name}</h1>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">{catalog.tagline[lang]}</p>
              </div>
              <a
                href={catalog.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-auto flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-lg font-semibold text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {t('brandPage.officialSite')} <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        <CategoryNav categories={catalog.categories} lang={lang} />

        {/* Range intro */}
        <section className="container-site pt-10 md:pt-14">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t('brandPage.rangeTitle')}</h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{t('brandPage.rangeSubtitle')}</p>
        </section>

        {/* Categories */}
        <section className="container-site">
          {catalog.categories.map((category) => (
            <CategorySection key={category.slug} category={category} lang={lang} />
          ))}
        </section>

        {/* Other brands */}
        <section className="container-site pb-4">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">{t('brandPage.otherBrands')}</h3>
          <div className="flex flex-wrap gap-3">
            {otherBrandSlugs(catalog.slug).map((slug) => {
              const other = brandCatalogs[slug];
              return (
                <Link
                  key={slug}
                  to={`/solutions/${slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-secondary/70 transition-colors"
                >
                  <img src={other.logo} alt={other.name} className="h-4 w-auto object-contain" />
                  {other.name}
                </Link>
              );
            })}
          </div>
        </section>

        <ContactBlock />
      </main>
      <Footer />
    </div>
  );
};

export default BrandDetail;
