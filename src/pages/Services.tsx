import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Search, Ruler, Truck, Wrench, HeadphonesIcon } from 'lucide-react';

const serviceKeys = ['selection', 'measurement', 'delivery', 'installation', 'support'];
const serviceIcons: Record<string, React.ElementType> = {
  selection: Search,
  measurement: Ruler,
  delivery: Truck,
  installation: Wrench,
  support: HeadphonesIcon,
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-padding gradient-warm-soft">
          <div className="container-site text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('services.subtitle')}
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-site max-w-4xl">
            <div className="flex flex-col gap-6">
              {serviceKeys.map((key, i) => {
                const Icon = serviceIcons[key] || Search;
                return (
                  <div key={key} className="flex gap-6 items-start bg-secondary rounded-xl p-6 md:p-8">
                    <div className="shrink-0 w-14 h-14 rounded-xl gradient-warm flex items-center justify-center">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {t(`services.items.${key}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(`services.items.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
