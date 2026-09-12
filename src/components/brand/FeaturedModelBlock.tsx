import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import type { BrandCatalog, ProductModel } from '@/data/products/types';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import ProductImage from '@/components/ProductImage';

interface FeaturedModelBlockProps {
  brand: BrandCatalog;
  model: ProductModel;
  kickerLabel: string;
  solutionName: string;
}

const FeaturedModelBlock: React.FC<FeaturedModelBlockProps> = ({ brand, model, kickerLabel, solutionName }) => {
  const { t, lang } = useLanguage();
  const images = [model.image, ...(model.gallery ?? [])].filter((src): src is string => Boolean(src));
  const [active, setActive] = useState(0);

  return (
    <section className="grid grid-cols-1 gap-10 border-y border-border py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
      <div>
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <ProductImage src={images[active]} alt={model.name} loading="eager" />
        </div>
        {images.length > 1 && (
          <div className="mt-3 grid grid-cols-4 gap-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`${model.name} — ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  'aspect-square overflow-hidden bg-sand outline outline-1 outline-offset-2 transition-colors',
                  i === active ? 'outline-primary' : 'outline-transparent hover:outline-border',
                )}
              >
                <ProductImage src={src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <img src={brand.logo} alt={brand.name} className="h-6 w-auto object-contain" />
          <span className="bg-ink px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-gold">
            {t('brandPage.bestseller')}
          </span>
        </div>
        <p className="eyebrow text-primary">{kickerLabel}</p>
        <h2 className="display-3 mt-4 text-foreground">{model.name}</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{model.description[lang]}</p>

        <ul className="mt-7 space-y-2.5 border-t border-border pt-7">
          {model.specs[lang].map((spec) => (
            <li key={spec} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
              <Check size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-primary" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            to={`/contacts?solution=${encodeURIComponent(solutionName)}&model=${encodeURIComponent(model.name)}`}
            className="btn btn-primary"
          >
            {t('brandPage.quote')} <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
          {model.sourceUrl && (
            <a
              href={model.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('brandPage.sourceLink')} <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModelBlock;
