import React from 'react';
import { ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactBlock from '@/components/ContactBlock';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/i18n/LanguageContext';
import { pageHeroes } from '@/data/siteImages';

const serviceKeys = ['selection', 'measurement', 'delivery', 'installation', 'support'];

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEO
        title="Услуги замера, проектирования и монтажа систем | Raywerthi"
        description="Профессиональный выезд на объект по Армении и Кавказу, точный замер, логистика от европейских заводов и шеф-монтаж."
        keywords="замер солнцезащиты Ереван, монтаж маркиз Армения, проектирование рафшторов, шеф-монтаж Кавказ"
        canonicalUrl="https://raywerthi.com/services"
      />

      <Header overlay />
      <main>
        <PageHero
          image={pageHeroes.services}
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          lede={t('services.subtitle')}
        />

        <section className="section-padding">
          <div className="container-site">
            <ol className="border-t border-border">
              {serviceKeys.map((key, i) => (
                <Reveal
                  as="li"
                  key={key}
                  delay={(i % 3) * 80}
                  className="grid gap-4 border-b border-border py-10 md:grid-cols-12 md:gap-10 md:py-14"
                >
                  <div className="md:col-span-3">
                    <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {t('services.step')} {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="display-3 mt-3 text-foreground md:text-[1.75rem]">{t(`services.items.${key}.title`)}</h2>
                  </div>
                  <p className="leading-relaxed text-muted-foreground md:col-span-8 md:col-start-5 md:text-lg">
                    {t(`services.items.${key}.desc`)}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-sand">
          <div className="container-site py-16 md:py-20">
            <Reveal className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <ShieldCheck size={40} strokeWidth={1} className="shrink-0 text-primary" />
              <div className="max-w-3xl">
                <h2 className="display-3 text-foreground">{t('services.warrantyTitle')}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t('services.warrantyText')}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactBlock />
      </main>
      <Footer showCta={false} />
    </div>
  );
};

export default Services;
