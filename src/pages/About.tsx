import { Helmet } from 'react-helmet-async';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Users, Award, Globe, Heart } from 'lucide-react';

const sections = [
  { key: 'whoWeAre', icon: Users },
  { key: 'partnership', icon: Award },
  { key: 'geography', icon: Globe },
  { key: 'values', icon: Heart },
];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>О компании Raywerthi — Премиум-культура комфорта</title>
        <meta name="description" content="Партнер ведущих европейских брендов HELLA, WAREMA, Silent Gliss. Решаем сложные интерьерные задачи." />
        <link rel="canonical" href="https://raywerthi.com/about" />
        <meta property="og:title" content="О компании Raywerthi — Премиум-культура комфорта" />
        <meta property="og:description" content="Партнер ведущих европейских брендов HELLA, WAREMA, Silent Gliss. Решаем сложные интерьерные задачи." />
        <meta property="og:url" content="https://raywerthi.com/about" />
        <meta name="twitter:title" content="О компании Raywerthi — Премиум-культура комфорта" />
        <meta name="twitter:description" content="Партнер ведущих европейских брендов HELLA, WAREMA, Silent Gliss. Решаем сложные интерьерные задачи." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="section-padding gradient-warm-soft">
          <div className="container-site text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-site max-w-4xl">
            <div className="flex flex-col gap-8">
              {sections.map(({ key, icon: Icon }) => (
                <div key={key} className="bg-secondary rounded-xl p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg gradient-warm flex items-center justify-center shrink-0">
                      <Icon className="text-primary-foreground" size={20} />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {t(`about.${key}.title`)}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`about.${key}.text`)}
                  </p>
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

export default About;
