import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactBlock from '@/components/ContactBlock';
import BrandGroup from '@/components/brand/BrandGroup';
import FeaturedModelBlock from '@/components/brand/FeaturedModelBlock';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandCatalogs, unifiedCategories } from '@/data/products';
import type { BrandCatalog, ProductCategory, ProductModel } from '@/data/products';

interface CategoryGroup {
  brand: BrandCatalog;
  category: ProductCategory;
}

const CategoryDetail: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { t, lang } = useLanguage();

  const category = categorySlug ? unifiedCategories.find((c) => c.slug === categorySlug) : undefined;

  if (!category) {
    return <Navigate to="/solutions" replace />;
  }

  const featuredRefs = category.featured ?? [];
  const spotlights = featuredRefs
    .map((ref) => {
      const brand = brandCatalogs[ref.brand];
      const model = brand?.categories
        .find((c) => c.slug === ref.categorySlug)
        ?.models.find((m) => m.id === ref.modelId);
      return brand && model ? { brand, model } : null;
    })
    .filter((s): s is { brand: BrandCatalog; model: ProductModel } => !!s);

  const groups: CategoryGroup[] = category.sources
    .map((source) => {
      const brand = brandCatalogs[source.brand];
      const cat = brand?.categories.find((c) => c.slug === source.categorySlug);
      if (!cat) return null;
      const spotlitIds = featuredRefs
        .filter((ref) => ref.brand === source.brand && ref.categorySlug === source.categorySlug)
        .map((ref) => ref.modelId);
      const models = cat.models.filter((m) => !spotlitIds.includes(m.id));
      if (models.length === 0) return null;
      return { brand, category: { ...cat, models } };
    })
    .filter((g): g is CategoryGroup => !!g);

  const uniqueBrands = [
    ...new Map([
      ...spotlights.map((s) => [s.brand.slug, s.brand] as const),
      ...groups.map((g) => [g.brand.slug, g.brand] as const),
    ]).values(),
  ];

  const solutionName = category.name[lang];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${category.name.ru} — ${uniqueBrands.map((b) => b.name).join(', ')} | RayWerThi`}
        description={category.description.ru}
        canonicalUrl={`https://raywerthi.com/solutions/category/${category.slug}`}
      />

      <Header overlay />
      <main>
        <PageHero
          size="sm"
          image={category.image}
          title={category.name[lang]}
          lede={category.description[lang]}
          above={
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} strokeWidth={1.5} /> {t('categoryPage.backToSolutions')}
            </Link>
          }
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] text-white/60">
              {t('categoryPage.availableFrom')}
            </span>
            {uniqueBrands.map((brand) => (
              <span key={brand.slug} className="flex h-10 items-center bg-background/95 px-3.5">
                <img src={brand.logo} alt={brand.name} className="h-4 w-auto object-contain" />
              </span>
            ))}
          </div>
        </PageHero>

        <div className="container-site">
          {spotlights.map(({ brand, model }) => (
            <FeaturedModelBlock
              key={`${brand.slug}-${model.id}`}
              brand={brand}
              model={model}
              kickerLabel={t('categoryPage.featuredKicker')}
              solutionName={solutionName}
            />
          ))}

          {groups.map(({ brand, category: cat }) => (
            <BrandGroup key={`${brand.slug}-${cat.slug}`} brand={brand} category={cat} solutionName={solutionName} />
          ))}

          <section className="py-14">
            <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t('categoryPage.otherCategories')}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {unifiedCategories
                .filter((c) => c.slug !== category.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={`/solutions/category/${c.slug}`}
                    className="border border-border px-3.5 py-2 text-xs text-foreground transition-colors hover:border-foreground/40 hover:bg-sand"
                  >
                    {c.name[lang]}
                  </Link>
                ))}
            </div>
          </section>
        </div>

        <ContactBlock />
      </main>
      <Footer showCta={false} />
    </div>
  );
};

export default CategoryDetail;
