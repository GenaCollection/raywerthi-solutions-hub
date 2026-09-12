import React, { useId, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { contactImage } from '@/data/siteImages';
import SectionHeading from './SectionHeading';

const ContactBlock: React.FC = () => {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_phone: formData.phone,
          user_email: formData.email,
          message: formData.message,
          language: lang,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: t('contactBlock.form.successTitle'),
        description: t('contactBlock.form.success'),
      });

      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch {
      toast({
        title: t('contactBlock.form.errorTitle'),
        description: t('contactBlock.form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldId = (name: string) => `${id}-${name}`;

  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block">
        <img src={contactImage} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/20" />
      </div>
      <div aria-hidden className="lamella-texture absolute inset-0 -z-10" />

      <div className="container-site section-padding grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <SectionHeading
            tone="dark"
            eyebrow={t('contactBlock.eyebrow')}
            title={t('contactBlock.title')}
            lede={t('contactBlock.subtitle')}
          />

          <div className="mt-12 space-y-8">
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">{t('contactBlock.orCall')}</p>
              <a
                href="tel:+37491553822"
                className="mt-2 inline-block font-display text-3xl text-ink-foreground transition-colors hover:text-gold md:text-4xl"
              >
                +374 91 553 822
              </a>
            </div>
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">{t('contactBlock.messengers')}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="https://wa.me/37491553822" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light h-11 px-5">
                  <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp
                </a>
                <a href="https://t.me/+37491553822" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light h-11 px-5">
                  <Send size={16} strokeWidth={1.5} /> Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="self-start rounded-sm bg-background p-6 text-foreground shadow-soft md:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor={fieldId('name')} className="field-label">{t('contactBlock.form.name')}</label>
              <input
                id={fieldId('name')}
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
            <div>
              <label htmlFor={fieldId('phone')} className="field-label">{t('contactBlock.form.phone')}</label>
              <input
                id={fieldId('phone')}
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor={fieldId('email')} className="field-label">{t('contactBlock.form.email')}</label>
            <input
              id={fieldId('email')}
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="field"
            />
          </div>

          <div className="mt-5">
            <label htmlFor={fieldId('message')} className="field-label">{t('contactBlock.form.message')}</label>
            <textarea
              id={fieldId('message')}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="field-area"
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary mt-8 w-full">
            {isSubmitting ? t('contactBlock.form.sending') : t('contactBlock.form.submit')}
            {!isSubmitting && <ArrowRight size={16} strokeWidth={1.5} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactBlock;
