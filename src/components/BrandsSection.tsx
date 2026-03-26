import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';
import hellaLogo from '@/assets/brands/hella-logo.png';
import waremaLogo from '@/assets/brands/warema-logo.png';
import silentglissLogo from '@/assets/brands/silentgliss-logo.png';

const brands = [
  { name: 'HELLA', key: 'hella', url: 'https://www.hella.info', logo: hellaLogo },
  { name: 'WAREMA', key: 'warema', url: 'https://www.warema.com', logo: waremaLogo },
  { name: 'Silent Gliss', key: 'silentgliss', url: 'https://www.silentgliss.com', logo: silentglissLogo },
];

const BrandsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-site">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          {t('brands.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.key}
              className="bg-secondary rounded-xl p-8 text-center flex flex-col items-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                {brand.name}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {t(`brands.${brand.key}`)}
              </p>
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
              >
                {t('brands.visitSite')} <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
