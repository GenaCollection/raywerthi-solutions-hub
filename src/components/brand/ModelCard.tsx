import React, { useState, useEffect } from 'react';
import { Check, ExternalLink } from 'lucide-react';
import type { ProductModel } from '@/data/products/types';
import type { Language } from '@/i18n/translations';

interface ModelCardProps {
  model: ProductModel;
  lang: Language;
  fallbackImage: string;
  sourceLabel: string;
}

const ROTATE_MS = 4000;

const ModelCard: React.FC<ModelCardProps> = ({ model, lang, fallbackImage, sourceLabel }) => {
  const images = [model.image ?? fallbackImage, ...(model.gallery ?? [])];
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      setActiveIndex((i) => (i + 1) % images.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [images.length, paused]);

  return (
    <div className="bg-background border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div
        className="relative h-44 overflow-hidden bg-secondary"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={model.name}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${model.name} photo ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-bold text-foreground mb-1.5">{model.name}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">
          {model.description[lang]}
        </p>
        <ul className="space-y-1.5 mb-3">
          {model.specs[lang].map((spec, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
              <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
        {model.sourceUrl && (
          <a
            href={model.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline mt-auto pt-1"
          >
            {sourceLabel} <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ModelCard;
