import React from 'react';

import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';

import { ScrollProgress } from './components/ScrollProgress';

const App: React.FC = () => {
  return (
    <div className='min-h-screen bg-white'>
      <ScrollProgress />

      {/* Header - 첫인상과 소개 */}
      <Header />

      {/* About - 나의 경력과 업적으로 신뢰성 구축 */}
      <About />

      {/* Services - 제공 가능한 서비스와 솔루션 (라이브 데모 포함) */}
      <ServicesSection />

      {/* Contact */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
