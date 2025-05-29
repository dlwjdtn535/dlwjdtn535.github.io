import React, { useMemo } from 'react';
import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
  // 메모리 최적화: 정적 데이터를 useMemo로 메모이제이션
  const skills = useMemo(() => [
    {
      category: 'Programming Language',
      technologies: [
        { name: 'Java', level: 95, color: 'from-red-500 to-orange-600' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-500 to-indigo-600' },
        { name: 'Python', level: 82, color: 'from-green-400 to-blue-500' },
        { name: 'Dart', level: 78, color: 'from-cyan-400 to-blue-500' },
        { name: 'Kotlin', level: 75, color: 'from-purple-500 to-purple-700' },
      ]
    },
    {
      category: 'Framework / Library',
      technologies: [
        { name: 'Spring Boot', level: 95, color: 'from-green-500 to-green-700' },
        { name: 'Spring Framework', level: 93, color: 'from-green-400 to-green-600' },
        { name: 'React 18+', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Next.js 13+', level: 88, color: 'from-gray-700 to-black' },
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'NestJS 10+', level: 83, color: 'from-red-500 to-pink-600' },
        { name: 'Flutter', level: 80, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Spring WebFlux', level: 85, color: 'from-green-300 to-green-500' },
      ]
    },
    {
      category: 'Server & Database',
      technologies: [
        { name: 'PostgreSQL', level: 92, color: 'from-blue-600 to-blue-800' },
        { name: 'MySQL', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Elasticsearch', level: 88, color: 'from-yellow-500 to-orange-500' },
        { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-700' },
        { name: 'Oracle', level: 85, color: 'from-red-600 to-red-800' },
        { name: 'Apache Kafka', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'InfluxDB', level: 75, color: 'from-blue-400 to-purple-500' },
        { name: 'Tomcat', level: 88, color: 'from-yellow-600 to-orange-600' },
      ]
    },
    {
      category: 'DevOps & Cloud',
      technologies: [
        { name: 'AWS', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'Docker', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Jenkins', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'Terraform', level: 82, color: 'from-purple-500 to-purple-700' },
        { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Maven', level: 88, color: 'from-red-400 to-red-600' },
        { name: 'Gradle', level: 85, color: 'from-blue-500 to-green-500' },
        { name: 'Firebase', level: 78, color: 'from-yellow-500 to-orange-500' },
      ]
    },
    {
      category: 'Tools & Environment',
      technologies: [
        { name: 'Linux', level: 90, color: 'from-gray-700 to-black' },
        { name: 'Windows', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'MacOS', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'Jira', level: 83, color: 'from-blue-600 to-blue-800' },
        { name: 'Confluence', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'Slack', level: 85, color: 'from-purple-500 to-pink-500' },
        { name: 'Git Kraken', level: 78, color: 'from-green-400 to-teal-500' },
        { name: 'Qodana', level: 75, color: 'from-indigo-500 to-purple-600' },
      ]
    },
    {
      category: 'Specialized & ETC',
      technologies: [
        { name: 'SAP', level: 80, color: 'from-blue-600 to-blue-800' },
        { name: 'OpenAI', level: 85, color: 'from-green-400 to-teal-500' },
        { name: 'MCP Protocol', level: 82, color: 'from-purple-500 to-indigo-600' },
        { name: 'Scouter', level: 78, color: 'from-orange-400 to-red-500' },
        { name: 'Whatap', level: 75, color: 'from-cyan-400 to-blue-500' },
        { name: 'YouTrack', level: 73, color: 'from-purple-400 to-pink-500' },
        { name: 'Nelo', level: 70, color: 'from-gray-500 to-gray-700' },
        { name: 'CodeWithMe', level: 70, color: 'from-green-500 to-blue-500' },
      ]
    }
  ], []);

  const stats = useMemo(() => [
    { number: '10+', label: '년 실무 경력', icon: '💼', color: 'from-blue-500 to-cyan-500' },
    { number: '30+', label: '프로젝트 완료', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { number: '15+', label: '기업 협업', icon: '⭐', color: 'from-yellow-500 to-orange-500' },
    { number: '500K+', label: '코드 라인', icon: '💻', color: 'from-green-500 to-emerald-500' },
  ], []);

  const experiences = useMemo(() => [
    {
      period: '2025.01 - 현재',
      company: '지음소프트',
      position: 'Senior Developer',
      description: '네이버페이 BIZ 서비스 개발',
      achievements: [
        '네이버페이 비즈 홈페이지 문의 시스템 신규 개발',
        '네이버 클라우드 플랫폼 인프라 구성',
        '백오피스 정산 및 탈퇴사유 관리 시스템 개발'
      ],
      color: 'from-green-400 to-blue-500'
    },
    {
      period: '2024.07 - 2024.10',
      company: '아우토크립트',
      position: 'Tech Lead',
      description: '모빌리티 서비스 백엔드 개발',
      achievements: [
        '주행 경유지 하차 및 롤백 시스템 개발',
        '어드민 주행상세, 회차지 경로선택 비즈니스 로직',
        '스케줄링 데이터 수집 자동화 시스템 구축'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      period: '2022.12 - 2024.06',
      company: '러쉬코리아',
      position: 'Full Stack Developer',
      description: '커머스 자사몰 대규모 유지보수',
      achievements: [
        '이니시스 결제 프로세스 리뉴얼',
        'JWT 보안 강화 및 UMS 구축',
        'Slow Query 튜닝으로 DB 성능 40% 개선'
      ],
      color: 'from-orange-400 to-red-500'
    },
    {
      period: '2020.03 - 2021.05',
      company: '스테이션3 (다방)',
      position: 'Backend Developer',
      description: '부동산 플랫폼 핵심 시스템 개발',
      achievements: [
        '부동산 매물 관리 핵심 API 개발',
        '매물 검색 및 필터링 시스템 최적화',
        '대용량 데이터 처리 배치 시스템 구축'
      ],
      color: 'from-cyan-400 to-blue-500'
    }
  ], []);

  const demoProjects = [
    {
      title: 'E-Commerce Platform',
      description: '대용량 트래픽 대응 커머스 플랫폼',
      tech: ['Spring Boot', 'React', 'Redis', 'AWS'],
      image: '/api/placeholder/400/300',
      demoUrl: '#',
      features: ['실시간 재고 관리', '결제 시스템', '추천 알고리즘'],
      complexity: 'High',
      duration: '3-4개월'
    },
    {
      title: 'FinTech Dashboard',
      description: '금융 데이터 실시간 대시보드',
      tech: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
      image: '/api/placeholder/400/300',
      demoUrl: '#',
      features: ['실시간 차트', '알림 시스템', '데이터 분석'],
      complexity: 'Medium',
      duration: '2-3개월'
    },
    {
      title: 'Mobile App (Flutter)',
      description: '크로스플랫폼 모바일 애플리케이션',
      tech: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
      image: '/api/placeholder/400/300',
      demoUrl: '#',
      features: ['실시간 채팅', '푸시 알림', '오프라인 동기화'],
      complexity: 'Medium',
      duration: '2-3개월'
    },
    {
      title: 'AI Integration System',
      description: 'OpenAI & MCP 통합 솔루션',
      tech: ['Python', 'OpenAI', 'MCP', 'FastAPI'],
      image: '/api/placeholder/400/300',
      demoUrl: '#',
      features: ['AI 자동화', 'MCP 서버', '데이터 처리'],
      complexity: 'High',
      duration: '3-4개월'
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 overflow-hidden">
      {/* 간소화된 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* 섹션 헤더 */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              2014년부터 10년 이상의 실무 경험
            </span>을 바탕으로 혁신적인 웹 서비스를 개발합니다.
          </p>
        </AnimatedSection>

        {/* 통계 카드 */}
        <AnimatedSection animation="fadeInUp" delay={200} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="scaleIn"
                delay={300 + index * 100}
                className="group"
              >
                <div className="relative bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  <div className="text-center">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* 경력 타임라인 */}
        <AnimatedSection animation="fadeInUp" delay={400} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Career <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInLeft"
                  delay={500 + index * 150}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white z-10" />
                  
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-4">
                        <h4 className={`text-xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                          {exp.position}
                        </h4>
                        <p className="text-lg text-blue-300 font-semibold mb-1">{exp.company}</p>
                        <p className="text-gray-300 text-sm">{exp.description}</p>
                        <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium mt-2">
                          {exp.period}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 간소화된 기술 스택 */}
        <AnimatedSection animation="fadeInUp" delay={600} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stack</span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skillGroup, groupIndex) => (
              <AnimatedSection
                key={skillGroup.category}
                animation="fadeInUp"
                delay={700 + groupIndex * 100}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <h4 className="text-lg font-bold text-white mb-6 text-center">
                    {skillGroup.category}
                  </h4>
                  
                  <div className="space-y-4">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <div key={tech.name} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-200 text-sm">{tech.name}</span>
                          <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                            {tech.level}%
                          </span>
                        </div>
                        
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* MCP 서버 & GitHub */}
        <AnimatedSection animation="fadeInUp" delay={800} className="text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              
              <div className="text-left">
                <h4 className="text-2xl font-bold text-white mb-2">GitHub & MCP 서버</h4>
                <p className="text-gray-300">최신 AI 기술과 연계된 오픈소스 프로젝트들</p>
              </div>
              
              <a
                href="https://github.com/dlwjdtn535"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                GitHub 방문
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Bybit Server',
                  description: 'Bybit 거래소 API 연동 서버',
                  badge: 'https://smithery.ai/badge/@dlwjdtn535/mcp-bybit-server',
                  githubUrl: 'https://github.com/dlwjdtn535/mcp-bybit-server',
                  tags: ['Crypto API', 'Trading'],
                  icon: '🪙'
                },
                {
                  title: 'Chrome Server',
                  description: 'Chrome 브라우저 자동화 서버',
                  badge: 'https://smithery.ai/badge/@dlwjdtn535/mcp-chrome-server',
                  githubUrl: 'https://github.com/dlwjdtn535/mcp-chrome-server',
                  tags: ['Automation', 'Browser'],
                  icon: '🌐'
                },
                {
                  title: 'Chrome Integration',
                  description: 'Chrome 고급 통합 기능 서버',
                  badge: 'https://smithery.ai/badge/@dlwjdtn535/mcp-chrome-integration',
                  githubUrl: 'https://github.com/dlwjdtn535/mcp-chrome-integration',
                  tags: ['Integration', 'Advanced'],
                  icon: '🔗'
                }
              ].map((project, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{project.icon}</div>
                    <h6 className="font-bold text-white mb-2">{project.title}</h6>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    
                    <img 
                      src={project.badge} 
                      alt={`MCP ${project.title}`} 
                      className="h-5 mx-auto mb-3"
                    />
                    
                    <div className="flex flex-wrap gap-1 justify-center mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      GitHub 보기 →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
