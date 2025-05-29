import React, { useState } from 'react';
import { AnimatedSection, ParallaxElement } from './AnimatedSection';

import type {
    BudgetRange,
    ContactFormData,
    ContactFormProps,
    FormChangeHandler,
    FormStatus,
    FormSubmitHandler,
    ProjectType,
} from '@/types';

const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  onSubmitSuccess,
  onSubmitError,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: '웹 애플리케이션 개발',
    budget: '협의 후 결정',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const projectTypes: ProjectType[] = [
    '웹 애플리케이션 개발',
    'API 서버 개발',
    '시스템 아키텍처 설계',
    '레거시 시스템 개선',
    '성능 최적화',
    '기술 컨설팅',
    '기타',
  ];

  const budgetRanges: BudgetRange[] = [
    '1,000만원 미만',
    '1,000-3,000만원',
    '3,000-5,000만원',
    '5,000만원 이상',
    '협의 후 결정',
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = '성함을 입력해주세요.';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!formData.message.trim()) {
      newErrors.message = '프로젝트 내용을 입력해주세요.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '프로젝트 내용을 10자 이상 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange: FormChangeHandler = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // 실시간 에러 제거
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit: FormSubmitHandler = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: '메시지를 전송 중입니다...' });

    try {
      const response = await fetch('https://formspree.io/f/xzzrlnkd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: '새로운 프로젝트 제안',
          _language: 'ko',
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.',
        });
        setFormData({
          name: '',
          email: '',
          projectType: '웹 애플리케이션 개발',
          budget: '협의 후 결정',
          message: '',
        });
        onSubmitSuccess?.();
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '메시지 전송에 실패했습니다. 다시 시도해주세요.',
      });
      onSubmitError?.(error as Error);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: '이메일',
      value: 'dlwjdtn535@gmail.com',
      link: 'mailto:dlwjdtn535@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'github.com/dlwjdtn535',
      link: 'https://github.com/dlwjdtn535',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6m10 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m12 0v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8" />
        </svg>
      ),
      title: '경력',
      value: '3년+ 실무 경험',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* 배경 효과 */}
      <ParallaxElement speed={0.1} className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </ParallaxElement>

      {/* 움직이는 배경 그리드 */}
      <ParallaxElement speed={0.05} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </ParallaxElement>

      <div className="container mx-auto px-4 relative z-10">
        {/* 섹션 헤더 */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            새로운 프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요.
            <br />
            <span className="text-blue-300">함께 멋진 것을 만들어봅시다!</span>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 연락처 정보 */}
          <AnimatedSection animation="fadeInLeft" delay={200} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                연락처 정보
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                프로젝트 문의, 협업 제안, 또는 단순한 인사말까지 
                모든 메시지를 환영합니다. 보통 24시간 이내에 응답드립니다.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <AnimatedSection
                  key={info.title}
                  animation="fadeInLeft"
                  delay={300 + index * 100}
                  className="group"
                >
                  <a
                    href={info.link}
                    className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:bg-white/15"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* 소셜 링크 */}
            <AnimatedSection animation="fadeInLeft" delay={600} className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                소셜 미디어
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '📱', url: 'https://github.com/dlwjdtn535' },
                  { name: 'LinkedIn', icon: '💼', url: '#' },
                  { name: 'Twitter', icon: '🐦', url: '#' },
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* 연락 폼 */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                메시지 보내기
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="hong@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      메시지 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="프로젝트에 대해 자세히 설명해주세요..."
                    />
                  </div>
                </div>

                {/* 상태 메시지 */}
                {status.type !== 'idle' && (
                  <AnimatedSection animation="fadeIn" className="rounded-xl p-4 border">
                    <div className={`flex items-center space-x-2 ${
                      status.type === 'success' 
                        ? 'text-green-300 bg-green-500/10 border-green-500/30' 
                        : status.type === 'error'
                        ? 'text-red-300 bg-red-500/10 border-red-500/30'
                        : 'text-blue-300 bg-blue-500/10 border-blue-500/30'
                    }`}>
                      {status.type === 'loading' && (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                      )}
                      {status.type === 'success' && <span>✅</span>}
                      {status.type === 'error' && <span>❌</span>}
                      <span className="text-sm">{status.message}</span>
                    </div>
                  </AnimatedSection>
                )}

                {/* 전송 버튼 */}
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>전송 중...</span>
                    </>
                  ) : (
                    <>
                      <span>메시지 전송</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
