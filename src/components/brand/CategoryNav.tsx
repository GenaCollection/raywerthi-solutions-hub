import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { ProductCategory } from '@/data/products/types';
import type { Language } from '@/i18n/translations';

interface CategoryNavProps {
  categories: ProductCategory[];
  lang: Language;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, lang }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (slug: string) => {
    setOpen(false);
    const el = document.getElementById(slug);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-site">
        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-full flex items-center justify-between py-3 text-sm font-semibold text-foreground"
        >
          <span>{lang === 'ru' ? 'Категории продукции' : lang === 'hy' ? 'Ապրանքների կատեգորիաներ' : 'Product categories'}</span>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleClick(cat.slug)}
              className="whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              {cat.name[lang]}
            </button>
          ))}
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <nav className="lg:hidden flex flex-col pb-3 gap-1">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleClick(cat.slug)}
                className="text-left px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                {cat.name[lang]}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default CategoryNav;
