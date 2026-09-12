import React from 'react';
import type { ProductCategory } from '@/data/products/types';
import { useLanguage } from '@/i18n/LanguageContext';
import ModelCard from './ModelCard';
import Reveal from '@/components/Reveal';

interface CategorySectionProps {
  category: ProductCategory;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const { lang } = useLanguage();

  return (
    <section id={category.slug} className="scroll-mt-40 border-b border-border py-14 last:border-b-0 md:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="aspect-[4/3] overflow-hidden bg-sand lg:aspect-[4/5]">
            <img src={category.image} alt={category.name[lang]} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
          <h3 className="display-3 mt-6 text-foreground">{category.name[lang]}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{category.intro[lang]}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {category.models.map((model, i) => (
            <Reveal key={model.id} delay={(i % 2) * 90}>
              <ModelCard model={model} fallbackImage={category.image} solutionName={category.name[lang]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
