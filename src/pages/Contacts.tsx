import React, { useId, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/i18n/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { unifiedCategories } from '@/data/products';
import { pageHeroes } from '@/data/siteImages';

const objectTypeKeys = ['house', 'apartment', 'commercial', 'other'];

const Contacts: React.FC = () => {
  const { t, lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const fieldId = useId();
  const prefilledSolution = searchParams.get('solution') || '';
  const prefilledModel = searchParams.get('model') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    objectType: '',
    city: '',
    solutionType: prefilledSolution,
    comment: prefilledModel ? `${t('contacts.form.interestedIn')}: ${prefilledModel}` : '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const details = [
        formData.objectType ? `${t('contacts.form.objectType')}: ${t(`contacts.form.objectTypes.${formData.objectType}`)}` : '',
        formData.city ? `${t('contacts.form.city')}: ${formData.city}` : '',
        formData.solutionType ? `${t('contacts.form.solutionType')}: ${formData.solutionType}` : '',
        formData.comment ? `${t('contacts.form.comment')}: ${formData.comment}` : '',
      ]
        .filter(Boolean)
        .join('\n');

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_phone: formData.phone,
          user_email: formData.email,
          message: details,
          language: lang,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: t('contacts.form.successTitle'),
        description: t('contacts.form.success'),
      });
      setFormData({ name: '', phone: '', email: '', objectType: '', city: '', solutionType: '', comment: '' });
    } catch {
      toast({
        title: t('contacts.form.errorTitle'),
        description: t('contacts.form.error'),
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const categoryNames = unifiedCategories.map((category) => category.name[lang]);
  const solutionOptions =
    prefilledSolution && !categoryNames.includes(prefilledSolution) ? [prefilledSolution, ...categoryNames] : categoryNames;

  const id = (name: string) => `${fieldId}-${name}`;

  return (
    <div className="min-h-screen">
      <SEO
        title="Контакты и заказ замера | Ереван, Тбилиси, Кавказ | Raywerthi"
        description="Закажите профессиональный замер и консультацию по автоматическим солнцезащитным системам. Выезд по всему региону."
        keywords="заказать замер маркиз Ереван, солнцезащита Тбилиси контакты, Raywerthi телефон, автоматические карнизы Кавказ"
        canonicalUrl="https://raywerthi.com/contacts"
      />

      <Header overlay />
      <main>
        <PageHero
          size="sm"
          image={pageHeroes.contacts}
          eyebrow={t('contacts.eyebrow')}
          title={t('contacts.title')}
          lede={t('contacts.subtitle')}
        />

        <section className="section-padding">
          <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="display-3 text-foreground">{t('contacts.company')}</h2>

              <dl className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <MapPin size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-primary" />
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {t('contacts.addressLabel')}
                    </dt>
                    <dd className="mt-1 text-foreground">
                      {t('contacts.country')}, {t('contacts.address')}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-primary" />
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {t('contacts.phoneLabel')}
                    </dt>
                    <dd className="mt-1">
                      <a href="tel:+37491553822" className="font-display text-2xl text-foreground transition-colors hover:text-primary">
                        {t('contacts.phone')}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-primary" />
                  <div>
                    <dt className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {t('contacts.emailLabel')}
                    </dt>
                    <dd className="mt-1">
                      <a href="mailto:raywerthi@gmail.com" className="text-foreground transition-colors hover:text-primary">
                        {t('contacts.email')}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10">
                <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {t('contacts.messengersTitle')}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a href="https://wa.me/37491553822" target="_blank" rel="noopener noreferrer" className="btn btn-outline h-11 px-5">
                    <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp
                  </a>
                  <a href="https://t.me/+37491553822" target="_blank" rel="noopener noreferrer" className="btn btn-outline h-11 px-5">
                    <Send size={16} strokeWidth={1.5} /> Telegram
                  </a>
                </div>
              </div>

              <div className="mt-10 aspect-[4/3] overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps?q=%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F,%20%D0%95%D1%80%D0%B5%D0%B2%D0%B0%D0%BD,%20%D0%A2%D0%B8%D0%B3%D1%80%D0%B0%D0%BD%D0%B0%20%D0%9C%D0%B5%D1%86%2069&z=16&output=embed"
                  className="h-full w-full"
                  title="RayWerThi - Армения, Ереван, Тиграна Мец 69"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-sand p-6 md:p-10">
              <h2 className="display-3 text-foreground">{t('contacts.form.title')}</h2>
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <div>
                  <label htmlFor={id('name')} className="field-label">{t('contacts.form.name')}</label>
                  <input
                    id={id('name')}
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="field"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id('phone')} className="field-label">{t('contacts.form.phone')}</label>
                    <input
                      id={id('phone')}
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor={id('email')} className="field-label">{t('contacts.form.email')}</label>
                    <input
                      id={id('email')}
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="field"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={id('objectType')} className="field-label">{t('contacts.form.objectType')}</label>
                    <select
                      id={id('objectType')}
                      name="objectType"
                      value={formData.objectType}
                      onChange={handleChange}
                      required
                      className="field-select"
                    >
                      <option value="">—</option>
                      {objectTypeKeys.map((key) => (
                        <option key={key} value={key}>{t(`contacts.form.objectTypes.${key}`)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor={id('city')} className="field-label">{t('contacts.form.city')}</label>
                    <input
                      id={id('city')}
                      type="text"
                      name="city"
                      autoComplete="address-level2"
                      value={formData.city}
                      onChange={handleChange}
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={id('solutionType')} className="field-label">{t('contacts.form.solutionType')}</label>
                  <select
                    id={id('solutionType')}
                    name="solutionType"
                    value={formData.solutionType}
                    onChange={handleChange}
                    className="field-select"
                  >
                    <option value="">—</option>
                    {solutionOptions.map((name) => (
                      <option key={name} value={name}>{name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={id('comment')} className="field-label">{t('contacts.form.comment')}</label>
                  <textarea
                    id={id('comment')}
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    className="field-area"
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn btn-primary mt-2 w-full">
                  {submitting ? t('contactBlock.form.sending') : t('contacts.form.submit')}
                  {!submitting && <ArrowRight size={16} strokeWidth={1.5} />}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
