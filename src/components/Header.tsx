import React, { useCallback, useMemo } from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Header: React.FC = () => {
  // 메모리 최적화: 정적 데이터를 useMemo로 메모이제이션
  const techStack = useMemo(() => [
    { name: 'Spring Boot', icon: '🚀', color: 'from-green-400 to-emerald-600' },
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-600' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-indigo-600' },
    { name: 'Java', icon: '☕', color: 'from-orange-400 to-red-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-blue-800' },
    { name: 'Next.js', icon: '⚡', color: 'from-gray-600 to-gray-800' },
    { name: 'Flutter', icon: '📱', color: 'from-cyan-400 to-blue-500' }
  ], []);

  const achievements = useMemo(() => [
    { number: '10+', label: '년 경력', icon: '💼' },
    { number: '30+', label: '프로젝트', icon: '🚀' },
    { number: '15+', label: '기업 협업', icon: '⭐' },
    { number: '5+', label: '도메인 경험', icon: '🌟' }
  ], []);

  // 메모리 최적화: 스크롤 핸들러를 useCallback으로 최적화
  const handleSmoothScroll = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-blue-950">
      {/* 최적화된 CSS 기반 배경 효과 */}
      <div className="absolute inset-0">
        {/* 정적 그라데이션 배경 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* 가벼운 CSS 그리드 패턴 */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern" />
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* 간소화된 아바타 */}
          <AnimatedSection animation="scaleIn" className="mb-8">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow opacity-80" />
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </div>
          </AnimatedSection>

          {/* 최적화된 타이포그래피 헤더 */}
          <AnimatedSection animation="fadeInUp" className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black leading-none">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Senior Full Stack Developer
                </span>
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-3 text-lg md:text-xl">
                <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-300 font-medium">
                  10년+ 시니어 경험
                </span>
                <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 text-purple-300 font-medium">
                  풀스택 아키텍트
                </span>
                <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 text-emerald-300 font-medium">
                  다중 도메인 전문가
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* 최적화된 통계 카드 */}
          <AnimatedSection animation="fadeInUp" delay={200} className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <AnimatedSection
                  key={achievement.label}
                  animation="scaleIn"
                  delay={300 + index * 100}
                  className="group"
                >
                  <div className="relative p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <div className="text-center">
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-gray-300 font-medium text-sm">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* 최적화된 기술 스택 */}
          <AnimatedSection animation="fadeInUp" delay={400} className="mb-8">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Core Technologies
                </span>
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {techStack.map((tech, index) => (
                  <AnimatedSection
                    key={tech.name}
                    animation="scaleIn"
                    delay={500 + index * 50}
                    className="group"
                  >
                    <div className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${tech.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* 최적화된 CTA 버튼들 */}
          <AnimatedSection animation="fadeInUp" delay={600} className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <span className="text-cyan-400 font-semibold">교육, 부동산, 커머스, 핀테크, 모빌리티</span> 등 
              다양한 도메인에서 <span className="text-purple-400 font-semibold">30여 개의 혁신적인 프로젝트</span>를 
              성공적으로 완료한 시니어 개발자입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => handleSmoothScroll('demo')}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>프로젝트 경험 보기</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button 
                onClick={() => handleSmoothScroll('contact')}
                className="group px-6 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl font-bold text-white text-lg hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span>채용 문의</span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CSS 최적화된 애니메이션 정의 */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
