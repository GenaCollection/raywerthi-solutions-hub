import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';


const solutionKeys = ['blinds', 'rollshutters', 'awnings', 'screens', 'interior', 'smarthome'];

const Contacts: React.FC = () => {
  const { t, lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const prefilledSolution = searchParams.get('solution') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    objectType: '',
    city: '',
    solutionType: prefilledSolution,
    comment: '',
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
        title: '✓',
        description: t('contacts.form.success'),
      });
      setFormData({ name: '', phone: '', email: '', objectType: '', city: '', solutionType: '', comment: '' });
    } catch {
      toast({
        title: '✗',
        description: t('contacts.form.error'),
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };


  const objectTypeKeys = ['house', 'apartment', 'commercial', 'other'];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Контакты и заказ замера | Raywerthi Армения, Грузия, Кавказ</title>
        <meta name="description" content="Свяжитесь с нами для консультации и вызова специалиста на замер по всему Кавказскому региону." />
        <link rel="canonical" href="https://raywerthi.com/contacts" />
        <meta property="og:title" content="Контакты и заказ замера | Raywerthi Армения, Грузия, Кавказ" />
        <meta property="og:description" content="Свяжитесь с нами для консультации и вызова специалиста на замер по всему Кавказскому региону." />
        <meta property="og:url" content="https://raywerthi.com/contacts" />
        <meta name="twitter:title" content="Контакты и заказ замера | Raywerthi Армения, Грузия, Кавказ" />
        <meta name="twitter:description" content="Свяжитесь с нами для консультации и вызова специалиста на замер по всему Кавказскому региону." />
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="section-padding gradient-warm-soft">
          <div className="container-site text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('contacts.title')}
            </h1>
            <p className="text-muted-foreground text-lg">{t('contacts.subtitle')}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('contacts.company')}</h2>
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="text-primary shrink-0" size={20} />
                    <div>
                      <div className="font-medium">{t('contacts.country')}</div>
                      <div className="text-muted-foreground text-sm">{t('contacts.address')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Phone className="text-primary shrink-0" size={20} />
                    <span>{t('contacts.phone')}</span>
                  </div>
                  <a href="mailto:raywerthi@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <Mail className="text-primary shrink-0" size={20} />
                    <span>{t('contacts.email')}</span>
                  </a>
                </div>

                {/* Messenger buttons */}
                <div className="flex gap-3 mb-8">
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                    <Send size={16} /> Telegram
                  </a>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps?q=%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F,%20%D0%95%D1%80%D0%B5%D0%B2%D0%B0%D0%BD,%20%D0%A2%D0%B8%D0%B3%D1%80%D0%B0%D0%BD%D0%B0%20%D0%9C%D0%B5%D1%86%2069&z=16&output=embed"
                    className="w-full h-full"
                    title="RayWerThi - Армения, Ереван, Тиграна Мец 69"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('contacts.form.title')}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contacts.form.name')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t('contacts.form.phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t('contacts.form.email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t('contacts.form.objectType')}</label>
                      <select
                        name="objectType"
                        value={formData.objectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      >
                        <option value="">—</option>
                        {objectTypeKeys.map((key) => (
                          <option key={key} value={key}>{t(`contacts.form.objectTypes.${key}`)}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">{t('contacts.form.city')}</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contacts.form.solutionType')}</label>
                    <select
                      name="solutionType"
                      value={formData.solutionType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">—</option>
                      {solutionKeys.map((key) => (
                        <option key={key} value={t(`solutions.categories.${key}.title`)}>
                          {t(`solutions.categories.${key}.title`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{t('contacts.form.comment')}</label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 gradient-warm text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm md:text-base"
                  >
                    {submitting ? '...' : t('contacts.form.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
