import React, { useEffect, useState } from 'react';
import { AnimatedSection, RevealOnScroll } from './AnimatedSection';

import type { CategoryFilter, PortfolioGalleryProps, Project } from '@/types';

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  className = '',
  initialCategory = 'all',
  projects: customProjects,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const defaultProjects: Project[] = [
    {
      id: 1,
      title: 'E-커머스 플랫폼',
      category: 'web',
      image: '/img/portfolio/cabin.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      description: '온라인 쇼핑몰 풀스택 개발 (결제 시스템, 관리자 패널 포함)',
      duration: '3개월',
      features: [
        '반응형 디자인',
        '결제 시스템',
        '관리자 패널',
        'SEO 최적화',
        '실시간 재고 관리',
      ],
    },
    {
      id: 2,
      title: '모바일 앱 개발',
      category: 'mobile',
      image: '/img/portfolio/cake.png',
      tech: ['React Native', 'Firebase', 'Redux'],
      description: 'iOS/Android 크로스플랫폼 앱 개발',
      duration: '2개월',
      features: [
        '크로스플랫폼',
        '실시간 알림',
        '오프라인 지원',
        '소셜 로그인',
        '위치 기반 서비스',
      ],
    },
    {
      id: 3,
      title: '포트폴리오 웹사이트',
      category: 'web',
      image: '/img/portfolio/circus.png',
      tech: ['Jekyll', 'TypeScript', 'Tailwind CSS'],
      description: '반응형 포트폴리오 사이트 디자인 및 개발',
      duration: '1개월',
      features: [
        '반응형 디자인',
        'SEO 최적화',
        '빠른 로딩',
        '모던 UI',
        '다크 모드',
      ],
    },
    {
      id: 4,
      title: 'AI 챗봇 서비스',
      category: 'ai',
      image: '/img/portfolio/game.png',
      tech: ['Python', 'OpenAI API', 'Flask', 'Docker'],
      description: '고객 문의 자동 응답 시스템 구축',
      duration: '2개월',
      features: [
        '자연어 처리',
        '학습 기능',
        'API 연동',
        '다국어 지원',
        '감정 분석',
      ],
    },
    {
      id: 5,
      title: '데이터 대시보드',
      category: 'web',
      image: '/img/portfolio/safe.png',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      description: '실시간 데이터 시각화 대시보드',
      duration: '2.5개월',
      features: [
        '실시간 업데이트',
        '인터랙티브 차트',
        '데이터 필터링',
        '엑셀 내보내기',
        '알림 시스템',
      ],
    },
    {
      id: 6,
      title: '블록체인 DApp',
      category: 'blockchain',
      image: '/img/portfolio/submarine.png',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      description: '탈중앙화 애플리케이션 개발',
      duration: '4개월',
      features: [
        '스마트 컨트랙트',
        '메타마스크 연동',
        'IPFS 저장',
        'DeFi 기능',
        'NFT 마켓플레이스',
      ],
    },
  ];

  const projects = customProjects || defaultProjects;

  const categories: CategoryFilter[] = [
    { id: 'all', name: '전체', count: projects.length },
    {
      id: 'web',
      name: '웹 개발',
      count: projects.filter(p => p.category === 'web').length,
    },
    {
      id: 'mobile',
      name: '모바일',
      count: projects.filter(p => p.category === 'mobile').length,
    },
    {
      id: 'ai',
      name: 'AI/ML',
      count: projects.filter(p => p.category === 'ai').length,
    },
    {
      id: 'blockchain',
      name: '블록체인',
      count: projects.filter(p => p.category === 'blockchain').length,
    },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project): void => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    setSelectedProject(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  // 컴포넌트 언마운트 시 body overflow 복원
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getCategoryIcon = (categoryId: string): string => {
    const icons: Record<string, string> = {
      all: '📁',
      web: '🌐',
      mobile: '📱',
      ai: '🤖',
      blockchain: '⛓️',
    };
    return icons[categoryId] || '📁';
  };

  const getTechColor = (tech: string): string => {
    const colors: Record<string, string> = {
      React: 'bg-blue-100 text-blue-800',
      'Vue.js': 'bg-green-100 text-green-800',
      'Node.js': 'bg-green-100 text-green-800',
      Python: 'bg-yellow-100 text-yellow-800',
      TypeScript: 'bg-blue-100 text-blue-800',
      JavaScript: 'bg-yellow-100 text-yellow-800',
      MongoDB: 'bg-green-100 text-green-800',
      PostgreSQL: 'bg-blue-100 text-blue-800',
      Firebase: 'bg-orange-100 text-orange-800',
      Docker: 'bg-blue-100 text-blue-800',
      AWS: 'bg-orange-100 text-orange-800',
      'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
      Solidity: 'bg-purple-100 text-purple-800',
      'Web3.js': 'bg-purple-100 text-purple-800',
      Ethereum: 'bg-purple-100 text-purple-800',
    };
    return colors[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* 섹션 헤더 */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            혁신적인 기술과 창의적인 아이디어로 만든 프로젝트들을 소개합니다.
            <br />
            각 프로젝트는 사용자 경험과 기술적 완성도에 중점을 두고 개발되었습니다.
          </p>
        </AnimatedSection>

        {/* 카테고리 필터 */}
        <AnimatedSection animation="fadeInUp" delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <RevealOnScroll key={category.id} className={`transition-all duration-300`} threshold={0.1}>
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105 transform ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category.name}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id 
                        ? 'bg-white/20' 
                        : 'bg-gray-100 group-hover:bg-blue-100'
                    }`}>
                      {category.count}
                    </span>
                  </span>
                  {selectedCategory !== category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  )}
                </button>
              </RevealOnScroll>
            ))}
          </div>
        </AnimatedSection>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fadeInUp"
              delay={index * 100}
              duration="duration-700"
              className="group"
            >
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* 프로젝트 이미지 */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f3f4f6"/>
                          <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle" dy=".3em">
                            ${project.title}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* 프로젝트 정보 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* 액션 버튼들 */}
                  <div className="flex gap-2">
                    <button
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      자세히 보기
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* 프로젝트가 없을 때 */}
        {filteredProjects.length === 0 && (
          <AnimatedSection animation="fadeIn" className="text-center py-20">
            <div className="text-gray-500 text-xl">
              해당 카테고리에 프로젝트가 없습니다.
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* 모달 */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
              >
                ✕
              </button>
            </div>

            {/* 모달 콘텐츠 */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-4">
                    {selectedProject.description}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold whitespace-nowrap">
                  {selectedProject.duration}
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                {selectedProject.features.join('\n')}
              </p>

              {/* 기술 스택 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">사용 기술</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-white font-semibold ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(selectedProject);
                  }}
                >
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
