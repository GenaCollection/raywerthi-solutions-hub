import React, { useState } from 'react';
import { Check, ExternalLink, Sparkles } from 'lucide-react';
import type { BrandCatalog, ProductModel } from '@/data/products/types';
import type { Language } from '@/i18n/translations';

interface FeaturedModelBlockProps {
  brand: BrandCatalog;
  model: ProductModel;
  lang: Language;
  badgeLabel: string;
  kickerLabel: string;
  sourceLabel: string;
}

const FeaturedModelBlock: React.FC<FeaturedModelBlockProps> = ({
  brand,
  model,
  lang,
  badgeLabel,
  kickerLabel,
  sourceLabel,
}) => {
  const images = [model.image, ...(model.gallery ?? [])].filter((src): src is string => Boolean(src));
  const [active, setActive] = useState(0);

  return (
    <section className="gradient-warm-soft rounded-2xl overflow-hidden mb-10 border border-border/60">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4 md:p-6">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3 bg-secondary">
            <img src={images[active]} alt={model.name} className="w-full h-full object-cover" />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`${model.name} photo ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`rounded-lg overflow-hidden aspect-square border-2 transition-colors ${
                    i === active ? 'border-primary' : 'border-transparent hover:border-primary/40'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <img src={brand.logo} alt={brand.name} className="h-6 w-auto object-contain" />
            <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground uppercase tracking-wide">
              <Sparkles size={12} /> {badgeLabel}
            </span>
          </div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">{kickerLabel}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{model.name}</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">{model.description[lang]}</p>
          <ul className="space-y-2 mb-6">
            {model.specs[lang].map((spec, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check size={15} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
          {model.sourceUrl && (
            <a
              href={model.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline w-fit"
            >
              {sourceLabel} <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModelBlock;
