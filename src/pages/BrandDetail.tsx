import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactBlock from '@/components/ContactBlock';
import CategoryNav from '@/components/brand/CategoryNav';
import CategorySection from '@/components/brand/CategorySection';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandCatalogs } from '@/data/products';
import { brandVisuals } from '@/data/siteImages';

const otherBrandSlugs = (current: string) => Object.keys(brandCatalogs).filter((s) => s !== current);

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

const BrandDetail: React.FC = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  const { t, lang } = useLanguage();

  const catalog = brandSlug ? brandCatalogs[brandSlug] : undefined;

  if (!catalog) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={seoTitles[catalog.slug]}
        description={seoDescriptions[catalog.slug]}
        canonicalUrl={`https://raywerthi.com/solutions/${catalog.slug}`}
      />

      <Header overlay />
      <main>
        <PageHero
          size="sm"
          image={brandVisuals[catalog.slug].image}
          title={catalog.name}
          lede={catalog.tagline[lang]}
          above={
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} strokeWidth={1.5} /> {t('brandPage.backToSolutions')}
            </Link>
          }
        >
          <div className="flex flex-wrap items-center gap-5">
            <span className="flex h-12 items-center bg-background/95 px-4">
              <img src={catalog.logo} alt={`${catalog.name} logo`} className="h-6 w-auto object-contain" />
            </span>
            <a href={catalog.siteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light h-11 px-5">
              {t('brandPage.officialSite')} <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </PageHero>

        <CategoryNav categories={catalog.categories} />

        <div className="container-site">
          <section className="pt-16 md:pt-24">
            <h2 className="display-3 text-foreground">{t('brandPage.rangeTitle')}</h2>
            <p className="lede mt-4 max-w-3xl text-muted-foreground">{t('brandPage.rangeSubtitle')}</p>
          </section>

          <div className="mt-10">
            {catalog.categories.map((category) => (
              <CategorySection key={category.slug} category={category} />
            ))}
          </div>

          <section className="py-14">
            <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t('brandPage.otherBrands')}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {otherBrandSlugs(catalog.slug).map((slug) => {
                const other = brandCatalogs[slug];
                return (
                  <Link
                    key={slug}
                    to={`/solutions/${slug}`}
                    className="inline-flex items-center gap-3 border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:border-foreground/40 hover:bg-sand"
                  >
                    <img src={other.logo} alt="" className="h-4 w-auto object-contain" />
                    {other.name}
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        <ContactBlock />
      </main>
      <Footer showCta={false} />
    </div>
  );
};

export default BrandDetail;
