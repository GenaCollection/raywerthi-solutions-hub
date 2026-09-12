import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center pt-16 md:pt-20">
        <div className="container-site py-24 text-center">
          <p className="font-display text-7xl text-primary md:text-8xl">404</p>
          <h1 className="display-2 mt-6 text-foreground">{t('notFound.title')}</h1>
          <p className="lede mx-auto mt-5 max-w-lg text-muted-foreground">{t('notFound.text')}</p>
          <Link to="/" className="btn btn-primary mt-10">
            {t('notFound.back')} <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </main>
      <Footer showCta={false} />
    </div>
  );
};

export default NotFound;
