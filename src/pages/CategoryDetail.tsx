import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactBlock from '@/components/ContactBlock';
import BrandGroup from '@/components/brand/BrandGroup';
import { useLanguage } from '@/i18n/LanguageContext';
import { brandCatalogs, unifiedCategories } from '@/data/products';
import type { BrandCatalog, ProductCategory } from '@/data/products';

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

  const groups: CategoryGroup[] = category.sources
    .map((source) => {
      const brand = brandCatalogs[source.brand];
      const cat = brand?.categories.find((c) => c.slug === source.categorySlug);
      return cat ? { brand, category: cat } : null;
    })
    .filter((g): g is CategoryGroup => !!g);

  const uniqueBrands = [...new Map(groups.map((g) => [g.brand.slug, g.brand])).values()];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${category.name.ru} — ${uniqueBrands.map((b) => b.name).join(', ')} | RayWerThi`}
        description={category.description.ru}
        canonicalUrl={`https://raywerthi.com/solutions/category/${category.slug}`}
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
              <ArrowLeft size={15} /> {t('categoryPage.backToSolutions')}
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">{category.name[lang]}</h1>
                <p className="text-muted-foreground max-w-2xl leading-relaxed mb-4">{category.description[lang]}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {t('categoryPage.availableFrom')}
                  </span>
                  {uniqueBrands.map((b) => (
                    <img key={b.slug} src={b.logo} alt={b.name} className="h-5 w-auto object-contain" />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden">
                <img src={category.image} alt={category.name[lang]} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Brand groups */}
        <section className="container-site pt-8">
          {groups.map(({ brand, category: cat }) => (
            <BrandGroup
              key={`${brand.slug}-${cat.slug}`}
              brand={brand}
              category={cat}
              lang={lang}
              viewFullRangeLabel={t('categoryPage.viewFullRange')}
            />
          ))}
        </section>

        {/* Other categories */}
        <section className="container-site py-10">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">{t('categoryPage.otherCategories')}</h3>
          <div className="flex flex-wrap gap-2">
            {unifiedCategories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/solutions/category/${c.slug}`}
                  className="inline-flex items-center px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-foreground hover:bg-secondary/70 transition-colors"
                >
                  {c.name[lang]}
                </Link>
              ))}
          </div>
        </section>

        <ContactBlock />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
