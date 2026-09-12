import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { taskImages } from '@/data/siteImages';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const TasksSection: React.FC = () => {
  const { t } = useLanguage();

  const panels = [
    { key: 'private', image: taskImages.private, title: t('tasks.privateTitle'), desc: t('tasks.privateDesc') },
    { key: 'projects', image: taskImages.projects, title: t('tasks.projectTitle'), desc: t('tasks.projectDesc') },
  ];

  return (
    <section className="section-padding">
      <div className="container-site">
        <SectionHeading eyebrow={t('tasks.eyebrow')} title={t('tasks.title')} />

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          {panels.map((panel, i) => (
            <Reveal key={panel.key} variant="slats" delay={i * 140}>
              <Link
                to="/solutions"
                className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-sm p-7 text-white md:min-h-[36rem] md:p-10"
              >
                <img
                  src={panel.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform [transition-duration:1400ms] ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 scrim-bottom" />
                <span className="font-display text-xl text-gold">0{i + 1}</span>
                <h3 className="display-3 mt-3 max-w-md">{panel.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-white/80">{panel.desc}</p>
                <span className="link-arrow mt-7 self-start text-white">
                  {t('tasks.learnMore')} <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksSection;
