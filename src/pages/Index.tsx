
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Features from '@/components/Features';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <Features />
        <Statistics />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
