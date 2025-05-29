import React from 'react';

import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import DemoSection from '@/components/DemoSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PortfolioGallery from '@/components/PortfolioGallery';
import ServicesSection from '@/components/ServicesSection';
import { ScrollProgress } from './components/ScrollProgress';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-white'>
      <ScrollProgress />
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <Header />

      {/* Portfolio Section */}
      <PortfolioGallery />

      {/* Demo Section */}
      <DemoSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <section id='contact' className='bg-blue-600 py-20'>
        <div className='container mx-auto px-4'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-4xl font-bold text-white'>Contact Me</h2>
            <div className='mx-auto mb-8 h-1 w-20 bg-white'></div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
