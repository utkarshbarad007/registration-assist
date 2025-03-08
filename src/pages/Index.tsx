
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Features from '@/components/Features';
import Statistics from '@/components/Statistics';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import AIChatbot from '@/components/AIChatbot';

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <Features />
        <Statistics />
        <CallToAction />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
