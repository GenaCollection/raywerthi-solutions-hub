import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactBlock from '@/components/ContactBlock';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/i18n/LanguageContext';
import { pageHeroes, portfolioIllustrations } from '@/data/siteImages';
import { cn } from '@/lib/utils';

const filterKeys = ['house', 'terrace', 'office', 'facade', 'interior'];

interface Project {
  name: string;
  location: string;
  type: string;
  solution: string;
  brands: string;
}

const Portfolio: React.FC = () => {
  const { t, tRaw } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const projects: Project[] = Array.isArray(tRaw('portfolio.projects')) ? tRaw('portfolio.projects') : [];

  const entries = projects.map((project, index) => ({ project, image: portfolioIllustrations[index % portfolioIllustrations.length] }));
  const filtered = activeFilter === 'all' ? entries : entries.filter(({ project }) => project.type === activeFilter);

  const filterClass = (active: boolean) =>
    cn(
      'border px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors',
      active
        ? 'border-primary bg-primary text-primary-foreground'
        : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
    );

  return (
    <div className="min-h-screen">
      <SEO
        title="Портфолио проектов: Реализованные объекты | Raywerthi"
        description="Примеры установленных моторизованных систем, маркиз и фасадных штор на частных виллах и коммерческих объектах."
        keywords="портфолио маркизы Ереван, проекты солнцезащиты Армения, рафшторы Грузия, фасадные шторы Кавказ"
        canonicalUrl="https://raywerthi.com/portfolio"
      />

      <Header overlay />
      <main>
        <PageHero
          image={pageHeroes.portfolio}
          eyebrow={t('portfolio.eyebrow')}
          title={t('portfolio.title')}
          lede={t('portfolio.subtitle')}
        />

        <section className="section-padding">
          <div className="container-site">
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setActiveFilter('all')} className={filterClass(activeFilter === 'all')}>
                {t('portfolio.filterAll')}
              </button>
              {filterKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveFilter(key)}
                  className={filterClass(activeFilter === key)}
                >
                  {t(`portfolio.filters.${key}`)}
                </button>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(({ project, image }, i) => (
                <Reveal key={project.name} variant="slats" delay={(i % 3) * 90}>
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                      <img src={image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      <figcaption className="absolute bottom-0 left-0 bg-ink/85 px-3 py-1.5 text-[0.5625rem] uppercase tracking-[0.16em] text-white/80">
                        {t('portfolio.illustration')}
                      </figcaption>
                    </div>
                    <h2 className="mt-5 font-display text-2xl text-foreground">{project.name}</h2>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin size={13} strokeWidth={1.5} /> {project.location}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="border border-primary/30 bg-primary/5 px-2.5 py-1 text-[0.6875rem] font-medium text-primary">
                        {project.solution}
                      </span>
                      <span className="border border-border px-2.5 py-1 text-[0.6875rem] text-muted-foreground">
                        {project.brands}
                      </span>
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactBlock />
      </main>
      <Footer showCta={false} />
    </div>
  );
};

export default Portfolio;
