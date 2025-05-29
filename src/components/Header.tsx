import React, { useCallback, useMemo } from 'react';

import {
    SiAmazonwebservices,
    SiFlutter,
    SiGooglecloud,
    SiKotlin,
    SiNestjs,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiSpringboot,
    SiSpringsecurity,
    SiTypescript,
} from 'react-icons/si';

import { AnimatedSection } from './AnimatedSection';

export const Header: React.FC = () => {
  // 메모리 최적화: 정적 데이터를 useMemo로 메모이제이션
  const techStack = useMemo(
    () => [
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        color: 'from-green-400 to-emerald-600',
      },
      {
        name: 'Spring Security',
        icon: SiSpringsecurity,
        color: 'from-yellow-400 to-yellow-600',
      },
      { name: 'Python', icon: SiPython, color: 'from-blue-300 to-blue-500' },
      { name: 'React', icon: SiReact, color: 'from-blue-400 to-blue-600' },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'from-blue-600 to-blue-800',
      },
      {
        name: 'Kotlin',
        icon: SiKotlin,
        color: 'from-purple-400 to-purple-600',
      },
      {
        name: 'AWS',
        icon: SiAmazonwebservices,
        color: 'from-orange-400 to-orange-600',
      },
      {
        name: 'Google Cloud',
        icon: SiGooglecloud,
        color: 'from-blue-500 to-blue-700',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: 'from-gray-800 to-gray-900',
      },
      {
        name: 'Flutter',
        icon: SiFlutter,
        color: 'from-indigo-400 to-indigo-600',
      },
      { name: 'NestJS', icon: SiNestjs, color: 'from-red-400 to-red-600' },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      { number: '10+', label: '년 경력', icon: '💼' },
      { number: '30+', label: '프로젝트', icon: '🚀' },
      { number: '15+', label: '기업 협업', icon: '⭐' },
      { number: '5+', label: '도메인 경험', icon: '🌟' },
    ],
    []
  );

  // 메모리 최적화: 스크롤 핸들러를 useCallback으로 최적화
  const handleSmoothScroll = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <header className='relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950 to-blue-950'>
      {/* 최적화된 CSS 기반 배경 효과 */}
      <div className='absolute inset-0'>
        {/* 정적 그라데이션 배경 */}
        <div className='absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl filter' />
        <div
          className='absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 blur-3xl filter'
          style={{ animationDelay: '2s' }}
        />

        {/* 가벼운 CSS 그리드 패턴 */}
        <div className='absolute inset-0 opacity-5'>
          <div className='bg-grid-pattern h-full w-full' />
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className='container relative z-10 mx-auto px-4'>
        <div className='space-y-8 text-center'>
          {/* 최적화된 타이포그래피 헤더 */}
          <AnimatedSection animation='fadeInUp' className='space-y-6'>
            <h1 className='text-6xl font-black leading-none md:text-8xl'>
              <span className='group relative inline-block cursor-pointer'>
                <span className='relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-cyan-300'>
                  J.S
                </span>
                
                {/* 글로우 효과 */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110' />
                
                {/* 반짝이는 효과 */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100' style={{ transform: 'translateX(-100%)' }} />
                
                {/* 배경 원형 글로우 */}
                <div className='absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150 md:h-48 md:w-48' />
              </span>
            </h1>
            <div className='text-xl md:text-2xl font-semibold text-gray-300'>
              <span className='block'>Senior Full-Stack Developer</span>
              <span className='block text-lg md:text-xl text-gray-400 mt-2'>
                10+ years of experience building innovative solutions
              </span>
            </div>
          </AnimatedSection>

          {/* 최적화된 통계 카드 */}
          <AnimatedSection animation='fadeInUp' delay={200} className='mb-8'>
            <div className='mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4'>
              {achievements.map((achievement, index) => (
                <AnimatedSection
                  key={achievement.label}
                  animation='scaleIn'
                  delay={300 + index * 100}
                  className='group'
                >
                  <div className='relative transform rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white/30'>
                    <div className='text-center'>
                      <div className='mb-2 text-2xl transition-transform duration-300 group-hover:scale-110'>
                        {achievement.icon}
                      </div>
                      <div className='mb-1 text-2xl font-bold text-white md:text-3xl'>
                        {achievement.number}
                      </div>
                      <div className='text-sm font-medium text-gray-300'>
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* 최적화된 기술 스택 */}
          <AnimatedSection animation='fadeInUp' delay={400} className='mb-8'>
            <div className='space-y-4'>
              <div className='mx-auto flex max-w-3xl flex-wrap justify-center gap-3'>
                {techStack.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <AnimatedSection
                      key={tech.name}
                      animation='scaleIn'
                      delay={500 + index * 50}
                      className='group'
                    >
                      <div
                        className={`flex items-center gap-2 bg-gradient-to-r px-4 py-2 ${tech.color} transform cursor-pointer rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                      >
                        <IconComponent className='h-5 w-5 text-lg' />
                        <span className='text-sm font-medium text-white'>
                          {tech.name}
                        </span>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* 창의적인 구분선 섹션 */}
          <AnimatedSection animation='fadeInUp' delay={550} className='py-12'>
            <div className='relative flex items-center justify-center'>
              {/* 중앙 아이콘 */}
              <div className='relative z-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 p-4 shadow-2xl'>
                <div className='rounded-full bg-slate-900/80 p-3 backdrop-blur-xl'>
                  <svg
                    className='h-6 w-6 text-white animate-pulse'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 14l-7 7m0 0l-7-7m7 7V3'
                    />
                  </svg>
                </div>
              </div>

              {/* 좌측 그라데이션 라인 */}
              <div className='absolute left-0 right-1/2 top-1/2 h-[2px] -translate-y-1/2 transform'>
                <div className='h-full w-full bg-gradient-to-r from-transparent via-blue-500/30 to-purple-500/50 animate-pulse' />
                <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-blue-400/20 to-purple-400/30 blur-sm' />
              </div>

              {/* 우측 그라데이션 라인 */}
              <div className='absolute left-1/2 right-0 top-1/2 h-[2px] -translate-y-1/2 transform'>
                <div className='h-full w-full bg-gradient-to-l from-transparent via-cyan-500/30 to-purple-500/50 animate-pulse' style={{ animationDelay: '0.5s' }} />
                <div className='absolute inset-0 h-full w-full bg-gradient-to-l from-transparent via-cyan-400/20 to-purple-400/30 blur-sm' />
              </div>

              {/* 플로팅 파티클들 */}
              <div className='absolute -top-4 left-1/4 h-2 w-2 rounded-full bg-blue-400/60 animate-bounce' style={{ animationDelay: '0s', animationDuration: '2s' }} />
              <div className='absolute -bottom-4 right-1/4 h-2 w-2 rounded-full bg-purple-400/60 animate-bounce' style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
              <div className='absolute top-2 left-1/3 h-1 w-1 rounded-full bg-cyan-400/60 animate-bounce' style={{ animationDelay: '1s', animationDuration: '3s' }} />
              <div className='absolute -top-2 right-1/3 h-1 w-1 rounded-full bg-pink-400/60 animate-bounce' style={{ animationDelay: '1.5s', animationDuration: '2.8s' }} />
            </div>
          </AnimatedSection>

          {/* 최적화된 CTA 버튼들 */}
          <AnimatedSection
            animation='fadeInUp'
            delay={600}
            className='space-y-6'
          >
            <div className='flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8'>
              <button
                onClick={() => handleSmoothScroll('about')}
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] active:scale-95'
              >
                <div className='relative rounded-2xl bg-slate-900/80 px-8 py-4 backdrop-blur-xl transition-all duration-300 group-hover:bg-slate-900/60'>
                  <span className='flex items-center gap-3 text-lg font-bold text-white'>
                    <div className='rounded-lg bg-white/10 p-2 transition-all duration-300 group-hover:bg-white/20 group-hover:rotate-3'>
                      <svg
                        className='h-5 w-5 transition-transform duration-300 group-hover:translate-x-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                      </svg>
                    </div>
                    <span className='bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
                      경력 상세보기
                    </span>
                  </span>
                  
                  {/* Glow effect */}
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                </div>
              </button>

              <button
                onClick={() => handleSmoothScroll('contact')}
                className='group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95'
              >
                <span className='flex items-center gap-3 text-lg font-bold text-white'>
                  <div className='rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 p-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110'>
                    <svg
                      className='h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <span className='bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent'>
                    협업 제안
                  </span>
                </span>
                
                {/* Hover shimmer effect */}
                <div className='absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100' />
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
