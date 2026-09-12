import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import logoLight from '@/assets/raywerthi-mark-light.png';

const brandLinks = [
  { name: 'HELLA', slug: 'hella' },
  { name: 'WAREMA', slug: 'warema' },
  { name: 'Silent Gliss', slug: 'silent-gliss' },
];

const headingClass = 'font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-ink-muted';
const linkClass = 'text-sm text-ink-foreground/80 transition-colors hover:text-gold';

interface FooterProps {
  /** Hide the closing call-to-action when the page already ends with the contact form. */
  showCta?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showCta = true }) => {
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
    <footer className="bg-ink pb-20 text-ink-foreground md:pb-0">
      <div className="container-site">
        {showCta && (
          <div className="flex flex-col gap-8 border-b border-white/10 pb-14 pt-20 md:flex-row md:items-end md:justify-between md:pt-28">
            <p className="display-2 max-w-2xl">{t('footer.ctaTitle')}</p>
            <Link to="/contacts" className="btn btn-gold self-start md:self-auto">
              {t('nav.cta')} <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        )}

        <div className={`grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-12 ${showCta ? 'pt-14' : 'border-t border-white/10 pt-16'}`}>
          <div className="lg:col-span-4">
            <img src={logoLight} alt="RayWerThi" loading="lazy" className="h-12 w-auto" />
            <p className="mt-3 text-[0.625rem] uppercase tracking-[0.3em] text-gold">Intelligent Shading Systems</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">{t('footer.description')}</p>
          </div>

          <nav className="lg:col-span-2 lg:col-start-6">
            <h2 className={headingClass}>{t('footer.linksTitle')}</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className={headingClass}>{t('footer.brandsTitle')}</h2>
            <ul className="mt-5 space-y-3">
              {brandLinks.map((brand) => (
                <li key={brand.slug}>
                  <Link to={`/solutions/${brand.slug}`} className={linkClass}>{brand.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className={headingClass}>{t('footer.contactsTitle')}</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="tel:+37491553822" className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Phone size={14} strokeWidth={1.5} /> +374 91 553 822
                </a>
              </li>
              <li>
                <a href="mailto:raywerthi@gmail.com" className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Mail size={14} strokeWidth={1.5} /> raywerthi@gmail.com
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-sm text-ink-foreground/80">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                {t('contacts.country')}, {t('contacts.address')}
              </li>
              <li className="flex gap-4 pt-2">
                <a href="https://wa.me/37491553822" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                  <MessageCircle size={14} strokeWidth={1.5} /> WhatsApp
                </a>
                <a href="https://t.me/+37491553822" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                  <Send size={14} strokeWidth={1.5} /> Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-ink-muted md:flex-row md:justify-between">
          <p>{t('footer.copyright')}</p>
          <p className="tracking-[0.2em]">HELLA · WAREMA · SILENT GLISS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
