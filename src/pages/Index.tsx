import React from 'react';
import SEO from '@/components/SEO';
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
      <SEO
        title="Raywerthi — Солнцезащита и моторизованные карнизы | Армения, Грузия, Кавказ"
        description="Официальные системы HELLA, WAREMA и Silent Gliss: маркизы, рафшторы, роллеты, автоматика для умного дома в Армении, Грузии и по всему Кавказу."
        keywords="маркизы Ереван, рафшторы Тбилиси, солнцезащита Армения, Silent Gliss Ереван, WAREMA Грузия, HELLA Кавказ, моторизованные карнизы"
        canonicalUrl="https://raywerthi.com/"
      />

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
