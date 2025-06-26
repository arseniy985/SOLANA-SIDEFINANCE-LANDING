import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Education from '@/components/Education';
import VentureFund from '@/components/VentureFund';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundDecorations from '@/components/BackgroundDecorations';
import TokenSection from '@/components/TokenSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-gray-950 relative">
      <BackgroundDecorations />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <TokenSection />
        <About />
        <Research />
        <Education />
        <VentureFund />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
