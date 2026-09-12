import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ProductCategory } from '@/data/products/types';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

interface CategoryNavProps {
  categories: ProductCategory[];
}

const itemClass =
  'whitespace-nowrap text-[0.75rem] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary';

const CategoryNav: React.FC<CategoryNavProps> = ({ categories }) => {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const goTo = (slug: string) => {
    setOpen(false);
    document.getElementById(slug)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur-xl md:top-20">
      <div className="container-site">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex w-full items-center justify-between py-4 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-foreground lg:hidden"
        >
          {t('brandPage.categoriesLabel')}
          <ChevronDown size={16} strokeWidth={1.5} className={cn('transition-transform duration-300', open && 'rotate-180')} />
        </button>

        <nav className="no-scrollbar hidden items-center gap-7 overflow-x-auto py-4 lg:flex">
          {categories.map((category) => (
            <button key={category.slug} type="button" onClick={() => goTo(category.slug)} className={itemClass}>
              {category.name[lang]}
            </button>
          ))}
        </nav>

        {open && (
          <nav className="flex flex-col gap-4 pb-5 lg:hidden">
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => goTo(category.slug)}
                className={cn(itemClass, 'text-left')}
              >
                {category.name[lang]}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default CategoryNav;
