import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoLight from '@/assets/raywerthi-mark-light.png.asset.json';


const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/solutions', label: t('nav.solutions') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/contacts', label: t('nav.contacts') },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company */}
          <div className="lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex flex-col items-center">
              <img
                src={logoLight.url}
                alt="RayWerThi"
                loading="lazy"
                className="h-12 md:h-14 w-auto object-contain"
              />
              <p className="text-primary text-[10px] uppercase tracking-[0.3em] mt-3 text-center pl-[0.3em]">
                Intelligent Shading Systems
              </p>
            </div>

            <p className="text-background/70 text-sm leading-relaxed mt-5">
              {t('footer.description')}
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/50">
              {t('footer.linksTitle')}
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/50">
              {t('footer.brandsTitle')}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <span>HELLA</span>
              <span>WAREMA</span>
              <span>Silent Gliss</span>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/50">
              {t('footer.contactsTitle')}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <a href="mailto:raywerthi@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> raywerthi@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone size={14} /> +374 91 223 855
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> {t('contacts.country')}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-xs">{t('footer.copyright')}</p>
          <Link to="#" className="text-background/50 hover:text-background/70 text-xs transition-colors">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
