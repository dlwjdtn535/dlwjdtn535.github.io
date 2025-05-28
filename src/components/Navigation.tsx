import React, { useEffect, useState } from 'react';

const Navigation: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 스무스 스크롤
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsNavOpen(false); // 모바일에서 메뉴 닫기
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Brand */}
          <button
            onClick={() => handleSmoothScroll('page-top')}
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            개발자 포트폴리오
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`p-2 transition-colors duration-300 lg:hidden ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className='flex h-6 w-6 flex-col items-center justify-center'>
              <span
                className={`block h-0.5 w-full transform bg-current transition-transform duration-200 ${
                  isNavOpen ? 'translate-y-1 rotate-45' : '-translate-y-1'
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                  isNavOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-full transform bg-current transition-transform duration-200 ${
                  isNavOpen ? '-translate-y-1 -rotate-45' : 'translate-y-1'
                }`}
              />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className='hidden space-x-8 lg:flex'>
            <button
              onClick={() => handleSmoothScroll('portfolio')}
              className={`font-medium transition-colors duration-300 hover:text-blue-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSmoothScroll('about')}
              className={`font-medium transition-colors duration-300 hover:text-blue-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleSmoothScroll('contact')}
              className={`font-medium transition-colors duration-300 hover:text-blue-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isNavOpen ? 'max-h-48 pb-4' : 'max-h-0'
          }`}
        >
          <div className='flex flex-col space-y-4'>
            <button
              onClick={() => handleSmoothScroll('portfolio')}
              className={`text-left font-medium transition-colors duration-300 hover:text-blue-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => handleSmoothScroll('about')}
              className={`text-left font-medium transition-colors duration-300 hover:text-blue-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleSmoothScroll('contact')}
              className={`text-left font-medium transition-colors duration-300 hover:text-blue-500 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
