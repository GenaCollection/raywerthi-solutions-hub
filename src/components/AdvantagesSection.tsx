import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const { t, tRaw } = useLanguage();
  const items = tRaw('advantages.items') as string[];

  return (
    <section className="section-padding">
      <div className="container-site">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          {t('advantages.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {Array.isArray(items) && items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
              <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
              <span className="text-foreground text-sm leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
