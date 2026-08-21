import { Helmet } from 'react-helmet-async';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TasksSection from '@/components/TasksSection';
import BrandsSection from '@/components/BrandsSection';
import HowWeWork from '@/components/HowWeWork';
import AdvantagesSection from '@/components/AdvantagesSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import ContactBlock from '@/components/ContactBlock';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Raywerthi — Премиальные солнцезащитные и фасадные системы</title>
        <meta name="description" content="Официальные решения HELLA, WAREMA и Silent Gliss в Армении, Грузии и по всему Кавказу." />
        <link rel="canonical" href="https://raywerthi.com/" />
        <meta property="og:title" content="Raywerthi — Премиальные солнцезащитные и фасадные системы" />
        <meta property="og:description" content="Официальные решения HELLA, WAREMA и Silent Gliss в Армении, Грузии и по всему Кавказу." />
        <meta property="og:url" content="https://raywerthi.com/" />
        <meta name="twitter:title" content="Raywerthi — Премиальные солнцезащитные и фасадные системы" />
        <meta name="twitter:description" content="Официальные решения HELLA, WAREMA и Silent Gliss в Армении, Грузии и по всему Кавказу." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <TasksSection />
        <BrandsSection />
        <HowWeWork />
        <AdvantagesSection />
        <PortfolioPreview />
        <ContactBlock />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
