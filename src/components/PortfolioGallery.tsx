import React, { useCallback, useMemo, useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { AnimatedSection } from './AnimatedSection';

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  // 메모리 최적화: 정적 데이터를 useMemo로 메모이제이션
  const projects = useMemo<Project[]>(() => [
    {
      id: 1,
      title: '네이버페이 BIZ 홈페이지',
      category: 'web',
      image: '/images/projects/naverpay-biz.jpg',
      tech: ['Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Naver Cloud'],
      description: '네이버페이 BIZ 서비스의 공식 홈페이지 및 문의 시스템 개발',
      duration: '3개월',
      features: ['문의 관리 시스템', '백오피스 정산', '탈퇴사유 관리', '네이버 클라우드 인프라'],
      stats: {
        '일일 사용자': '50,000+',
        '시스템 안정성': '99.9%',
        '처리 속도': '200ms',
        '데이터 처리량': '1TB+'
      }
    },
    {
      id: 2,
      title: '러쉬코리아 커머스 플랫폼',
      category: 'web',
      image: '/images/projects/lush-korea.jpg',
      tech: ['Spring Framework', 'MySQL', 'JavaScript', 'JSP', 'AWS'],
      description: '러쉬코리아 자사몰 대규모 유지보수 및 성능 최적화',
      duration: '18개월',
      features: ['이니시스 결제', 'JWT 보안', 'UMS 구축', 'DB 최적화'],
      stats: {
        '월 거래액': '50억+',
        'DB 성능 개선': '40%',
        '보안 강화': '100%',
        '사용자 증가': '25%'
      }
    },
    {
      id: 3,
      title: '모빌리티 서비스 백엔드',
      category: 'mobile',
      image: '/images/projects/mobility.jpg',
      tech: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      description: '아우토크립트 모빌리티 플랫폼의 핵심 백엔드 시스템',
      duration: '4개월',
      features: ['실시간 위치 추적', '경로 최적화', '스케줄링 자동화', '관리자 대시보드'],
      stats: {
        '동시 접속자': '10,000+',
        '실시간 처리': '99.5%',
        'API 응답속도': '150ms',
        '데이터 정확도': '99.8%'
      }
    },
    {
      id: 4,
      title: 'MCP 서버 생태계',
      category: 'ai',
      image: '/images/projects/mcp-servers.jpg',
      tech: ['TypeScript', 'Node.js', 'OpenAI API', 'Chrome API', 'Bybit API'],
      description: 'Claude AI와 연동되는 MCP(Model Context Protocol) 서버들',
      duration: '6개월',
      features: ['Bybit API 연동', 'Chrome 자동화', '통합 관리', 'AI 워크플로우'],
      stats: {
        'API 호출수': '1M+',
        '정확도': '98%',
        '처리 속도': '100ms',
        '서버 가동률': '99.9%'
      }
    },
    {
      id: 5,
      title: '프레시 세일 쇼핑몰',
      category: 'web',
      image: '/images/projects/fresh-sale.jpg',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Vercel'],
      description: '러쉬코리아의 신규 쇼핑몰 플랫폼 개발',
      duration: '3개월',
      features: ['상품 카탈로그', '결제 시스템', '재고 관리', '고객 관리'],
      stats: {
        '전환율': '15%',
        '로딩 속도': '2초',
        '모바일 최적화': '100%',
        '결제 성공률': '99%'
      }
    },
    {
      id: 6,
      title: '부동산 플랫폼 API',
      category: 'web',
      image: '/images/projects/dabang.jpg',
      tech: ['Spring Boot', 'MySQL', 'Elasticsearch', 'Redis', 'AWS'],
      description: '다방(스테이션3) 부동산 플랫폼의 핵심 백엔드 API',
      duration: '15개월',
      features: ['매물 검색', '필터링 시스템', '대용량 데이터 처리', '실시간 업데이트'],
      stats: {
        '매물 수': '100만+',
        '검색 속도': '200ms',
        '데이터 동기화': '실시간',
        '사용자 수': '500만+'
      }
    }
  ], []);

  const categories = useMemo(() => [
    { id: 'all', name: '전체', count: projects.length },
    { id: 'web', name: '웹 서비스', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: '모바일', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', name: 'AI 통합', count: projects.filter(p => p.category === 'ai').length },
  ], [projects]);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
  }, [projects, activeCategory]);

  // 메모리 최적화: 카테고리 변경 핸들러를 useCallback으로 최적화
  const handleCategoryChange = useCallback((category: ProjectCategory | 'all') => {
    setActiveCategory(category);
  }, []);

  return (
    <section id="portfolio" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-blue-950 overflow-hidden">
      {/* 간소화된 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* 가벼운 CSS 그리드 패턴 */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* 섹션 헤더 */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              10년간의 실무 경험
            </span>으로 완성한 혁신적인 프로젝트들을 소개합니다.
          </p>
        </AnimatedSection>

        {/* 카테고리 필터 */}
        <AnimatedSection animation="fadeInUp" delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <AnimatedSection
                key={category.id}
                animation="scaleIn"
                delay={300 + index * 100}
                className="group"
              >
                <button
                  onClick={() => handleCategoryChange(category.id as ProjectCategory | 'all')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500/50 shadow-lg'
                      : 'bg-white/10 backdrop-blur-xl text-gray-300 border-white/20 hover:border-white/40 hover:bg-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {category.name}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {category.count}
                    </span>
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* 프로젝트 그리드 */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="fadeInUp"
                delay={500 + index * 100}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden h-full">
                  {/* 프로젝트 이미지 */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/30 to-purple-600/30">
                              <div class="text-center">
                                <div class="text-4xl mb-4">💻</div>
                                <div class="text-white font-semibold">${project.title}</div>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    
                    {/* 카테고리 배지 */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        {project.category === 'web' ? 'Web' : 
                         project.category === 'mobile' ? 'Mobile' : 
                         project.category === 'ai' ? 'AI' : 'Other'}
                      </span>
                    </div>
                  </div>

                  {/* 프로젝트 정보 */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* 기술 스택 */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-block bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full text-xs border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="inline-block bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 프로젝트 통계 */}
                    {project.stats && (
                      <div className="mb-4">
                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(project.stats).slice(0, 4).map(([key, value], statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-xs text-gray-400 mb-1">{key}</div>
                              <div className="text-sm font-semibold text-cyan-300">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 기간 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>⏱️</span>
                        <span>{project.duration}</span>
                      </div>
                      
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        자세히 보기
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* 프로젝트 요약 통계 */}
        <AnimatedSection animation="fadeInUp" delay={600} className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              프로젝트 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">성과</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30+</div>
                <div className="text-gray-300 text-sm">완료 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">협업 기업</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">도메인 경험</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">년 경력</div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                <span className="text-blue-400 font-semibold">교육, 부동산, 커머스, 핀테크, 모빌리티</span> 
                등 다양한 도메인에서의 풍부한 경험을 바탕으로 
                <span className="text-purple-400 font-semibold"> 최적화된 솔루션</span>을 제공합니다.
              </p>
            </div>
          </div>
        </AnimatedSection>
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
      `}</style>
    </section>
  );
};

export default PortfolioGallery;
