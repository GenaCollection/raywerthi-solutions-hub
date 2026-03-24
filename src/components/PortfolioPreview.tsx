import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin } from 'lucide-react';

const placeholderProjects = [
  { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop', name: 'project1' },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop', name: 'project2' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', name: 'project3' },
  { img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop', name: 'project4' },
  { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop', name: 'project5' },
  { img: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop', name: 'project6' },
];

const PortfolioPreview: React.FC = () => {
  const { t, lang } = useLanguage();
  const projects = (t('portfolio.projects') as unknown as any[]) || [];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-site">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          {t('portfolioPreview.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.slice(0, 6).map((proj, i) => {
            const projectData = projects[i];
            return (
              <div key={i} className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.img}
                    alt={projectData?.name || 'Project'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-1">{projectData?.name || 'Project'}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                    <MapPin size={13} />
                    <span>{projectData?.location || ''}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                      {projectData?.solution || ''}
                    </span>
                    <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md">
                      {projectData?.brands || ''}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-8 py-3 gradient-warm text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            {t('portfolioPreview.viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
