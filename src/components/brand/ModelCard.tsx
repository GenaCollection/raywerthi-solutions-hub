import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check, Minus, Plus } from 'lucide-react';
import type { ProductModel } from '@/data/products/types';
import { useLanguage } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';
import ProductImage from '@/components/ProductImage';

interface ModelCardProps {
  model: ProductModel;
  fallbackImage: string;
  /** Feeds the quote request so the enquiry arrives with the product already filled in. */
  solutionName: string;
}

const ROTATE_MS = 2600;
const VISIBLE_SPECS = 3;

const ModelCard: React.FC<ModelCardProps> = ({ model, fallbackImage, solutionName }) => {
  const { t, lang } = useLanguage();
  const images = [model.image ?? fallbackImage, ...(model.gallery ?? [])];
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!hovered || images.length <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActiveIndex((i) => (i + 1) % images.length), ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [hovered, images.length]);

  const variants = model.sizeVariants;
  const activeVariant = variants?.[variantIndex];
  const description = activeVariant ? activeVariant.description[lang] : model.description[lang];
  const specs = activeVariant ? activeVariant.specs[lang] : model.specs[lang];
  const sourceUrl = activeVariant?.sourceUrl ?? model.sourceUrl;
  const visibleSpecs = expanded ? specs : specs.slice(0, VISIBLE_SPECS);

  const quoteHref = `/contacts?solution=${encodeURIComponent(solutionName)}&model=${encodeURIComponent(model.name)}`;

  return (
    <article className="group flex flex-col border border-border bg-card transition-colors hover:border-foreground/30">
      <div
        className="relative aspect-[4/3] overflow-hidden bg-sand"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {model.bestseller && (
          <span className="absolute left-3 top-3 z-10 bg-ink px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-gold">
            {t('brandPage.bestseller')}
          </span>
        )}
        {images.map((src, i) => (
          <ProductImage
            key={src}
            src={src}
            alt={model.name}
            className={cn('absolute inset-0 transition-opacity duration-700', i === activeIndex ? 'opacity-100' : 'opacity-0')}
          />
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`${model.name} — ${i + 1}`}
                aria-current={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  'h-1 rounded-full bg-ink/25 transition-all',
                  i === activeIndex ? 'w-6 bg-ink/80' : 'w-3 hover:bg-ink/50',
                )}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-2xl leading-tight text-foreground">{model.name}</h4>
          {variants && variants.length > 1 && (
            <div className="flex shrink-0 gap-1" role="tablist" aria-label={model.name}>
              {variants.map((variant, i) => (
                <button
                  key={variant.label}
                  type="button"
                  role="tab"
                  aria-selected={i === variantIndex}
                  onClick={() => setVariantIndex(i)}
                  className={cn(
                    'border px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide transition-colors',
                    i === variantIndex
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
                  )}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <ul className="mt-4 space-y-2">
          {visibleSpecs.map((spec) => (
            <li key={spec} className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/80">
              <Check size={13} strokeWidth={1.5} className="mt-0.5 shrink-0 text-primary" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>

        {specs.length > VISIBLE_SPECS && (
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            className="mt-3 inline-flex items-center gap-1.5 self-start text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {expanded ? <Minus size={12} strokeWidth={1.5} /> : <Plus size={12} strokeWidth={1.5} />}
            {expanded ? t('brandPage.lessSpecs') : t('brandPage.allSpecs')}
          </button>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
          <Link to={quoteHref} className="link-arrow text-primary">
            {t('brandPage.quote')} <ArrowRight size={13} />
          </Link>
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('brandPage.sourceLink')} <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ModelCard;
