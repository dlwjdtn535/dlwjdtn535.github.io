import React from 'react';
import { AnimatedSection, ParallaxElement } from './AnimatedSection';

export const About: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-500 to-indigo-600' },
        { name: 'Next.js', level: 88, color: 'from-gray-700 to-black' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-cyan-600' },
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Python', level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-800' },
        { name: 'FastAPI', level: 82, color: 'from-teal-400 to-teal-600' },
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'PostgreSQL', level: 88, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Redis', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'MySQL', level: 83, color: 'from-orange-400 to-orange-600' },
      ]
    },
    {
      category: 'DevOps',
      technologies: [
        { name: 'Docker', level: 87, color: 'from-blue-500 to-blue-700' },
        { name: 'AWS', level: 82, color: 'from-orange-400 to-orange-600' },
        { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CI/CD', level: 78, color: 'from-purple-400 to-purple-600' },
      ]
    }
  ];

  const stats = [
    { number: '3+', label: '년 경력', icon: '🚀' },
    { number: '15+', label: '완성된 프로젝트', icon: '💼' },
    { number: '100%', label: '고객 만족도', icon: '⭐' },
    { number: '24/7', label: '지원 가능', icon: '🔧' },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* 배경 장식 */}
      <ParallaxElement speed={0.1} className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      </ParallaxElement>

      <div className="container mx-auto px-4 relative z-10">
        {/* 섹션 헤더 */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                혁신적인 웹 경험
              </span>을 만드는 것이 저의 열정입니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              최신 기술과 창의적인 아이디어를 결합하여 사용자 중심의 솔루션을 개발합니다. 
              끊임없는 학습과 도전을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
            </p>
          </div>
        </AnimatedSection>

        {/* 통계 */}
        <AnimatedSection animation="fadeInUp" delay={200} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="scaleIn"
                delay={300 + index * 100}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* 기술 스택 */}
        <AnimatedSection animation="fadeInUp" delay={400} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              기술 스택 & 전문성
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              다양한 기술 스택을 활용하여 완성도 높은 웹 애플리케이션을 개발합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <AnimatedSection
                key={skillGroup.category}
                animation="fadeInUp"
                delay={500 + groupIndex * 150}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-white/50">
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {skillGroup.category}
                  </h4>
                  
                  <div className="space-y-4">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <AnimatedSection
                        key={tech.name}
                        animation="fadeInLeft"
                        delay={600 + groupIndex * 150 + techIndex * 50}
                        className="group/tech"
                      >
                        <div className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-800 group-hover/tech:text-gray-900 transition-colors duration-200">
                              {tech.name}
                            </span>
                            <span className="text-sm text-gray-600 font-medium">
                              {tech.level}%
                            </span>
                          </div>
                          
                          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                              style={{
                                width: `${tech.level}%`,
                                animation: `slideIn 1s ease-out ${600 + groupIndex * 150 + techIndex * 50}ms both`
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* GitHub 링크 */}
        <AnimatedSection animation="fadeInUp" delay={800} className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-white/50 group">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                GitHub에서 더 많은 프로젝트 보기
              </h4>
              <p className="text-gray-600">
                오픈소스 기여와 개인 프로젝트들을 확인해보세요
              </p>
            </div>
            
            <a
              href="https://github.com/dlwjdtn535"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              방문하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* CSS 애니메이션 정의 */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
