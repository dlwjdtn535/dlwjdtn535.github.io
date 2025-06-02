import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 스크롤 감지 (스크롤 탑 버튼용)
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: '프로젝트',
      links: [
        { name: '웹 개발', href: '#portfolio' },
        { name: '모바일 앱', href: '#portfolio' },
        { name: '데이터 분석', href: '#portfolio' },
        { name: 'AI/ML', href: '#portfolio' },
      ],
    },
    {
      title: '서비스',
      links: [
        { name: '웹사이트 제작', href: '#contact' },
        { name: '앱 개발', href: '#contact' },
        { name: '컨설팅', href: '#contact' },
        { name: '유지보수', href: '#contact' },
      ],
    },
    {
      title: '연결',
      links: [
        { name: 'GitHub', href: 'https://github.com/dlwjdtn535' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/dlwjdtn535' },
        { name: 'Twitter', href: '#' },
        { name: 'Email', href: 'mailto:dlwjdtn5624@naver.com' },
      ],
    },
  ];

  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white'>
      {/* 간소화된 배경 효과 */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
      <div className='absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />

      <div className='container relative z-10 mx-auto px-4'>
        {/* 메인 푸터 내용 */}
        <div className='pb-8 pt-16'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {/* 브랜드 섹션 */}
            <div className='lg:col-span-1'>
              <div className='space-y-4'>
                <h3 className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent'>
                  Portfolio
                </h3>
                <p className='leading-relaxed text-gray-300'>
                  <span className='font-semibold text-emerald-400'>
                    10년+ 전문 경험
                  </span>
                  을 바탕으로 확장 가능하고 혁신적인 디지털 솔루션을 제공합니다.
                </p>
                <div className='flex space-x-4'>
                  {[
                    {
                      name: 'GitHub',
                      icon: (
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
                        </svg>
                      ),
                      href: 'https://github.com/dlwjdtn535',
                    },
                    {
                      name: 'LinkedIn',
                      icon: (
                        <svg
                          className='h-5 w-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                        </svg>
                      ),
                      href: 'https://linkedin.com/in/dlwjdtn535',
                    },
                    {
                      name: 'Email',
                      icon: (
                        <svg
                          className='h-5 w-5'
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
                      ),
                      href: 'mailto:dlwjdtn5624@naver.com',
                    },
                  ].map(social => (
                    <a
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-white/20'
                      aria-label={social.name}
                    >
                      <div className='text-gray-400 transition-colors duration-200 group-hover:text-white'>
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 링크 섹션들 */}
            {footerLinks.map(section => (
              <div key={section.title} className='space-y-4'>
                <h4 className='mb-4 text-lg font-semibold text-white'>
                  {section.title}
                </h4>
                <ul className='space-y-3'>
                  {section.links.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          link.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className='group text-gray-400 transition-colors duration-200 hover:text-white'
                      >
                        <span className='border-b border-transparent transition-colors duration-200 group-hover:border-blue-400'>
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div>
          <div className='border-t border-gray-800 pb-6 pt-8'>
            <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
              <div className='text-sm text-gray-400'>
                <p>
                  © {currentYear} Portfolio. All rights reserved.
                  <span className='ml-4 text-gray-500'>
                    Made with ❤️ in Seoul
                  </span>
                </p>
              </div>

              <div className='flex items-center space-x-6'>
                <a
                  href='#'
                  className='text-sm text-gray-400 transition-colors duration-200 hover:text-white'
                >
                  개인정보처리방침
                </a>
                <a
                  href='#'
                  className='text-sm text-gray-400 transition-colors duration-200 hover:text-white'
                >
                  이용약관
                </a>
                <button
                  onClick={scrollToTop}
                  className='group flex items-center space-x-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white'
                >
                  <span>맨 위로</span>
                  <div className='flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-white/20'>
                    <svg
                      className='h-3 w-3'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 15l7-7 7 7m-7-7v18'
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 장식적 그래디언트 */}
      <div className='absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' />

      {/* 간소화된 Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-blue-600 text-white shadow-lg transition-colors duration-200 hover:bg-blue-700'
          aria-label='맨 위로 스크롤'
        >
          <svg
            className='mx-auto h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 10l7-7m0 0l7 7m-7-7v18'
            />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
