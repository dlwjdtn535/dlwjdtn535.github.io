import { useParallax, useScrollAnimation } from '@/hooks/useScrollAnimation';
import React, { useState } from 'react';
import { AnimatedSection, ParallaxElement } from './AnimatedSection';

export const Header: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { scrollY } = useScrollAnimation();
  const parallaxOffset = useParallax(0.3);
  
  // 스크롤에 따른 헤더 변형 효과
  const headerScale = Math.max(0.8, 1 - scrollY * 0.0005);
  const headerOpacity = Math.max(0.3, 1 - scrollY * 0.002);
  const textScale = Math.max(0.9, 1 - scrollY * 0.0003);

  const handleImageError = () => {
    setImageError(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="header" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* 배경 패턴 - 패럴랙스 효과 */}
      <ParallaxElement speed={0.2} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]" />
      </ParallaxElement>
      
      {/* 움직이는 배경 그리드 */}
      <ParallaxElement speed={0.1} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </ParallaxElement>

      {/* 메인 콘텐츠 */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        style={{
          transform: `scale(${headerScale}) translateY(${parallaxOffset}px)`,
          opacity: headerOpacity,
        }}
      >
        {/* 프로필 이미지 - 스케일 애니메이션 */}
        <AnimatedSection animation="scaleIn" duration="duration-1500">
          <div className="relative mb-8 group">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto relative">
              {/* 글로우 효과 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm group-hover:border-white/40 transition-all duration-700 group-hover:scale-105">
                {!imageError ? (
                  <img
                    src="/img/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">개</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 메인 타이틀 */}
        <AnimatedSection animation="fadeInUp" delay={200} duration="duration-1500">
          <div style={{ transform: `scale(${textScale})` }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Creative
              </span>
              <span className="block text-gray-100 mt-2">
                Developer
              </span>
            </h1>
          </div>
        </AnimatedSection>

        {/* 서브타이틀 */}
        <AnimatedSection animation="fadeInUp" delay={400} duration="duration-1500">
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              혁신적인 웹 경험을 만드는
            </span>
            <br />
            <span className="text-gray-200">
              풀스택 개발자입니다
            </span>
          </p>
        </AnimatedSection>

        {/* 기술 스택 태그들 */}
        <AnimatedSection animation="fadeInUp" delay={600} duration="duration-1500">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { name: 'React', color: 'from-blue-400 to-cyan-400' },
              { name: 'TypeScript', color: 'from-blue-500 to-indigo-500' },
              { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
              { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
              { name: 'Python', color: 'from-yellow-400 to-orange-500' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent font-semibold text-sm md:text-base group-hover:scale-105 transition-transform duration-300`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA 버튼들 */}
        <AnimatedSection animation="fadeInUp" delay={800} duration="duration-1500">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                포트폴리오 보기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/60 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                연락하기
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* 스크롤 인디케이터 */}
      <AnimatedSection 
        animation="fadeInUp" 
        delay={1000} 
        duration="duration-2000"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60 hover:text-white/80 transition-colors duration-300 cursor-pointer"
             onClick={() => scrollToSection('portfolio')}>
          <span className="text-sm mb-2 font-medium">스크롤하여 계속</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </AnimatedSection>
    </header>
  );
};

export default Header;
