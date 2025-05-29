import React, { useEffect, useMemo, useState } from 'react';

import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
  // 이미지 갤러리 모달 상태
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<{
    images: string[];
    titles: string[];
  }>({ images: [], titles: [] });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isGalleryOpen) return;

      switch (event.key) {
        case 'Escape':
          closeGallery();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, currentImageIndex, currentGallery.images.length]);

  // 갤러리 열기
  const openGallery = (
    images: string[],
    titles: string[],
    startIndex: number = 0
  ) => {
    setCurrentGallery({ images, titles });
    setCurrentImageIndex(startIndex);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  };

  // 갤러리 닫기
  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'unset'; // 스크롤 복원
  };

  // 이전 이미지
  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? currentGallery.images.length - 1 : prev - 1
    );
  };

  // 다음 이미지
  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === currentGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  // 메모리 최적화: 정적 데이터를 useMemo로 메모이제이션
  const skills = useMemo(
    () => [
      {
        category: 'Programming Language',
        technologies: [
          { name: 'Java', level: 95, color: 'from-red-500 to-orange-600' },
          {
            name: 'JavaScript',
            level: 90,
            color: 'from-yellow-400 to-yellow-600',
          },
          {
            name: 'TypeScript',
            level: 88,
            color: 'from-blue-500 to-indigo-600',
          },
          { name: 'Python', level: 82, color: 'from-green-400 to-blue-500' },
          { name: 'Dart', level: 78, color: 'from-cyan-400 to-blue-500' },
          { name: 'Kotlin', level: 75, color: 'from-purple-500 to-purple-700' },
        ],
      },
      {
        category: 'Framework / Library',
        technologies: [
          {
            name: 'Spring Boot',
            level: 95,
            color: 'from-green-500 to-green-700',
          },
          {
            name: 'Spring Framework',
            level: 93,
            color: 'from-green-400 to-green-600',
          },
          { name: 'React 18+', level: 90, color: 'from-blue-400 to-blue-600' },
          { name: 'Next.js 13+', level: 88, color: 'from-gray-700 to-black' },
          { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
          { name: 'NestJS 10+', level: 83, color: 'from-red-500 to-pink-600' },
          { name: 'Flutter', level: 80, color: 'from-cyan-400 to-cyan-600' },
          {
            name: 'Spring WebFlux',
            level: 85,
            color: 'from-green-300 to-green-500',
          },
        ],
      },
      {
        category: 'Server & Database',
        technologies: [
          { name: 'PostgreSQL', level: 92, color: 'from-blue-600 to-blue-800' },
          { name: 'MySQL', level: 90, color: 'from-orange-400 to-orange-600' },
          {
            name: 'Elasticsearch',
            level: 88,
            color: 'from-yellow-500 to-orange-500',
          },
          { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-700' },
          { name: 'Oracle', level: 85, color: 'from-red-600 to-red-800' },
          {
            name: 'Apache Kafka',
            level: 80,
            color: 'from-gray-600 to-gray-800',
          },
          { name: 'InfluxDB', level: 75, color: 'from-blue-400 to-purple-500' },
          { name: 'Tomcat', level: 88, color: 'from-yellow-600 to-orange-600' },
        ],
      },
      {
        category: 'DevOps & Cloud',
        technologies: [
          { name: 'AWS', level: 90, color: 'from-orange-400 to-orange-600' },
          { name: 'Docker', level: 88, color: 'from-blue-500 to-blue-700' },
          { name: 'Jenkins', level: 85, color: 'from-gray-500 to-gray-700' },
          {
            name: 'Terraform',
            level: 82,
            color: 'from-purple-500 to-purple-700',
          },
          { name: 'Git', level: 95, color: 'from-orange-500 to-red-500' },
          { name: 'Maven', level: 88, color: 'from-red-400 to-red-600' },
          { name: 'Gradle', level: 85, color: 'from-blue-500 to-green-500' },
          {
            name: 'Firebase',
            level: 78,
            color: 'from-yellow-500 to-orange-500',
          },
        ],
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
          {
            name: 'Git Kraken',
            level: 78,
            color: 'from-green-400 to-teal-500',
          },
          { name: 'Qodana', level: 75, color: 'from-indigo-500 to-purple-600' },
        ],
      },
      {
        category: 'Specialized & ETC',
        technologies: [
          { name: 'SAP', level: 80, color: 'from-blue-600 to-blue-800' },
          { name: 'OpenAI', level: 85, color: 'from-green-400 to-teal-500' },
          {
            name: 'MCP Protocol',
            level: 82,
            color: 'from-purple-500 to-indigo-600',
          },
          { name: 'Scouter', level: 78, color: 'from-orange-400 to-red-500' },
          { name: 'Whatap', level: 75, color: 'from-cyan-400 to-blue-500' },
          { name: 'YouTrack', level: 73, color: 'from-purple-400 to-pink-500' },
          { name: 'Nelo', level: 70, color: 'from-gray-500 to-gray-700' },
          {
            name: 'CodeWithMe',
            level: 70,
            color: 'from-green-500 to-blue-500',
          },
        ],
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      {
        number: '10+',
        label: '년 실무 경력',
        icon: '💼',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        number: '30+',
        label: '프로젝트 완료',
        icon: '🚀',
        color: 'from-purple-500 to-pink-500',
      },
      {
        number: '15+',
        label: '기업 협업',
        icon: '⭐',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        number: '1M+',
        label: '코드 라인',
        icon: '💻',
        color: 'from-green-500 to-emerald-500',
      },
    ],
    []
  );

  const experiences = useMemo(
    () => [
      {
        period: '2024.07 ~ 2024.10',
        company: '아우토크립트 (이동의 자유)',
        role: '프리랜서',
        description: '자율주행 관련 플랫폼 개발',
        achievements: [
          '주행 경유지 하차, 주행 롤백 개발',
          '어드민 주행상세, 회차지 경로선택 관련 비즈니스 개발',
          '어드민 통계/업무일지 비즈니스 개발',
          '어드민 스케줄링 주행, 승객, 예약 데이터 수집 개발',
        ],
        color: 'from-blue-400 to-cyan-500',
        images: [
          'https://images.unsplash.com/photo-1558618666-f87c5b2d8e15?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
        ],
        imageTitles: [
          '자율주행 관제 시스템',
          '실시간 모니터링 대시보드',
          '주행 데이터 분석',
        ],
        tech: ['Spring Boot', 'React', 'AWS', 'PostgreSQL'],
      },
      {
        period: '2024.07 ~ 2024.08',
        company: '달라컴퍼니 (중고명품 크리)',
        role: '프리랜서',
        description: '중고명품 거래 플랫폼 개발',
        achievements: [
          '견적 등록, 수정, 삭제 화면 & API 개발',
          '견적 입찰, 메인 비지니스 화면 & API 개발',
          '리뷰, 실시간 견적 리스트 화면 & API 개발',
          '앱(iOS & Android) 하이브리드 앱 개발 및 스토어 출시',
          'AWS S3 + CloudFront(CDN) 파일 업로드 인프라 구축',
        ],
        color: 'from-emerald-400 to-green-500',
        images: [
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
        ],
        imageTitles: [
          '명품 거래 플랫폼',
          '실시간 견적 시스템',
          '모바일 앱 인터페이스',
        ],
        tech: ['React Native', 'Spring Boot', 'AWS S3', 'CDN'],
      },
      {
        period: '2022.12 ~ 2024.06',
        company: '러쉬코리아 (유지보수)',
        role: '프리랜서',
        description: '커머스 자사몰 유지보수 및 신규 기능 개발',
        achievements: [
          '커머스 자사몰 사이트 유지보수',
          '이니시스 결제 프로세스 리뉴얼',
          '주문/결제 선물하기, 모바일 상품권 신규 개발',
          '통합 메시지 서버 구축 (UMS)',
          '애플 로그인 신규 개발 및 JWT 전환',
          '러쉬쿠폰 QR 서비스, POS연동 개발',
        ],
        color: 'from-purple-400 to-pink-500',
        images: [
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=800&h=500&fit=crop',
        ],
        imageTitles: ['커머스 메인 페이지', '결제 시스템', 'QR 쿠폰 서비스'],
        tech: ['React', 'Spring Boot', 'JWT', 'POS연동', 'QR'],
      },
      {
        period: '2023.11 ~ 2024.01',
        company: '러쉬코리아 (프레시 세일)',
        role: '프리랜서',
        description: '대용량 트래픽 대응 프레시 세일 전용 쇼핑몰 신규 구축',
        achievements: [
          '백엔드(Spring Boot 3.x), 프론트(React 18+, Next 13+) 병행 개발',
          '주문 결제 프로세스 신규구축 (이니시스 PG 연동), 취소 환불',
          '재고 Redis 연동(대용량 트래픽 대응)',
          '상품 목록, 상세, 검색 및 장바구니 기능',
          'JWT 로그인 (Recoil-Persist)',
          'Jenkins CI/CD 환경 구성',
        ],
        color: 'from-orange-400 to-red-500',
        images: [
          'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop',
        ],
        imageTitles: [
          '프레시 세일 메인',
          '상품 상세 페이지',
          '장바구니 & 결제',
        ],
        tech: ['Next.js 13', 'Spring Boot 3.x', 'Redis', 'Jenkins'],
      },
      {
        period: '2023.10 ~ 2023.11',
        company: '아카랩 (말로해장부)',
        role: '프리랜서',
        description: '운송사 장부관리 앱 신규 개발',
        achievements: [
          'Spring Boot 장부 관리 (등록, 수정, 조회, 삭제) API 개발',
          'Flutter 장부 관리 모바일 화면 개발',
          '월별 통계 달력 조회, 장부 상세 조회, 장부 기록 수정 기능 구현',
          'AWS EC2, RDS 구성',
        ],
        color: 'from-cyan-400 to-blue-500',
        images: [
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        ],
        imageTitles: ['장부 관리 앱', '통계 대시보드', '월별 달력 뷰'],
        tech: ['Flutter', 'Spring Boot', 'AWS EC2', 'RDS'],
      },
      {
        period: '2023.08 ~ 2023.10',
        company: '하이데브 (더블랙레이블)',
        role: '프리랜서',
        description: '라이브 스트리밍 서비스 신규 구축',
        achievements: [
          'AWS SQS, RDS, S3, SSM, SECRETS 연동 개발',
          '라이브 스트리밍 서비스 신규 구축',
          'Mp3 HLS지원 확장자 인코딩 컨슈머 개발',
          'SendBird(영상 스트리밍 서비스) SDK 연동',
          'Terraform, LocalStack 환경구성',
          'S3 업/다운 스트리밍 비즈니스 개발',
        ],
        color: 'from-indigo-400 to-purple-500',
        images: [
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop',
        ],
        imageTitles: [
          '라이브 스트리밍 플랫폼',
          '스트리밍 관리 대시보드',
          '미디어 인코딩 시스템',
        ],
        tech: ['AWS SQS', 'SendBird SDK', 'HLS', 'Terraform'],
      },
      {
        period: '2023.04 ~ 2023.06',
        company: '하이데브 (메타포스트)',
        role: '프리랜서 (PL)',
        description: 'NFT 커뮤니티 플랫폼 개발',
        achievements: [
          'AWS Beanstalk, RDS, S3, SSL 배포환경 초기구성',
          '커뮤니티 공간 관리 개발',
          '유저 팔로우, 맨션 기능 개발',
          'NFT 토큰 조회 API 개발',
          '통합검색 기능 개발',
        ],
        color: 'from-pink-400 to-rose-500',
        images: [
          'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&h=500&fit=crop',
        ],
        imageTitles: [
          'NFT 마켓플레이스',
          '커뮤니티 플랫폼',
          '토큰 조회 시스템',
        ],
        tech: ['AWS Beanstalk', 'NFT API', 'React', 'Spring Boot'],
      },
      {
        period: '2022.07 ~ 2022.11',
        company: '하이트진로 (담보감정시스템)',
        role: '프리랜서 (PL)',
        description: 'ActiveX 기반 레거시 시스템 모던화',
        achievements: [
          'ActiveX 기반 솔루션 & 서비스 분석',
          'Spring Boot 신규 환경 구성',
          'Front/Back End 기존기능 단위 개발',
          'ActiveX 솔루션(Ezgen) ES6 기반으로 엔터프라이즈 개발',
        ],
        color: 'from-yellow-400 to-orange-500',
        images: [
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop',
        ],
        imageTitles: ['담보감정 시스템', '레거시 모던화', '관리자 대시보드'],
        tech: ['Spring Boot', 'ES6', 'Legacy Migration', 'ActiveX'],
      },
      {
        period: '2022.01 ~ 2022.05',
        company: '바바패션 (힙합퍼 백오피스)',
        role: '프리랜서 (PL)',
        description: 'MSA 환경 신규 설계 및 구축',
        achievements: [
          'MSA 환경 신규설계 & 구성',
          'Gitlab CI/CD 환경 구성',
          '테스트 & 빌드, OAS3, RESTDOC API 문서 자동화 구성',
          '로그인, 운영자권한관리, 회원관리 API 개발',
        ],
        color: 'from-teal-400 to-cyan-500',
        images: [
          'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
        ],
        imageTitles: ['백오피스 시스템', 'CI/CD 파이프라인', 'API 문서 자동화'],
        tech: ['MSA', 'GitLab CI/CD', 'OAS3', 'REST DOC'],
      },
      {
        period: '2021.08 ~ 2021.12',
        company: '하나투어',
        role: '프리랜서',
        description: '레거시 통합검색 엔진 리뉴얼',
        achievements: [
          '기존 레거시 통합검색 엔진 (솔트룩스) 분석',
          '신규 통합검색 엔진(Elasticsearch) 으로 리뉴얼 개발',
          '검색 성능 최적화 및 사용자 경험 개선',
        ],
        color: 'from-violet-400 to-purple-500',
        images: [
          'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
        ],
        imageTitles: [
          '통합검색 시스템',
          '검색 결과 페이지',
          '검색 분석 대시보드',
        ],
        tech: ['Elasticsearch', 'Spring Boot', 'Search Optimization'],
      },
      {
        period: '2020.03 ~ 2021.05',
        company: '스테이션3 (다방)',
        role: '대리',
        description: '부동산 플랫폼 백엔드 코어 개발',
        achievements: [
          '부동산 플랫폼 (다방) 백엔드 코어개발',
          '대용량 데이터 처리 시스템 구축',
          '부동산 매물 관리 API 개발',
          '사용자 맞춤 추천 시스템 구현',
        ],
        color: 'from-green-400 to-emerald-500',
        images: [
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=500&fit=crop',
        ],
        imageTitles: ['다방 메인 플랫폼', '매물 검색 시스템', '추천 알고리즘'],
        tech: ['Spring Boot', 'Big Data', 'Recommendation', 'Redis'],
      },
      {
        period: '2018.01 ~ 2020.02',
        company: '나온소프트',
        role: '대리',
        description: '그룹웨어 커스터마이징 및 포털 개발',
        achievements: [
          '그룹웨어 커스터마이징 개발',
          '전자결재 SAP 연동 시스템 구축',
          '그룹웨어 포털 개발',
          '업무 프로세스 자동화 구현',
        ],
        color: 'from-blue-400 to-indigo-500',
        images: [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
        ],
        imageTitles: ['그룹웨어 포털', 'SAP 연동 시스템', '전자결재 시스템'],
        tech: ['SAP 연동', 'Groupware', 'Portal', 'Workflow'],
      },
      {
        period: '2014.02 ~ 2017.05',
        company: '아카넷',
        role: '주임연구원',
        description: '교육 플랫폼 개발 (첫 직장)',
        achievements: [
          'LMS (Learning Management System) 개발',
          '학사시스템 포탈 솔루션 개발',
          '교육 콘텐츠 관리 시스템 구축',
          '학습자 진도 관리 및 평가 시스템 개발',
        ],
        color: 'from-slate-400 to-gray-500',
        images: [
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop',
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop',
        ],
        imageTitles: ['LMS 플랫폼', '학사관리 시스템', '온라인 강의실'],
        tech: ['LMS', 'Education Portal', 'Content Management', 'Java'],
      },
    ],
    []
  );

  return (
    <section
      id='about'
      className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950'
    >
      {/* 간소화된 배경 효과 */}
      <div className='absolute inset-0'>
        <div className='absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl filter' />
        <div
          className='absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-3xl filter'
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className='container relative z-10 mx-auto px-4 py-20'>
        {/* 섹션 헤더 */}
        <AnimatedSection animation='fadeInUp' className='mb-16 text-center'>
          <h2 className='mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
            About Me
          </h2>
          <div className='mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500' />
          <p className='mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl'>
            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent'>
              2014년부터 10년 이상의 엔터프라이즈급 개발 경험
            </span>
            을 바탕으로
            <span className='font-semibold text-emerald-400'>
              {' '}
              교육, 부동산, 커머스, 핀테크, 모빌리티
            </span>{' '}
            등 다양한 도메인에서 확장 가능하고 혁신적인 솔루션을 설계하고
            구현합니다.
          </p>
        </AnimatedSection>

        {/* 통계 카드 */}
        <AnimatedSection animation='fadeInUp' delay={100} className='mb-16'>
          <div className='mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4'>
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation='scaleIn'
                delay={50}
                className='group'
              >
                <div className='relative transform rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-white/40'>
                  <div className='text-center'>
                    <div className='mb-3 text-3xl'>{stat.icon}</div>
                    <div
                      className={`bg-gradient-to-r text-3xl font-bold ${stat.color} mb-2 bg-clip-text text-transparent`}
                    >
                      {stat.number}
                    </div>
                    <div className='text-sm font-medium text-gray-300'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* 경력 타임라인 */}
        <div className='mb-16'>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              Career{' '}
              <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                Journey
              </span>
            </h3>
            <div className='mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500' />
          </div>

          <div className='relative mx-auto max-w-6xl'>
            <div className='absolute left-8 h-full w-1 transform rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 md:left-1/2 md:-translate-x-1/2' />

            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <AnimatedSection
                  key={index}
                  animation={`${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}`}
                  delay={50}
                  className={`relative flex flex-col items-center md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className='absolute left-6 z-10 h-4 w-4 transform rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2' />

                  {/* 경력 정보 카드 */}
                  <div
                    className={`ml-16 w-full md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                  >
                    <div className='transform rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40'>
                      <div className='mb-4'>
                        <h4
                          className={`bg-gradient-to-r text-xl font-bold ${exp.color} mb-2 bg-clip-text text-transparent`}
                        >
                          {exp.role}
                        </h4>
                        <p className='mb-1 text-lg font-semibold text-blue-300'>
                          {exp.company}
                        </p>
                        <p className='text-sm text-gray-300'>
                          {exp.description}
                        </p>
                        <span className='mt-2 inline-block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-xs font-medium text-white'>
                          {exp.period}
                        </span>
                      </div>

                      {/* 기술 스택 */}
                      <div className='mb-4'>
                        <div className='flex flex-wrap gap-2'>
                          {exp.tech.map((technology, techIndex) => (
                            <span
                              key={techIndex}
                              className='rounded-md border border-blue-300/30 bg-white/10 px-2 py-1 text-xs font-medium text-blue-200'
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 주요 성과 */}
                      <div className='space-y-2'>
                        <h5 className='mb-2 text-sm font-semibold text-white'>
                          주요 성과
                        </h5>
                        {exp.achievements
                          .slice(0, 3)
                          .map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className='flex items-start gap-2'
                            >
                              <div className='mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400' />
                              <span className='text-sm leading-relaxed text-gray-300'>
                                {achievement}
                              </span>
                            </div>
                          ))}
                        {exp.achievements.length > 3 && (
                          <div className='mt-2 text-xs text-gray-400'>
                            +{exp.achievements.length - 3}개 추가 성과
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 서비스 이미지 */}
                  <div
                    className={`mt-4 w-full md:mt-0 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}
                  >
                    <div className='group transform rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30'>
                      {/* 메인 이미지 */}
                      <div
                        className='relative cursor-pointer overflow-hidden rounded-lg'
                        onClick={() =>
                          openGallery(exp.images, exp.imageTitles, 0)
                        }
                      >
                        <img
                          src={exp.images[0]}
                          alt={exp.imageTitles[0]}
                          className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                          loading='lazy'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />

                        {/* 갤러리 아이콘 */}
                        <div className='absolute right-3 top-3'>
                          <div className='flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm'>
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
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                              />
                            </svg>
                            {exp.images.length}
                          </div>
                        </div>

                        <div className='absolute bottom-3 left-3 right-3'>
                          <p className='rounded bg-black/30 px-2 py-1 text-sm font-medium text-white backdrop-blur-sm'>
                            {exp.imageTitles[0]}
                          </p>
                        </div>
                      </div>

                      {/* 썸네일 이미지들 */}
                      <div className='mt-3 flex gap-2 overflow-x-auto'>
                        {exp.images.slice(1).map((image, imageIndex) => (
                          <div
                            key={imageIndex + 1}
                            className='h-12 w-16 flex-shrink-0 cursor-pointer overflow-hidden rounded border-2 border-white/20 transition-all duration-300 hover:border-white/60'
                            onClick={() =>
                              openGallery(
                                exp.images,
                                exp.imageTitles,
                                imageIndex + 1
                              )
                            }
                          >
                            <img
                              src={image}
                              alt={exp.imageTitles[imageIndex + 1]}
                              className='h-full w-full object-cover'
                              loading='lazy'
                            />
                          </div>
                        ))}
                      </div>

                      {/* 프로젝트 요약 정보 */}
                      <div className='mt-3 flex items-center justify-between text-xs text-gray-400'>
                        <span>
                          프로젝트 기간:{' '}
                          {exp.period
                            .split(' ~ ')
                            .map(date => date.slice(-5))
                            .join(' ~ ')}
                        </span>
                        <span className='rounded bg-white/10 px-2 py-1'>
                          {exp.role === '프리랜서'
                            ? '외주'
                            : exp.role === '프리랜서 (PL)'
                              ? 'PL'
                              : '정규직'}
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* 간소화된 기술 스택 */}
        <AnimatedSection animation='fadeInUp' delay={200} className='mb-16'>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              Tech{' '}
              <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                Stack
              </span>
            </h3>
            <div className='mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500' />
          </div>

          <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {skills.map((skillGroup, groupIndex) => (
              <AnimatedSection
                key={skillGroup.category}
                animation='fadeInUp'
                delay={100}
                className='group'
              >
                <div className='h-full transform rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/30'>
                  <h4 className='mb-6 text-center text-lg font-bold text-white'>
                    {skillGroup.category}
                  </h4>

                  <div className='space-y-4'>
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <div key={tech.name} className='relative'>
                        <div className='mb-2 flex items-center justify-between'>
                          <span className='text-sm font-medium text-gray-200'>
                            {tech.name}
                          </span>
                          <span className='rounded-full bg-white/10 px-2 py-1 text-xs text-gray-400'>
                            {tech.level}%
                          </span>
                        </div>

                        <div className='relative h-2 overflow-hidden rounded-full bg-white/10'>
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
        <AnimatedSection
          animation='fadeInUp'
          delay={300}
          className='text-center'
        >
          <div className='mx-auto max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/30'>
            <div className='mb-8 flex items-center justify-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-gray-700 to-gray-900'>
                <svg
                  className='h-8 w-8 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
                </svg>
              </div>

              <div className='text-left'>
                <h4 className='mb-2 text-2xl font-bold text-white'>
                  GitHub & MCP 서버
                </h4>
                <p className='text-gray-300'>
                  최신 AI 기술과 연계된 오픈소스 프로젝트들
                </p>
              </div>

              <a
                href='https://github.com/dlwjdtn535'
                target='_blank'
                rel='noopener noreferrer'
                className='flex transform items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg'
              >
                GitHub 방문
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {[
                {
                  title: 'Bybit Server',
                  description: 'Bybit 거래소 API 연동 서버',
                  badge:
                    'https://smithery.ai/badge/@dlwjdtn535/mcp-bybit-server',
                  githubUrl: 'https://github.com/dlwjdtn535/mcp-bybit-server',
                  tags: ['Crypto API', 'Trading'],
                  icon: '🪙',
                },
                {
                  title: 'Chrome Server',
                  description: 'Chrome 브라우저 자동화 서버',
                  badge:
                    'https://smithery.ai/badge/@dlwjdtn535/mcp-chrome-server',
                  githubUrl: 'https://github.com/dlwjdtn535/mcp-chrome-server',
                  tags: ['Automation', 'Browser'],
                  icon: '🌐',
                },
                {
                  title: 'Chrome Integration',
                  description: 'Chrome 고급 통합 기능 서버',
                  badge:
                    'https://smithery.ai/badge/@dlwjdtn535/mcp-chrome-integration',
                  githubUrl:
                    'https://github.com/dlwjdtn535/mcp-chrome-integration',
                  tags: ['Integration', 'Advanced'],
                  icon: '🔗',
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className='rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/30'
                >
                  <div className='text-center'>
                    <div className='mb-2 text-2xl'>{project.icon}</div>
                    <h6 className='mb-2 font-bold text-white'>
                      {project.title}
                    </h6>
                    <p className='mb-3 text-sm text-gray-300'>
                      {project.description}
                    </p>

                    <img
                      src={project.badge}
                      alt={`MCP ${project.title}`}
                      className='mx-auto mb-3 h-5'
                    />

                    <div className='mb-3 flex flex-wrap justify-center gap-1'>
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='rounded-full bg-white/10 px-2 py-1 text-xs text-gray-300'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xs text-gray-400 transition-colors duration-300 hover:text-blue-300'
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

      {/* 이미지 갤러리 모달 */}
      {isGalleryOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm'
          onClick={closeGallery}
        >
          <div
            className='relative mx-auto w-full max-w-5xl'
            onClick={e => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeGallery}
              className='absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors duration-300 hover:bg-black/70'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* 이전 버튼 */}
            <button
              onClick={prevImage}
              className='absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white transition-colors duration-300 hover:bg-black/70'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {/* 다음 버튼 */}
            <button
              onClick={nextImage}
              className='absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white transition-colors duration-300 hover:bg-black/70'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>

            {/* 메인 이미지 */}
            <div className='rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'>
              <div className='relative'>
                <img
                  src={currentGallery.images[currentImageIndex]}
                  alt={currentGallery.titles[currentImageIndex]}
                  className='h-auto max-h-[70vh] w-full rounded-lg object-contain'
                />

                {/* 이미지 정보 */}
                <div className='absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent p-4'>
                  <h3 className='mb-1 text-lg font-semibold text-white'>
                    {currentGallery.titles[currentImageIndex]}
                  </h3>
                  <p className='text-sm text-gray-300'>
                    {currentImageIndex + 1} / {currentGallery.images.length}
                  </p>
                </div>
              </div>

              {/* 썸네일 네비게이션 */}
              <div className='mt-4 flex justify-center gap-2 overflow-x-auto'>
                {currentGallery.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-12 w-16 flex-shrink-0 overflow-hidden rounded border-2 transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'border-blue-400 opacity-100'
                        : 'border-white/30 opacity-60 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={image}
                      alt={currentGallery.titles[index]}
                      className='h-full w-full object-cover'
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
