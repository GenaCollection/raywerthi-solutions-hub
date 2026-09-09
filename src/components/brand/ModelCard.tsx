import React from 'react';
import { Check } from 'lucide-react';
import type { ProductModel } from '@/data/products/types';
import type { Language } from '@/i18n/translations';

interface ModelCardProps {
  model: ProductModel;
  lang: Language;
  fallbackImage: string;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, lang, fallbackImage }) => {
  const image = model.image ?? fallbackImage;

  return (
    <div className="bg-background border border-border rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-44 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={model.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h4 className="font-bold text-foreground mb-1.5">{model.name}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-1">
          {model.description[lang]}
        </p>
        <ul className="space-y-1.5">
          {model.specs[lang].map((spec, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-foreground/80">
              <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModelCard;
