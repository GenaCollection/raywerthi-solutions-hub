import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/i18n/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const ContactBlock: React.FC = () => {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
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
        title: '✓',
        description: t('contactBlock.form.success'),
      });

      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch {
      toast({
        title: '✗',
        description: t('contactBlock.form.error'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="gradient-warm rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {t('contactBlock.title')}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('contactBlock.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-primary-foreground mb-1.5">
                  {t('contactBlock.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-foreground mb-1.5">
                  {t('contactBlock.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-foreground mb-1.5">
                {t('contactBlock.form.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-foreground mb-1.5">
                {t('contactBlock.form.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-background text-foreground font-semibold rounded-lg hover:bg-background/90 transition-colors disabled:opacity-50 text-sm md:text-base"
            >
              {isSubmitting ? t('contactBlock.form.sending') : t('contactBlock.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
