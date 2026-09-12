import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Ruler } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const itemClass = 'flex flex-col items-center justify-center gap-1 py-2.5 text-[0.6875rem] font-medium';

const MobileActionBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3">
        <a href="tel:+37491553822" className={`${itemClass} text-foreground`}>
          <Phone size={18} strokeWidth={1.5} />
          {t('mobileBar.call')}
        </a>
        <a
          href="https://wa.me/37491553822"
          target="_blank"
          rel="noopener noreferrer"
          className={`${itemClass} border-x border-border text-foreground`}
        >
          <MessageCircle size={18} strokeWidth={1.5} />
          {t('mobileBar.whatsapp')}
        </a>
        <Link to="/contacts" className={`${itemClass} bg-primary text-primary-foreground`}>
          <Ruler size={18} strokeWidth={1.5} />
          {t('mobileBar.measure')}
        </Link>
      </div>
    </div>
  );
};

export default MobileActionBar;
