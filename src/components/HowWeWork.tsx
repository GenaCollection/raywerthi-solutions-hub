import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { MessageSquare, Ruler, Truck, Wrench } from 'lucide-react';

const steps = [
  { icon: MessageSquare, titleKey: 'step1title', descKey: 'step1desc', num: '01' },
  { icon: Ruler, titleKey: 'step2title', descKey: 'step2desc', num: '02' },
  { icon: Truck, titleKey: 'step3title', descKey: 'step3desc', num: '03' },
  { icon: Wrench, titleKey: 'step4title', descKey: 'step4desc', num: '04' },
];

const HowWeWork: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="container-site">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          {t('howWeWork.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="bg-background rounded-xl p-6 md:p-8 border border-border relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-black text-primary/10">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-lg gradient-warm flex items-center justify-center mb-5">
                  <Icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(`howWeWork.${step.titleKey}`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`howWeWork.${step.descKey}`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
