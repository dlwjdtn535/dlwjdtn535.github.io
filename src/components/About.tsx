import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { AnimatedSection } from './AnimatedSection';

export const About: React.FC = () => {
  // 이미지 갤러리 모달 상태
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [isGalleryAnimating, setIsGalleryAnimating] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<{
    images: string[];
    titles: string[];
  }>({ images: [], titles: [] });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 갤러리 열기
  const openGallery = useCallback(
    (images: string[], titles: string[], startIndex: number = 0) => {
      setCurrentGallery({ images, titles });
      setCurrentImageIndex(startIndex);
      setIsGalleryOpen(true);
      document.body.style.overflow = 'hidden'; // 스크롤 방지

      // 애니메이션을 위한 순차적 실행
      setTimeout(() => {
        setIsGalleryVisible(true);
        setIsGalleryAnimating(true);
      }, 10);
    },
    []
  );

  // 갤러리 닫기
  const closeGallery = useCallback(() => {
    setIsGalleryAnimating(false);
    setIsGalleryVisible(false);

    // 애니메이션이 끝난 후 모달 완전히 닫기
    setTimeout(() => {
      setIsGalleryOpen(false);
      document.body.style.overflow = 'unset'; // 스크롤 복원
    }, 300);
  }, []);

  // 이전 이미지
  const prevImage = useCallback(() => {
    setCurrentImageIndex(prev =>
      prev === 0 ? currentGallery.images.length - 1 : prev - 1
    );
  }, [currentGallery.images.length]);

  // 다음 이미지
  const nextImage = useCallback(() => {
    setCurrentImageIndex(prev =>
      prev === currentGallery.images.length - 1 ? 0 : prev + 1
    );
  }, [currentGallery.images.length]);

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
  }, [isGalleryOpen, closeGallery, prevImage, nextImage]);

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
        period: '2014.02 ~ 2017.05',
        company: '아카넷',
        role: '주임연구원',
        description: '교육 플랫폼 개발 및 학사 시스템 구축',
        achievements: [
          'LMS (Learning Management System) 개발',
          '학사시스템 포탈 솔루션 개발',
          '교육 콘텐츠 관리 시스템 구축',
          '학습자 진도 관리 및 평가 시스템 개발',
        ],
        color: 'from-slate-400 to-gray-500',
        images: [
          '/public/images/projects/acanet_1.png',
          '/public/images/projects/acanet_2.png',
        ],
        imageTitles: ['LMS 플랫폼', '학사관리 시스템'],
        tech: ['LMS', 'Education Portal', 'Content Management', 'Java'],
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
          '/public/images/projects/naon_1.png',
          '/public/images/projects/naon_2.png',
          '/public/images/projects/naon_3.png',
          '/public/images/projects/naon_4.png',
          '/public/images/projects/naon_5.png',
        ],
        imageTitles: [
          '포털 메인',
          '스마트 워크',
          '캘린더',
          '근태 관리',
          '전자 결재',
        ],
        tech: ['SAP 연동', 'Groupware', 'Portal', 'Workflow'],
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
          '/public/images/projects/dabang_2.png',
          '/public/images/projects/dabang_1.png',
          '/public/images/projects/dabang_3.png',
          '/public/images/projects/dabang_4.png',
        ],
        imageTitles: [
          '매물 검색 1',
          '매물 검색 2',
          '매물 즐겨찾기 영역',
          '매물 추천 및 통계',
        ],
        tech: ['Spring Boot', 'React', 'Recommendation', 'Elasticsearch'],
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
          '/public/images/projects/tour_1.png',
          '/public/images/projects/tour_2.png',
          '/public/images/projects/tour_3.png',
        ],
        imageTitles: [
          '통합검색 시스템',
          '검색 결과 페이지 1',
          '검색 결과 페이지 2',
        ],
        tech: ['Elasticsearch', 'Spring Boot', 'Search Optimization'],
      },
      {
        period: '2022.01 ~ 2022.05',
        company: '바바패션 (힙합퍼 백오피스)',
        role: '프리랜서 (PL)',
        description: 'MSA 환경 신규 설계 및 구축',
        achievements: [
          'MSA 환경 신규설계 & 구성',
          'Oauth2.0, JWT 기반 인증/인가 시스템 개발',
          'Gitlab CI/CD 환경 구성',
          '테스트 & 빌드, OAS3, RESTDOC API 문서 자동화 구성',
          '로그인, 운영자권한관리, 회원관리 API 개발',
        ],
        color: 'from-teal-400 to-cyan-500',
        images: ['/public/images/projects/hiphoper_1.png'],
        imageTitles: ['힙합퍼 메인 페이지'],
        tech: ['MSA', 'GitLab CI/CD', 'OAS3', 'REST DOC'],
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
        imageTitles: ['담보감정 시스템', '담보감정 시스템', '담보감정 시스템'],
        tech: ['Spring Boot', 'ES6', 'Legacy Migration', 'ActiveX'],
      },
      {
        period: '2023.04 ~ 2023.06',
        company: '하이데브 (메타포스트)',
        role: '프리랜서',
        description: 'NFT 커뮤니티 플랫폼 개발',
        achievements: [
          'AWS Beanstalk, RDS, S3, SSL 배포환경 초기구성',
          '커뮤니티 & 유니버스 공간 관리 개발',
          '유저 팔로우, 맨션 기능 개발',
          'NFT 토큰 조회 API 개발',
          '통합검색 기능 개발',
        ],
        color: 'from-pink-400 to-rose-500',
        images: [
          '/public/images/projects/metapost_4.png',
          '/public/images/projects/metapost_1.png',
          '/public/images/projects/metapost_2.png',
          '/public/images/projects/metapost_3.png',
          '/public/images/projects/metapost_5.png',
          '/public/images/projects/metapost_6.png',
          '/public/images/projects/metapost_7.png',
          '/public/images/projects/metapost_8.png',
          '/public/images/projects/metapost_9.png',
        ],
        imageTitles: [
          '메인 페이지',
          '검색 결과',
          '캘린더',
          '포스트',
          '유니버스',
          '커뮤니티',
          '커뮤니티',
          '유저 정보',
          '이벤트',
        ],
        tech: ['AWS Beanstalk', 'NFT API', 'React', 'Spring Boot'],
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
          '/public/images/projects/theblack_1.png',
          '/public/images/projects/theblack_2.png',
          '/public/images/projects/theblack_3.png',
          '/public/images/projects/theblack_4.png',
          '/public/images/projects/theblack_5.png',
          '/public/images/projects/theblack_6.png',
          '/public/images/projects/theblack_7.png',
        ],
        imageTitles: [
          '메인',
          '라이브 스트리밍',
          '라이브 챗',
          '라이브 보이스',
          '포토카드 갤러리 1',
          '포토카드 갤러리 2',
          '라이브 스트리밍',
        ],
        tech: ['AWS SQS', 'SendBird SDK', 'HLS', 'Terraform'],
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
          '/public/images/projects/malohae_1.png',
          '/public/images/projects/malohae_2.png',
          '/public/images/projects/malohae_3.png',
          '/public/images/projects/malohae_4.png',
          '/public/images/projects/malohae_5.png',
        ],
        imageTitles: ['장부 관리 앱', '통계 대시보드', '월별 달력 뷰'],
        tech: ['Flutter', 'Spring Boot', 'AWS EC2', 'RDS'],
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
          '/public/images/projects/fresh_3.jpeg',
          '/public/images/projects/fresh_2.jpeg',
          '/public/images/projects/fresh_1.jpeg',
        ],
        imageTitles: ['메인', '상품 상세 페이지', '장바구니 & 결제'],
        tech: ['Next.js 13', 'Spring Boot 3.x', 'Redis', 'Jenkins'],
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
          '/public/images/projects/lush_1.png',
          '/public/images/projects/lush_2.png',
          '/public/images/projects/lush_3.png',
          '/public/images/projects/lush_6.png',
          '/public/images/projects/lush_4.png',
          '/public/images/projects/lush_5.png',
        ],
        imageTitles: [
          '메인',
          '제품 상세',
          '쿠폰 상세',
          '러쉬 페이',
          'UMS 메인',
          'UMS 발송',
        ],
        tech: ['Spring Boot', 'JWT', 'POS연동', 'QR', 'UMS'],
      },
      {
        period: '2024.07 ~ 2024.08',
        company: '달라컴퍼니 (중고명품 크리)',
        role: '프리랜서',
        description: '중고명품 거래 플랫폼 개발',
        achievements: [
          '리뷰, 실시간 견적 리스트 화면 & API 개발.',
          '앱 사진 앨범 불러오기 네이티브 개발.',
          '앱(IOS & Android) 하이브리드 앱 개발 및 심사 & 스토어 출시.',
          '앱 멀티웹뷰 방식 개발.',
          'AWS S3 + cloud front(CDN) 파일 업로드 인프라 구축.',
        ],
        color: 'from-emerald-400 to-green-500',
        images: [
          '/public/images/projects/criee_5.PNG',
          '/public/images/projects/criee_1.PNG',
          '/public/images/projects/criee_2.PNG',
          '/public/images/projects/criee_3.PNG',
          '/public/images/projects/criee_4.PNG',
        ],
        imageTitles: [
          '웹 메인',
          '앱스토어 화면',
          '실시간 견적 시스템',
          '물품 배송 시스템',
          '실시간 리뷰',
        ],
        tech: ['React Native', 'Spring Boot', 'AWS S3', 'CDN'],
      },
      {
        period: '2024.07 ~ 2024.10',
        company: '아우토크립트 (이동의 자유)',
        role: '프리랜서',
        description: '노약자 및 장애인을 위한 주행 시스템 개발',
        achievements: [
          '주행 경유지 하차, 주행 롤백 개발',
          '어드민 주행상세, 회차지 경로선택 관련 비즈니스 개발',
          '어드민 통계/업무일지 비즈니스 개발',
          '어드민 스케줄링 주행, 승객, 예약 데이터 수집 개발',
        ],
        color: 'from-blue-400 to-cyan-500',
        images: ['/public/images/projects/auto_1.png'],
        imageTitles: ['주행 관제 시스템'],
        tech: ['Spring Boot', 'Kotlin', 'React', 'AWS', 'PostgreSQL'],
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
            {stats.map(stat => (
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
            {/* 메인 타임라인 */}
            <div className='absolute left-8 h-full w-1 transform rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 md:left-1/2 md:-translate-x-1/2' />

            {/* 년도 마커들 */}
            {(() => {
              const years = new Set();
              experiences.forEach(exp => {
                const startYear = exp.period.split('.')[0];
                const endYear = exp.period.includes('~')
                  ? exp.period.split('~ ')[1]?.split('.')[0]
                  : startYear;
                years.add(startYear);
                if (endYear && endYear !== startYear) years.add(endYear);
              });

              // @ts-ignore
              const sortedYears = Array.from(years).sort((a, b) => b - a);

              // @ts-ignore
              return sortedYears.map((year: string, index) => (
                <div
                  key={index}
                  className='absolute left-8 flex items-center md:left-1/2 md:-translate-x-1/2'
                  style={{
                    top: `${(index * 100) / (sortedYears.length - 1)}%`,
                    transform: 'translateY(-50%)',
                  }}
                >
                  {/*/!* 년도 배경 원 *!/*/}
                  {/*<div className='relative z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/30 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 shadow-2xl backdrop-blur-xl'>*/}
                  {/*  <span className='text-sm font-bold text-white drop-shadow-lg'>*/}
                  {/*    {year ?? ''}*/}
                  {/*  </span>*/}
                  {/*</div>*/}

                  {/*/!* 년도 레이블 (데스크톱) *!/*/}
                  {/*<div className='absolute hidden md:flex'>*/}
                  {/*  <div className='absolute -left-24 flex h-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600/80 to-purple-600/80 px-3 backdrop-blur-sm'>*/}
                  {/*    <span className='text-xs font-semibold text-white'>*/}
                  {/*      {year ?? ''}*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*  <div className='absolute left-8 flex h-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600/80 to-cyan-600/80 px-3 backdrop-blur-sm'>*/}
                  {/*    <span className='text-xs font-semibold text-white'>*/}
                  {/*      {year ?? ''}*/}
                  {/*    </span>*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  {/*/!* 모바일 년도 레이블 *!/*/}
                  {/*<div className='absolute -right-20 flex h-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600/90 to-purple-600/90 px-3 backdrop-blur-sm md:hidden'>*/}
                  {/*  <span className='text-xs font-semibold text-white'>*/}
                  {/*    {year ?? ''}*/}
                  {/*  </span>*/}
                  {/*</div>*/}
                </div>
              ));
            })()}

            <div className='space-y-8'>
              {experiences.map((exp, index) => (
                <AnimatedSection
                  key={index}
                  animation={`${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}`}
                  delay={50}
                  className={`relative flex flex-col items-center md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* 프로젝트 도트 */}
                  <div className='absolute left-6 z-30 h-6 w-6 transform rounded-full border-4 border-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg md:left-1/2 md:-translate-x-1/2'>
                    <div className='absolute inset-1 rounded-full bg-white'></div>
                  </div>

                  {/* 프로젝트 년도 표시 - 이전 년도와 다를 때만 표시 */}
                  {(() => {
                    const currentYear = exp.period.split('.')[0];
                    const prevYear = index > 0 ? experiences[index - 1].period.split('.')[0] : '';
                    
                    // 이전 년도와 다를 때만 표시
                    if (currentYear !== prevYear) {
                      return (
                        <div className='z-25 absolute left-8 top-0 md:left-1/2 md:-translate-x-1/2'>
                          <div className='rounded-md bg-gradient-to-r from-gray-800/90 to-gray-700/90 px-2 py-1 backdrop-blur-sm'>
                            <span className='text-xs font-medium text-gray-200'>
                              {currentYear}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}

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
                                d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
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

        {/* 혁신적인 기술 스택 섹션 */}
        <AnimatedSection animation='fadeInUp' delay={200} className='mb-16'>
          <div className='mb-12 text-center'>
            <h3 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
              Tech{' '}
              <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                Arsenal
              </span>
            </h3>
            <div className='mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500' />
            <p className='mx-auto mt-4 max-w-2xl text-gray-300'>
              10년간 축적된 기술 스택과 전문성을 시각적으로 확인해보세요
            </p>
          </div>

          {/* 기술 스택 인터랙티브 그리드 */}
          <div className='relative mx-auto max-w-7xl'>
            {/* 배경 파티클 효과 */}
            <div className='absolute inset-0 overflow-hidden'>
              <div className='tech-particles'>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className='tech-particle'
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${4 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className='relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {skills.map((skillGroup, groupIndex) => (
                <AnimatedSection
                  key={skillGroup.category}
                  animation='fadeInUp'
                  delay={100 + groupIndex * 100}
                  className='group relative'
                >
                  <div className='tech-stack-card group relative h-full transform overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-xl hover:shadow-blue-500/10'>
                    {/* 카테고리 헤더 */}
                    <div className='relative z-10 mb-6 text-center'>
                      <div className='mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-105'>
                        <div className='text-xl'>
                          {groupIndex === 0 && '⚡'}
                          {groupIndex === 1 && '🛠️'}
                          {groupIndex === 2 && '🗄️'}
                          {groupIndex === 3 && '☁️'}
                          {groupIndex === 4 && '🔧'}
                          {groupIndex === 5 && '✨'}
                        </div>
                      </div>
                      <h4 className='text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300'>
                        {skillGroup.category}
                      </h4>
                    </div>

                    {/* 기술 리스트 */}
                    <div className='relative z-10 space-y-3'>
                      {skillGroup.technologies.map(tech => (
                        <div
                          key={tech.name}
                          className='tech-item group/item cursor-pointer transition-all duration-200 hover:scale-[1.02]'
                        >
                          <div className='mb-2 flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                              <div className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-200 group-hover/item:scale-125' />
                              <span className='text-sm font-medium text-gray-200 transition-colors duration-200 group-hover/item:text-white'>
                                {tech.name}
                              </span>
                            </div>
                            <span className='rounded-full bg-white/10 px-2 py-1 text-xs text-gray-400 transition-all duration-200 group-hover/item:bg-white/20 group-hover/item:text-white'>
                              {tech.level}%
                            </span>
                          </div>

                          {/* 간소화된 프로그레스 바 */}
                          <div className='relative h-1.5 overflow-hidden rounded-full bg-white/10'>
                            <div
                              className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-700 ease-out`}
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
                  smitheryUrl:
                    'https://smithery.ai/server/@dlwjdtn535/mcp-bybit-server',
                  githubUrl: 'https://github.com/dlwjdtn535/mcp-bybit-server',
                  tags: ['Crypto API', 'Trading'],
                  icon: '🪙',
                },
                {
                  title: 'Chrome Server',
                  description: 'Chrome 브라우저 자동화 서버',
                  badge:
                    'https://smithery.ai/badge/@dlwjdtn535/mcp-chrome-server',
                  smitheryUrl:
                    'https://smithery.ai/server/@dlwjdtn535/mcp-chrome-server',
                  githubUrl: 'https://github.com/dlwjdtn535/mcp-chrome-server',
                  tags: ['Automation', 'Browser'],
                  icon: '🌐',
                },
                {
                  title: 'Chrome Integration',
                  description: 'Chrome 고급 통합 기능 서버',
                  badge:
                    'https://smithery.ai/badge/@dlwjdtn535/mcp-chrome-integration',
                  smitheryUrl:
                    'https://smithery.ai/server/@dlwjdtn535/mcp-chrome-integration',
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

                    <a
                      href={project.smitheryUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        src={project.badge}
                        alt={`MCP ${project.title}`}
                        className='mx-auto mb-3 h-5'
                      />
                    </a>

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
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
            isGalleryVisible
              ? 'bg-black/90 backdrop-blur-sm'
              : 'bg-black/0 backdrop-blur-none'
          }`}
          onClick={closeGallery}
        >
          <div
            className={`relative mx-auto w-full max-w-5xl transform transition-all duration-500 ease-out ${
              isGalleryAnimating
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-8 scale-75 opacity-0'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeGallery}
              className={`absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-all duration-300 hover:scale-110 hover:bg-black/70 ${
                isGalleryAnimating
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isGalleryAnimating ? '200ms' : '0ms' }}
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
              className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-black/70 ${
                isGalleryAnimating
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isGalleryAnimating ? '300ms' : '0ms' }}
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
              className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-black/70 ${
                isGalleryAnimating
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: isGalleryAnimating ? '300ms' : '0ms' }}
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
            <div
              className={`rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-500 ease-out ${
                isGalleryAnimating
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-0'
              }`}
              style={{ transitionDelay: isGalleryAnimating ? '100ms' : '0ms' }}
            >
              <div className='relative'>
                <img
                  src={currentGallery.images[currentImageIndex]}
                  alt={currentGallery.titles[currentImageIndex]}
                  className='h-auto max-h-[70vh] w-full rounded-lg object-contain transition-all duration-500 ease-out'
                  key={currentImageIndex} // 이미지 변경 시 애니메이션
                />

                {/* 이미지 정보 */}
                <div
                  className={`absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent p-4 transition-all duration-500 ease-out ${
                    isGalleryAnimating
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isGalleryAnimating ? '400ms' : '0ms',
                  }}
                >
                  <h3 className='mb-1 text-lg font-semibold text-white'>
                    {currentGallery.titles[currentImageIndex]}
                  </h3>
                  <p className='text-sm text-gray-300'>
                    {currentImageIndex + 1} / {currentGallery.images.length}
                  </p>
                </div>
              </div>

              {/* 썸네일 네비게이션 */}
              <div
                className={`mt-4 flex justify-center gap-2 overflow-x-auto transition-all duration-500 ease-out ${
                  isGalleryAnimating
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isGalleryAnimating ? '500ms' : '0ms',
                }}
              >
                {currentGallery.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-12 w-16 flex-shrink-0 overflow-hidden rounded border-2 transition-all duration-300 hover:scale-110 ${
                      index === currentImageIndex
                        ? 'scale-105 border-blue-400 opacity-100'
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

      {/* 커스텀 CSS 스타일 */}
      <style>{`
        /* 최적화된 Tech Stack 스타일 */
        .tech-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .tech-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #06b6d4, #3b82f6);
          border-radius: 50%;
          animation: simpleFloat 5s infinite ease-in-out;
          opacity: 0.4;
          will-change: transform;
        }

        @keyframes simpleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            opacity: 0.6;
          }
        }

        /* 간소화된 카드 효과 */
        .tech-stack-card {
          will-change: transform;
        }

        /* 기술 아이템 애니메이션 */
        .tech-item {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
          will-change: transform;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 간소화된 허브 */
        .tech-hub {
          animation: slowRotate 30s linear infinite;
          will-change: transform;
        }

        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* 반응형 최적화 */
        @media (max-width: 768px) {
          .tech-particle {
            width: 2px;
            height: 2px;
            animation-duration: 4s;
          }
          
          .tech-hub {
            display: none !important;
          }

          .tech-stack-card {
            will-change: auto;
          }
        }

        /* 모션 감소 옵션 지원 */
        @media (prefers-reduced-motion: reduce) {
          .tech-particle,
          .tech-hub,
          .tech-item {
            animation: none;
          }
          
          .tech-stack-card {
            transition: none;
          }
        }

        /* 모달 애니메이션 (기존 유지) */
        @keyframes modalBackdropFadeIn {
          from {
            background-color: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
          }
          to {
            background-color: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(8px);
          }
        }

        @keyframes modalBackdropFadeOut {
          from {
            background-color: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(8px);
          }
          to {
            background-color: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes modalSlideOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
        }

        .modal-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-button:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .gallery-image {
          transition: opacity 0.5s ease-in-out;
        }

        .gallery-image.changing {
          opacity: 0.7;
        }

        .thumbnail {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .thumbnail:hover {
          transform: scale(1.1) rotate(2deg);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }

        .thumbnail.active {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default About;
