import SEO from '@/components/SEO';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin } from 'lucide-react';

const placeholderImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop',
];

const filterKeys = ['house', 'terrace', 'office', 'facade', 'interior'];

const Portfolio: React.FC = () => {
  const { t, tRaw } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const projects = Array.isArray(tRaw('portfolio.projects')) ? tRaw('portfolio.projects') : [];

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p: any) => p.type === activeFilter);

  return (
    <div className="min-h-screen">
      <SEO
        title="Портфолио проектов: Реализованные объекты | Raywerthi"
        description="Примеры установленных моторизованных систем, маркиз и фасадных штор на частных виллах и коммерческих объектах."
        keywords="портфолио маркизы Ереван, проекты солнцезащиты Армения, рафшторы Грузия, фасадные шторы Кавказ"
        canonicalUrl="https://raywerthi.com/portfolio"
      />

      <Header />
      <main className="pt-20">
        <section className="section-padding gradient-warm-soft">
          <div className="container-site text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('portfolio.title')}
            </h1>
            <p className="text-muted-foreground text-lg">{t('portfolio.subtitle')}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-site">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'gradient-warm text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {t('portfolio.filterAll')}
              </button>
              {filterKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === key
                      ? 'gradient-warm text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(`portfolio.filters.${key}`)}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((project: any, i: number) => (
                <div key={i} className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={placeholderImages[i % placeholderImages.length]}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground mb-1">{project.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                      <MapPin size={13} />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                        {project.solution}
                      </span>
                      <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md">
                        {project.brands}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
