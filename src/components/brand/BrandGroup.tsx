import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ProductCategory, BrandCatalog } from '@/data/products/types';
import type { Language } from '@/i18n/translations';
import ModelCard from './ModelCard';

interface BrandGroupProps {
  brand: BrandCatalog;
  category: ProductCategory;
  lang: Language;
  viewFullRangeLabel: string;
}

const BrandGroup: React.FC<BrandGroupProps> = ({ brand, category, lang, viewFullRangeLabel }) => {
  return (
    <div className="py-10 border-b border-border last:border-b-0">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <img src={brand.logo} alt={brand.name} className="h-6 w-auto object-contain" />
        <h3 className="text-lg font-bold text-foreground">{category.name[lang]}</h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-3xl">{category.intro[lang]}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
        {category.models.map((model) => (
          <ModelCard key={model.id} model={model} lang={lang} fallbackImage={category.image} />
        ))}
      </div>

      <Link
        to={`/solutions/${brand.slug}#${category.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        {viewFullRangeLabel} {brand.name} <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default BrandGroup;
