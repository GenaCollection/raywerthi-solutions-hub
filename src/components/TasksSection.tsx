import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Home, Building2 } from 'lucide-react';

const TasksSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-site">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          {t('tasks.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Link
            to="/solutions#private"
            className="group bg-background rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all border border-border"
          >
            <div className="w-14 h-14 rounded-xl gradient-warm flex items-center justify-center mb-6">
              <Home className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {t('tasks.privateTitle')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('tasks.privateDesc')}
            </p>
            <span className="text-primary font-semibold text-sm">{t('tasks.learnMore')} →</span>
          </Link>

          <Link
            to="/solutions#projects"
            className="group bg-background rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all border border-border"
          >
            <div className="w-14 h-14 rounded-xl gradient-warm flex items-center justify-center mb-6">
              <Building2 className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {t('tasks.projectTitle')}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('tasks.projectDesc')}
            </p>
            <span className="text-primary font-semibold text-sm">{t('tasks.learnMore')} →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TasksSection;
