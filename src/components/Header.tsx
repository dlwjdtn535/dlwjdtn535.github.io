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
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          {/* 왼쪽: 텍스트 콘텐츠 */}
          <div className='space-y-8 text-center lg:text-left'>
            {/* 인사말과 소개 */}
            <AnimatedSection animation='fadeInUp' className='space-y-6'>
              <div className='space-y-4'>
                <h1 className='text-5xl font-black leading-tight text-white md:text-7xl'>
                  <span className='block'>Senior</span>
                  <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    Full-Stack Developer
                  </span>
                </h1>
                <div className='text-2xl font-bold text-white md:text-3xl'>
                  <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                    J.S
                  </span>
                  <span className='text-gray-300'> here</span>
                </div>
              </div>

              <p className='mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl lg:mx-0'>
                <span className='font-semibold text-blue-300'>
                  10년 이상의 실무 경험
                </span>
                을 바탕으로
                <span className='font-semibold text-emerald-400'>
                  {' '}
                  Spring Boot, React, AWS
                </span>
                를 활용한 확장 가능한 엔터프라이즈 솔루션을 설계하고 구현합니다.
              </p>
            </AnimatedSection>

            {/* 주요 성과 */}
            <AnimatedSection
              animation='fadeInUp'
              delay={200}
              className='space-y-4'
            >
              <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                {[
                  { number: '10+', label: 'Years Experience', icon: '🚀' },
                  { number: '30+', label: 'Projects', icon: '💼' },
                  { number: '5+', label: 'Domains', icon: '🎯' },
                ].map((stat, index) => (
                  <div key={index} className='text-center lg:text-left'>
                    <div className='mb-1 text-sm text-gray-400'>
                      {stat.icon} {stat.label}
                    </div>
                    <div className='text-2xl font-bold text-white md:text-3xl'>
                      {stat.number}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA 버튼 */}
            <AnimatedSection
              animation='fadeInUp'
              delay={400}
              className='flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start'
            >
              <button
                onClick={() => handleSmoothScroll('about')}
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 p-[2px] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)]'
              >
                <div className='relative rounded-2xl bg-slate-900/80 px-8 py-4 backdrop-blur-xl transition-all duration-300 group-hover:bg-slate-900/60'>
                  <span className='flex items-center justify-center gap-3 text-lg font-bold text-white'>
                    <span>경력 상세보기</span>
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
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleSmoothScroll('contact')}
                className='group rounded-2xl border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/20'
              >
                <span className='flex items-center justify-center gap-3 text-lg font-bold text-white'>
                  <span>프로젝트 문의</span>
                  <svg
                    className='h-5 w-5 transition-transform duration-300 group-hover:scale-110'
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
                </span>
              </button>
            </AnimatedSection>
          </div>

          {/* 오른쪽: 프로필 이미지 */}
          <div className='order-first lg:order-last'>
            <AnimatedSection
              animation='fadeInRight'
              delay={300}
              className='relative'
            >
              {/* 메인 프로필 이미지 */}
              <div className='group relative mx-auto max-w-lg sm:max-w-xl lg:max-w-2xl'>
                {/* 배경 글로우 효과 */}
                <div className='absolute -inset-8 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:from-blue-500/50 group-hover:via-purple-500/50 group-hover:to-cyan-500/50' />

                {/* 회전하는 테두리 */}
                <div className='absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 transition-all duration-1000 group-hover:rotate-180'>
                  <div className='h-full w-full rounded-full bg-slate-900' />
                </div>

                {/* 프로필 이미지 */}
                <div className='relative overflow-hidden rounded-full border-4 border-white/20 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:border-white/40'>
                  <img
                    src='/images/projects/profile.jpeg'
                    alt='이정수 - 시니어 풀스택 개발자'
                    className='h-80 w-80 object-cover transition-all duration-700 group-hover:scale-110 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]'
                  />

                  {/* 오버레이 효과 */}
                  <div className='absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100' />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* 기술 스택 섹션 (하단으로 이동) */}
        <div className='mt-20 space-y-8'>
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
          <AnimatedSection
            animation='fadeInUp'
            delay={800}
            className='flex items-center justify-center py-8'
          >
            <div className='flex items-center gap-4'>
              <div className='h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent' />
              <div className='flex items-center gap-2 text-gray-400'>
                <svg
                  className='h-5 w-5 animate-pulse text-blue-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
                <span className='text-sm font-medium'>
                  더 많은 경험을 확인해보세요
                </span>
                <svg
                  className='h-5 w-5 animate-pulse text-purple-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              </div>
              <div className='h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent' />
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
