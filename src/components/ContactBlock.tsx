import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';

const ContactBlock: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="gradient-warm rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {t('contactBlock.title')}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('contactBlock.subtitle')}
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors text-sm md:text-base"
          >
            {t('contactBlock.cta')} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
