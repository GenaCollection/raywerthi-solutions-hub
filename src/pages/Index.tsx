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
