import React from 'react';
import type { ProductCategory } from '@/data/products/types';
import type { Language } from '@/i18n/translations';
import { useLanguage } from '@/i18n/LanguageContext';
import ModelCard from './ModelCard';

interface CategorySectionProps {
  category: ProductCategory;
  lang: Language;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, lang }) => {
  const { t } = useLanguage();
  return (
    <section id={category.slug} className="scroll-mt-40 py-12 md:py-16 border-b border-border last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-8 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="rounded-xl overflow-hidden h-56 lg:h-72 mb-4">
            <img
              src={category.image}
              alt={category.name[lang]}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{category.name[lang]}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{category.intro[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {category.models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              lang={lang}
              fallbackImage={category.image}
              sourceLabel={t('brandPage.sourceLink')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
