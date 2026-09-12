import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { BrandCatalog, ProductCategory } from '@/data/products/types';
import { useLanguage } from '@/i18n/LanguageContext';
import ModelCard from './ModelCard';
import Reveal from '@/components/Reveal';

interface BrandGroupProps {
  brand: BrandCatalog;
  category: ProductCategory;
  solutionName: string;
}

const BrandGroup: React.FC<BrandGroupProps> = ({ brand, category, solutionName }) => {
  const { t, lang } = useLanguage();

  return (
    <div className="border-b border-border py-14 last:border-b-0 md:py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <img src={brand.logo} alt={brand.name} className="h-6 w-auto object-contain" />
          <h3 className="display-3 mt-5 text-foreground">{category.name[lang]}</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">{category.intro[lang]}</p>
        </div>
        <Link to={`/solutions/${brand.slug}#${category.slug}`} className="link-arrow shrink-0 text-primary">
          {t('categoryPage.viewFullRange')} {brand.name} <ArrowRight size={13} />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {category.models.map((model, i) => (
          <Reveal key={model.id} delay={(i % 3) * 90}>
            <ModelCard model={model} fallbackImage={category.image} solutionName={solutionName} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default BrandGroup;
