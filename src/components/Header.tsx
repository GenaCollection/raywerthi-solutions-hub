import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Language } from '@/i18n/translations';
import { cn } from '@/lib/utils';
import logoMark from '@/assets/raywerthi-mark.png';
import logoLight from '@/assets/raywerthi-mark-light.png';

const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'hy', label: 'HY' },
  { code: 'en', label: 'EN' },
];

const languageGroupLabel: Record<Language, string> = { ru: 'Язык', hy: 'Լեզու', en: 'Language' };

interface HeaderProps {
  /** Start transparent over a dark full-bleed hero; turns solid once the page scrolls. */
  overlay?: boolean;
}

const Header: React.FC<HeaderProps> = ({ overlay = false }) => {
  const { lang, setLang, t } = useLanguage();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/solutions', label: t('nav.solutions') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/contacts', label: t('nav.contacts') },
  ];

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));
  const transparent = overlay && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500',
          transparent ? 'bg-transparent' : 'bg-background/90 shadow-[0_1px_0_hsl(var(--border))] backdrop-blur-xl',
        )}
      >
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/55 to-transparent transition-opacity duration-500',
            transparent ? 'opacity-100' : 'opacity-0',
          )}
        />
        <div className="container-site relative flex h-16 items-center justify-between gap-6 md:h-20">
          <Link to="/" aria-label="RayWerThi — Intelligent Shading Systems" className="shrink-0">
            <img src={transparent ? logoLight : logoMark} alt="RayWerThi" className="h-10 w-auto md:h-12" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navItems.slice(1).map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative py-2 text-[0.8125rem] font-medium tracking-wide transition-colors',
                    'after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-out-expo',
                    active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                    transparent
                      ? active
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                      : active
                        ? 'text-foreground'
                        : 'text-foreground/70 hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <div role="group" aria-label={languageGroupLabel[lang]} className="flex items-center">
              {languages.map((l) => {
                const current = lang === l.code;
                return (
                  <button
                    key={l.code}
                    type="button"
                    lang={l.code}
                    onClick={() => setLang(l.code)}
                    aria-pressed={current}
                    className={cn(
                      'px-1.5 py-2 text-[0.6875rem] font-semibold tracking-[0.14em] transition-colors',
                      transparent
                        ? current
                          ? 'text-white'
                          : 'text-white/55 hover:text-white'
                        : current
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {l.label}
                  </button>
                );
              })}
            </div>

            <Link
              to="/contacts"
              className={cn(
                'btn hidden h-10 px-5 sm:inline-flex lg:hidden xl:inline-flex',
                transparent ? 'btn-outline-light' : 'btn-primary',
              )}
            >
              {t('nav.cta')}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              className={cn('-mr-2 p-2 lg:hidden', transparent ? 'text-white' : 'text-foreground')}
            >
              {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise become this fixed panel's containing block. */}
      <div
        id="mobile-nav"
        className={cn(
          'fixed inset-0 z-40 bg-background pt-16 transition-[opacity,visibility] duration-300 md:pt-20 lg:hidden',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav className="container-site flex h-full flex-col overflow-y-auto pb-28 pt-6">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              aria-current={isActive(item.path) ? 'page' : undefined}
              style={{ transitionDelay: mobileOpen ? `${60 + i * 40}ms` : '0ms' }}
              className={cn(
                'border-b border-border py-4 font-display text-3xl transition-[opacity,transform] duration-500 ease-out-expo',
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                isActive(item.path) ? 'text-primary' : 'text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-10 flex flex-col gap-3">
            <Link to="/contacts" onClick={() => setMobileOpen(false)} className="btn btn-primary w-full">
              {t('nav.cta')}
            </Link>
            <a href="tel:+37491553822" className="btn btn-outline w-full">
              <Phone size={16} strokeWidth={1.5} /> +374 91 553 822
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
