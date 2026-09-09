import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ExternalLink } from 'lucide-react';
import hellaLogo from '@/assets/brands/hella-logo.svg';
import waremaLogo from '@/assets/brands/warema-logo.svg';
import silentglissLogo from '@/assets/brands/silentgliss-logo.svg';

const brands = [
  { name: 'HELLA', key: 'hella', slug: 'hella', url: 'https://www.hella.info', logo: hellaLogo },
  { name: 'WAREMA', key: 'warema', slug: 'warema', url: 'https://www.warema.com', logo: waremaLogo },
  { name: 'Silent Gliss', key: 'silentgliss', slug: 'silent-gliss', url: 'https://www.silentgliss.com', logo: silentglissLogo },
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
              <div className="h-20 flex items-center justify-center mb-4">
                <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" className="max-h-16 w-auto object-contain" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {t(`brands.${brand.key}`)}
              </p>
              <div className="flex flex-col items-center gap-2">
                <Link
                  to={`/solutions/${brand.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  {t('brands.viewCatalog')}
                </Link>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground text-xs hover:text-primary transition-colors"
                >
                  {t('brands.visitSite')} <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
