import React, { useMemo, useState } from 'react';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [demoModal, setDemoModal] = useState<{
    isOpen: boolean;
    serviceId: number | null;
  }>({
    isOpen: false,
    serviceId: null,
  });

  // 데모 상태들 - 한국 맞춤형으로 업데이트
  const [chatMessages, setChatMessages] = useState<
    Array<{ id: number; text: string; sender: 'user' | 'ai' }>
  >([
    {
      id: 1,
      text: '안녕하세요! 네이버 클로바 AI입니다. 무엇을 도와드릴까요?',
      sender: 'ai',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<
    Array<{ id: number; name: string; price: number; quantity: number }>
  >([]);

  // 한국형 배달/카페 아이템들
  const [deliveryItems] = useState([
    {
      id: 1,
      name: '불고기버거 세트',
      price: 12000,
      restaurant: '맥도날드',
      image:
        'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      name: '양념치킨',
      price: 18000,
      restaurant: 'BBQ',
      image:
        'https://images.unsplash.com/photo-1562059390-a761a084768e?w=300&h=200&fit=crop',
    },
    {
      id: 3,
      name: '김치찌개',
      price: 8000,
      restaurant: '한식당',
      image:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop',
    },
    {
      id: 4,
      name: '떡볶이 세트',
      price: 6000,
      restaurant: '분식집',
      image:
        'https://images.unsplash.com/photo-1553978297-833d24e0d1e2?w=300&h=200&fit=crop',
    },
  ]);

  const [cafeItems] = useState([
    {
      id: 1,
      name: '아메리카노',
      price: 4500,
      category: '커피',
      image:
        'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      name: '카라멜 마키아또',
      price: 5500,
      category: '커피',
      image:
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop',
    },
    {
      id: 3,
      name: '녹차 프라푸치노',
      price: 6000,
      category: '음료',
      image:
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop',
    },
    {
      id: 4,
      name: '크루아상',
      price: 3500,
      category: '디저트',
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop',
    },
  ]);

  // 메모리 최적화: 서비스 데이터를 useMemo로 메모이제이션 - 데모가 있는 서비스만 포함
  const serviceCategories = useMemo(
    () => [
      { id: 'all', name: '전체', icon: '🚀', count: 0 },
      { id: 'ai', name: 'AI 서비스', icon: '🤖', count: 2 },
      { id: 'delivery', name: '배달/음식', icon: '🛵', count: 1 },
      { id: 'cafe', name: '카페', icon: '☕', count: 1 },
      { id: 'ecommerce', name: '이커머스', icon: '📦', count: 1 },
      { id: 'realestate', name: '부동산', icon: '🏠', count: 1 },
      { id: 'webtoon', name: '웹툰', icon: '📱', count: 1 },
      { id: 'fintech', name: '핀테크', icon: '💳', count: 1 },
      { id: 'saas', name: '협업툴', icon: '👥', count: 1 },
      { id: 'dashboard', name: '대시보드', icon: '📊', count: 1 },
    ],
    []
  );

  // 데모가 있는 서비스만 유지 - 한국 맞춤형으로 업데이트
  const services = useMemo(
    () => [
      // AI 앱
      {
        id: 1,
        title: '네이버 클로바 챗봇',
        category: 'ai',
        description: '한국어 특화 AI 챗봇 서비스 - 네이버 클로바와 GPT 연동',
        features: [
          '한국어 자연어처리',
          '실시간 채팅',
          '한국 문화 이해',
          'API 통합',
        ],
        tech: ['Next.js', 'Clova AI', 'TypeScript', 'Korean NLP'],
        icon: '🤖',
        color: 'from-green-500 to-emerald-600',
        hasDemo: true,
      },
      {
        id: 2,
        title: 'K-POP 이미지 생성기',
        category: 'ai',
        description: 'K-POP 스타일 AI 이미지 생성 - 한국 문화 특화',
        features: ['K-POP 스타일', '한복 생성', '한국 배경', '고화질 출력'],
        tech: ['React', 'Stable Diffusion', 'Korean Dataset', 'CloudFlare'],
        icon: '🎨',
        color: 'from-pink-500 to-rose-600',
        hasDemo: true,
      },

      // 배달/음식
      {
        id: 3,
        title: '배달의민족 클론',
        category: 'delivery',
        description: '한국 최대 배달 앱 스타일의 주문 시스템',
        features: ['실시간 주문', '배달 추적', '리뷰 시스템', '결제 연동'],
        tech: ['React Native', 'Node.js', 'MongoDB', '카카오페이'],
        icon: '🛵',
        color: 'from-orange-500 to-red-600',
        hasDemo: true,
      },
      {
        id: 4,
        title: '스타벅스 주문 시스템',
        category: 'cafe',
        description: '카페 키오스크 및 모바일 주문 시스템',
        features: ['메뉴 커스터마이징', '매장 찾기', '포인트 적립', 'QR 결제'],
        tech: ['Next.js', 'Redux', 'PostgreSQL', '토스페이'],
        icon: '☕',
        color: 'from-green-600 to-teal-600',
        hasDemo: true,
      },

      // 커머스
      {
        id: 5,
        title: '쿠팡 스타일 커머스',
        category: 'ecommerce',
        description: '한국 대표 이커머스 플랫폼 스타일',
        features: ['로켓배송', '상품 검색', '장바구니', '결제 시스템'],
        tech: ['Next.js', 'Elasticsearch', 'Redis', '네이버페이'],
        icon: '📦',
        color: 'from-blue-500 to-cyan-600',
        hasDemo: true,
      },

      // 부동산
      {
        id: 6,
        title: '직방 스타일 부동산',
        category: 'realestate',
        description: '한국 부동산 중개 플랫폼',
        features: ['매물 검색', '지도 연동', '가격 분석', '찜하기'],
        tech: ['React', '카카오맵 API', 'Spring Boot', 'MySQL'],
        icon: '🏠',
        color: 'from-indigo-500 to-purple-600',
        hasDemo: true,
      },

      // 엔터테인먼트
      {
        id: 7,
        title: '네이버웹툰 플랫폼',
        category: 'webtoon',
        description: '웹툰 스트리밍 플랫폼',
        features: ['웹툰 뷰어', '댓글 시스템', '구독 관리', '오프라인 저장'],
        tech: ['Next.js', 'WebGL', 'Redis', '카카오페이'],
        icon: '📱',
        color: 'from-emerald-500 to-green-600',
        hasDemo: true,
      },

      // 금융
      {
        id: 8,
        title: '토스 스타일 핀테크',
        category: 'fintech',
        description: '간편 송금 및 금융 서비스',
        features: ['계좌 이체', '가계부', '투자 정보', '보험 관리'],
        tech: ['React Native', 'Node.js', 'PostgreSQL', '금융보안'],
        icon: '💳',
        color: 'from-blue-600 to-indigo-600',
        hasDemo: true,
      },

      // SaaS
      {
        id: 9,
        title: '카카오워크 협업툴',
        category: 'saas',
        description: '한국형 업무 협업 플랫폼',
        features: ['채팅', '화상회의', '문서 공유', '일정 관리'],
        tech: ['React', 'WebRTC', 'MongoDB', '카카오 API'],
        icon: '👥',
        color: 'from-yellow-500 to-orange-600',
        hasDemo: true,
      },

      // 대시보드
      {
        id: 10,
        title: '네이버 비즈니스 대시보드',
        category: 'dashboard',
        description: '한국형 비즈니스 인텔리전스 시스템',
        features: ['매출 분석', 'KPI 모니터링', '리포트 생성', '알림'],
        tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
        icon: '📊',
        color: 'from-green-500 to-blue-600',
        hasDemo: true,
      },
    ],
    []
  );

  // 카테고리별 필터링
  const filteredServices = useMemo(() => {
    return activeCategory === 'all'
      ? services
      : services.filter(service => service.category === activeCategory);
  }, [services, activeCategory]);

  // 카테고리 카운트 업데이트
  const updatedCategories = useMemo(() => {
    return serviceCategories.map(category => {
      if (category.id === 'all') {
        return { ...category, count: services.length };
      }
      return {
        ...category,
        count: services.filter(service => service.category === category.id)
          .length,
      };
    });
  }, [serviceCategories, services]);

  const openDemo = (serviceId: number) => {
    setDemoModal({ isOpen: true, serviceId });
  };

  const closeDemo = () => {
    setDemoModal({ isOpen: false, serviceId: null });
  };

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        text: chatInput,
        sender: 'user' as const,
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatInput('');

      // 한국어 AI 응답 시뮬레이션
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          text: chatInput.includes('안녕')
            ? '안녕하세요! 네이버 클로바 AI 어시스턴트입니다. 궁금한 것이 있으시면 언제든 물어보세요! 😊'
            : chatInput.includes('날씨')
              ? '오늘 서울 날씨는 맑음이고 기온은 22도입니다. 미세먼지 농도는 보통이에요!'
              : chatInput.includes('음식') || chatInput.includes('맛집')
                ? '한국 음식 추천드릴게요! 김치찌개, 불고기, 떡볶이는 어떠세요? 근처 맛집도 찾아드릴 수 있어요!'
                : chatInput.includes('K-POP') || chatInput.includes('케이팝')
                  ? 'K-POP 정말 좋죠! BTS, 블랙핑크, 뉴진스 등 어떤 그룹을 좋아하시나요?'
                  : chatInput.includes('서울') || chatInput.includes('부산')
                    ? '한국의 아름다운 도시들이죠! 관광지나 맛집 정보가 필요하시면 도움드릴게요!'
                    : chatInput.includes('드라마')
                      ? '한국 드라마 추천해드릴까요? 요즘 인기 있는 작품들이 많아요!'
                      : chatInput.includes('게임')
                        ? '한국 게임들이 세계적으로 인기죠! 리그 오브 레전드나 배틀그라운드 어떠세요?'
                        : chatInput.includes('시간')
                          ? `현재 한국 시간은 ${new Date().toLocaleTimeString('ko-KR')}입니다.`
                          : chatInput.includes('쇼핑')
                            ? '온라인 쇼핑이라면 쿠팡, 11번가, 이마트몰 등을 추천드려요! 어떤 제품을 찾고 계신가요?'
                            : '흥미로운 질문이네요! 한국어로 더 자세히 설명해주시면 정확한 답변을 드릴 수 있을 것 같아요. 🤗',
          sender: 'ai' as const,
        };
        setChatMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const generateImage = () => {
    if (imagePrompt.trim()) {
      // K-POP 및 한국 문화 이미지 생성 시뮬레이션
      const koreanImageUrls = [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', // Korean traditional
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop', // Seoul cityscape
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', // Hanbok
        'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop', // K-POP concert
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', // Korean food
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', // Korean temple
      ];
      const randomImage =
        koreanImageUrls[Math.floor(Math.random() * koreanImageUrls.length)];
      setGeneratedImage(randomImage);
    }
  };

  const addToCart = (item: { name: string; price: number }) => {
    const existingItem = cartItems.find(
      cartItem => cartItem.name === item.name
    );
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          id: cartItems.length + 1,
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ]);
    }
  };

  const renderDemo = () => {
    const service = services.find(s => s.id === demoModal.serviceId);
    if (!service) return null;

    switch (service.id) {
      case 1: // 네이버 클로바 챗봇
        return (
          <div className='mx-auto max-w-5xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 shadow-2xl'>
            {/* 상단 헤더 */}
            <div className='bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xl'>
                    <span className='text-2xl'>🤖</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      네이버 클로바 AI
                    </h3>
                    <div className='flex items-center gap-2 text-green-200'>
                      <div className='h-2 w-2 animate-pulse rounded-full bg-green-400'></div>
                      <span className='text-sm'>온라인 • 한국어 특화 AI</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    응답속도: 0.8초
                  </div>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    정확도: 95.2%
                  </div>
                </div>
              </div>
            </div>

            <div className='flex h-[500px]'>
              {/* 채팅 영역 */}
              <div className='flex flex-1 flex-col'>
                <div className='flex-1 space-y-4 overflow-y-auto bg-slate-800/50 p-6'>
                  {chatMessages.map(message => (
                    <div
                      key={message.id}
                      className={`flex gap-4 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                            : 'bg-gradient-to-br from-green-500 to-emerald-600'
                        }`}
                      >
                        <span className='text-sm font-bold text-white'>
                          {message.sender === 'user' ? '나' : 'AI'}
                        </span>
                      </div>
                      <div
                        className={`max-w-md ${message.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}
                      >
                        <div
                          className={`rounded-2xl px-4 py-3 shadow-lg backdrop-blur-xl ${
                            message.sender === 'user'
                              ? 'ml-auto bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                              : 'border border-white/20 bg-white/10 text-gray-100'
                          }`}
                        >
                          <p className='text-sm leading-relaxed'>
                            {message.text}
                          </p>
                        </div>
                        <span className='mt-1 px-2 text-xs text-gray-400'>
                          {new Date().toLocaleTimeString('ko-KR')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 입력 영역 */}
                <div className='border-t border-white/10 bg-slate-800/30 p-6'>
                  <div className='flex gap-3'>
                    <div className='relative flex-1'>
                      <input
                        type='text'
                        value={chatInput}
                        onChange={e => setChatInput(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && sendChatMessage()}
                        placeholder='K-POP, 한국음식, 서울 여행 등 무엇이든 물어보세요...'
                        className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500'
                      />
                    </div>
                    <button
                      onClick={sendChatMessage}
                      className='rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-emerald-700 hover:shadow-xl'
                    >
                      전송
                    </button>
                  </div>
                  <div className='mt-3 flex items-center gap-4 text-xs text-gray-400'>
                    <span>🇰🇷 한국어 최적화</span>
                    <span>⚡ 실시간 응답</span>
                    <span>🧠 문맥 이해</span>
                  </div>
                </div>
              </div>

              {/* 사이드바 */}
              <div className='w-80 border-l border-white/10 bg-slate-800/30 p-6'>
                <h4 className='mb-4 font-semibold text-white'>AI 기능</h4>
                <div className='space-y-3'>
                  {[
                    { icon: '🇰🇷', label: '한국어 처리', status: '활성' },
                    { icon: '🍜', label: '맛집 추천', status: '준비됨' },
                    { icon: '🎵', label: 'K-POP 정보', status: '활성' },
                    { icon: '🏢', label: '한국 여행', status: '활성' },
                    { icon: '📺', label: '드라마 추천', status: '준비됨' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3'
                    >
                      <div className='flex items-center gap-3'>
                        <span className='text-lg'>{item.icon}</span>
                        <span className='text-sm text-gray-300'>
                          {item.label}
                        </span>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          item.status === '활성'
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-blue-500/20 text-blue-300'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className='mt-6 rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4'>
                  <h5 className='mb-2 font-semibold text-white'>오늘의 통계</h5>
                  <div className='space-y-2 text-sm'>
                    <div className='flex justify-between text-gray-300'>
                      <span>오늘 질문:</span>
                      <span className='font-semibold text-white'>2,847개</span>
                    </div>
                    <div className='flex justify-between text-gray-300'>
                      <span>평균 응답:</span>
                      <span className='font-semibold text-white'>0.8초</span>
                    </div>
                    <div className='flex justify-between text-gray-300'>
                      <span>만족도:</span>
                      <span className='font-semibold text-green-300'>
                        98.5%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // K-POP 이미지 생성기
        return (
          <div className='mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 shadow-2xl'>
            <div className='bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xl'>
                    <span className='text-2xl'>🎨</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      K-POP 이미지 스튜디오
                    </h3>
                    <p className='text-sm text-pink-200'>
                      한국 문화 특화 AI 이미지 생성
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    해상도: 1024x1024
                  </div>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    스타일: K-POP
                  </div>
                </div>
              </div>
            </div>

            <div className='flex h-[600px]'>
              {/* 프롬프트 및 설정 */}
              <div className='w-96 border-r border-white/10 bg-slate-800/30 p-6'>
                <h4 className='mb-4 font-semibold text-white'>생성 설정</h4>

                <div className='space-y-4'>
                  <div>
                    <label className='mb-2 block text-sm font-medium text-gray-300'>
                      프롬프트
                    </label>
                    <textarea
                      value={imagePrompt}
                      onChange={e => setImagePrompt(e.target.value)}
                      placeholder='한복을 입은 K-POP 아이돌, 경복궁 배경, 벚꽃이 피는 봄날, 4K 화질...'
                      className='h-24 w-full resize-none rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-pink-500'
                    />
                  </div>

                  <div className='grid grid-cols-1 gap-3'>
                    <div>
                      <label className='mb-2 block text-sm font-medium text-gray-300'>
                        테마
                      </label>
                      <select className='w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-pink-500'>
                        <option>K-POP 아이돌</option>
                        <option>전통 한복</option>
                        <option>한국 궁궐</option>
                        <option>서울 야경</option>
                        <option>한국 음식</option>
                      </select>
                    </div>
                    <div>
                      <label className='mb-2 block text-sm font-medium text-gray-300'>
                        품질
                      </label>
                      <select className='w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-pink-500'>
                        <option>고화질 (1024x1024)</option>
                        <option>초고화질 (2048x2048)</option>
                        <option>8K (4096x4096)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={generateImage}
                    className='w-full rounded-lg bg-gradient-to-r from-pink-600 to-rose-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-pink-700 hover:to-rose-700'
                  >
                    🎨 이미지 생성하기
                  </button>

                  <div className='rounded-lg border border-pink-500/30 bg-gradient-to-br from-pink-500/20 to-rose-500/20 p-4'>
                    <h5 className='mb-2 font-semibold text-white'>생성 정보</h5>
                    <div className='space-y-1 text-sm'>
                      <div className='flex justify-between text-gray-300'>
                        <span>예상 시간:</span>
                        <span className='text-white'>15-30초</span>
                      </div>
                      <div className='flex justify-between text-gray-300'>
                        <span>비용:</span>
                        <span className='text-white'>무료</span>
                      </div>
                      <div className='flex justify-between text-gray-300'>
                        <span>대기열:</span>
                        <span className='text-green-300'>대기 없음</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 이미지 표시 영역 */}
              <div className='flex-1 bg-slate-800/50 p-6'>
                <div className='flex h-full items-center justify-center'>
                  {generatedImage ? (
                    <div className='group relative'>
                      <img
                        src={generatedImage}
                        alt='K-POP AI Generated'
                        className='max-h-full max-w-full rounded-xl shadow-2xl'
                      />
                      <div className='absolute inset-0 flex items-end justify-end rounded-xl bg-black/0 p-4 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100'>
                        <div className='flex gap-2'>
                          <button className='rounded-lg bg-white/20 p-2 text-white backdrop-blur-xl transition-all hover:bg-white/30'>
                            💾 저장
                          </button>
                          <button className='rounded-lg bg-white/20 p-2 text-white backdrop-blur-xl transition-all hover:bg-white/30'>
                            🔄 재생성
                          </button>
                          <button className='rounded-lg bg-white/20 p-2 text-white backdrop-blur-xl transition-all hover:bg-white/30'>
                            📤 공유
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='text-center'>
                      <div className='mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl'>
                        <span className='text-4xl'>🎨</span>
                      </div>
                      <h3 className='mb-2 text-xl font-semibold text-white'>
                        K-POP 이미지 생성기
                      </h3>
                      <p className='text-gray-400'>
                        한국 문화와 K-POP을 반영한 AI 이미지를 생성해보세요
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // 배달의민족 클론
        return (
          <div className='mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 shadow-2xl'>
            <div className='bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xl'>
                    <span className='text-2xl'>🛵</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>배달의민족</h3>
                    <p className='text-sm text-orange-200'>
                      한국 최대 배달 음식 주문 플랫폼
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    🚗 평균 배달시간: 30분
                  </div>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    📍 서울 강남구
                  </div>
                </div>
              </div>
            </div>

            <div className='flex h-[700px]'>
              {/* 메뉴 리스트 */}
              <div className='flex-1 overflow-y-auto bg-slate-800/50 p-6'>
                <div className='mb-6'>
                  <h4 className='mb-4 text-lg font-semibold text-white'>
                    🍽️ 인기 맛집
                  </h4>
                  <div className='mb-4 flex gap-3'>
                    <button className='rounded-lg bg-orange-500 px-4 py-2 font-semibold text-white'>
                      전체
                    </button>
                    <button className='rounded-lg bg-white/10 px-4 py-2 text-gray-300 hover:bg-white/20'>
                      치킨
                    </button>
                    <button className='rounded-lg bg-white/10 px-4 py-2 text-gray-300 hover:bg-white/20'>
                      한식
                    </button>
                    <button className='rounded-lg bg-white/10 px-4 py-2 text-gray-300 hover:bg-white/20'>
                      분식
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  {deliveryItems.map(item => (
                    <div
                      key={item.id}
                      className='group overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/50'
                    >
                      <div className='relative overflow-hidden'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute left-3 top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white'>
                          🔥 인기
                        </div>
                        <div className='absolute right-3 top-3 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm'>
                          ⭐ 4.8
                        </div>
                      </div>

                      <div className='p-4'>
                        <div className='mb-2 flex items-center gap-2'>
                          <span className='text-sm text-gray-400'>
                            {item.restaurant}
                          </span>
                          <span className='text-xs text-green-400'>
                            🚗 25분
                          </span>
                        </div>
                        <h4 className='mb-2 font-semibold text-white'>
                          {item.name}
                        </h4>

                        <div className='mb-3 flex items-center justify-between'>
                          <span className='text-lg font-bold text-white'>
                            {item.price.toLocaleString()}원
                          </span>
                          <span className='text-sm text-gray-400 line-through'>
                            {(item.price + 2000).toLocaleString()}원
                          </span>
                        </div>

                        <button
                          onClick={() => addToCart(item)}
                          className='w-full rounded-lg bg-gradient-to-r from-orange-600 to-red-600 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-700 hover:to-red-700'
                        >
                          🛒 담기
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 주문 요약 */}
              <div className='w-96 border-l border-white/10 bg-slate-800/30 p-6'>
                <div className='mb-6 flex items-center justify-between'>
                  <h4 className='font-semibold text-white'>🛒 주문서</h4>
                  <div className='rounded-full bg-orange-500 px-2 py-1 text-xs text-white'>
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}개
                  </div>
                </div>

                <div className='mb-6 max-h-80 space-y-4 overflow-y-auto'>
                  {cartItems.length > 0 ? (
                    cartItems.map(item => (
                      <div
                        key={item.id}
                        className='flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3'
                      >
                        <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20'>
                          <span className='text-xs font-bold text-orange-400'>
                            {item.name.charAt(0)}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h5 className='text-sm font-medium text-white'>
                            {item.name}
                          </h5>
                          <p className='text-xs text-gray-400'>
                            수량: {item.quantity}개
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='text-sm font-semibold text-white'>
                            {(item.price * item.quantity).toLocaleString()}원
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='py-8 text-center'>
                      <div className='mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10'>
                        <span className='text-2xl'>🍽️</span>
                      </div>
                      <p className='text-sm text-gray-400'>
                        장바구니가 비어있어요
                      </p>
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className='space-y-4'>
                    <div className='border-t border-white/10 pt-4'>
                      <div className='mb-2 flex items-center justify-between'>
                        <span className='text-gray-300'>주문금액:</span>
                        <span className='font-semibold text-white'>
                          {cartItems
                            .reduce(
                              (sum, item) => sum + item.price * item.quantity,
                              0
                            )
                            .toLocaleString()}
                          원
                        </span>
                      </div>
                      <div className='mb-2 flex items-center justify-between'>
                        <span className='text-gray-300'>배달팁:</span>
                        <span className='font-semibold text-white'>
                          3,000원
                        </span>
                      </div>
                      <div className='mb-4 flex items-center justify-between'>
                        <span className='font-semibold text-white'>
                          총 결제금액:
                        </span>
                        <span className='text-lg font-bold text-white'>
                          {(
                            cartItems.reduce(
                              (sum, item) => sum + item.price * item.quantity,
                              0
                            ) + 3000
                          ).toLocaleString()}
                          원
                        </span>
                      </div>
                    </div>

                    <button className='w-full rounded-lg bg-gradient-to-r from-orange-600 to-red-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-700 hover:to-red-700'>
                      🛵 주문하기
                    </button>

                    <div className='flex items-center justify-center gap-2 text-xs text-gray-400'>
                      <span>💳</span>
                      <span>카카오페이, 토스페이 결제 가능</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 4: // 스타벅스 주문 시스템
        return (
          <div className='mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 shadow-2xl'>
            <div className='bg-gradient-to-r from-green-700 via-teal-700 to-green-700 p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xl'>
                    <span className='text-2xl'>☕</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      스타벅스 코리아
                    </h3>
                    <p className='text-sm text-green-200'>
                      카페 키오스크 & 모바일 주문
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    📍 강남점
                  </div>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    ⏰ 준비시간: 5분
                  </div>
                </div>
              </div>
            </div>

            <div className='flex h-[700px]'>
              {/* 메뉴 선택 */}
              <div className='flex-1 overflow-y-auto bg-slate-800/50 p-6'>
                <div className='mb-6'>
                  <div className='mb-4 flex gap-3'>
                    <button className='rounded-lg bg-green-600 px-4 py-2 font-semibold text-white'>
                      전체
                    </button>
                    <button className='rounded-lg bg-white/10 px-4 py-2 text-gray-300 hover:bg-white/20'>
                      커피
                    </button>
                    <button className='rounded-lg bg-white/10 px-4 py-2 text-gray-300 hover:bg-white/20'>
                      음료
                    </button>
                    <button className='rounded-lg bg-white/10 px-4 py-2 text-gray-300 hover:bg-white/20'>
                      디저트
                    </button>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
                  {cafeItems.map(item => (
                    <div
                      key={item.id}
                      className='group overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-green-500/50'
                    >
                      <div className='relative overflow-hidden'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute left-3 top-3 rounded-full bg-green-600 px-2 py-1 text-xs font-semibold text-white'>
                          {item.category}
                        </div>
                        {item.name.includes('아메리카노') && (
                          <div className='absolute right-3 top-3 rounded-full bg-yellow-500 px-2 py-1 text-xs font-semibold text-black'>
                            BEST
                          </div>
                        )}
                      </div>

                      <div className='p-4'>
                        <h4 className='mb-2 font-semibold text-white'>
                          {item.name}
                        </h4>

                        <div className='mb-3 flex items-center justify-between'>
                          <span className='text-lg font-bold text-white'>
                            {item.price.toLocaleString()}원
                          </span>
                          <div className='flex items-center gap-1'>
                            <span className='text-sm text-yellow-400'>⭐</span>
                            <span className='text-sm text-gray-300'>4.5</span>
                          </div>
                        </div>

                        <button
                          onClick={() => addToCart(item)}
                          className='w-full rounded-lg bg-gradient-to-r from-green-600 to-teal-600 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-teal-700'
                        >
                          ☕ 담기
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 주문 요약 */}
              <div className='w-96 border-l border-white/10 bg-slate-800/30 p-6'>
                <div className='mb-6 flex items-center justify-between'>
                  <h4 className='font-semibold text-white'>☕ 주문서</h4>
                  <div className='rounded-full bg-green-600 px-2 py-1 text-xs text-white'>
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}개
                  </div>
                </div>

                <div className='mb-6 max-h-80 space-y-4 overflow-y-auto'>
                  {cartItems.length > 0 ? (
                    cartItems.map(item => (
                      <div
                        key={item.id}
                        className='flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3'
                      >
                        <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/20'>
                          <span className='text-xs font-bold text-green-400'>
                            ☕
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h5 className='text-sm font-medium text-white'>
                            {item.name}
                          </h5>
                          <p className='text-xs text-gray-400'>
                            수량: {item.quantity}개
                          </p>
                          <p className='text-xs text-gray-400'>
                            옵션: ICE, 일반
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='text-sm font-semibold text-white'>
                            {(item.price * item.quantity).toLocaleString()}원
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='py-8 text-center'>
                      <div className='mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10'>
                        <span className='text-2xl'>☕</span>
                      </div>
                      <p className='text-sm text-gray-400'>
                        주문할 음료를 선택해주세요
                      </p>
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className='space-y-4'>
                    <div className='border-t border-white/10 pt-4'>
                      <div className='mb-2 flex items-center justify-between'>
                        <span className='text-gray-300'>상품금액:</span>
                        <span className='font-semibold text-white'>
                          {cartItems
                            .reduce(
                              (sum, item) => sum + item.price * item.quantity,
                              0
                            )
                            .toLocaleString()}
                          원
                        </span>
                      </div>
                      <div className='mb-2 flex items-center justify-between'>
                        <span className='text-gray-300'>스타 적립:</span>
                        <span className='font-semibold text-yellow-400'>
                          +12⭐
                        </span>
                      </div>
                      <div className='mb-4 flex items-center justify-between'>
                        <span className='font-semibold text-white'>
                          총 결제금액:
                        </span>
                        <span className='text-lg font-bold text-white'>
                          {cartItems
                            .reduce(
                              (sum, item) => sum + item.price * item.quantity,
                              0
                            )
                            .toLocaleString()}
                          원
                        </span>
                      </div>
                    </div>

                    <button className='w-full rounded-lg bg-gradient-to-r from-green-600 to-teal-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-teal-700'>
                      ☕ 주문하기
                    </button>

                    <div className='flex items-center justify-center gap-2 text-xs text-gray-400'>
                      <span>💳</span>
                      <span>현금, 카드, 스타벅스 카드 결제</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 6: // 커머스 - Enterprise급 업그레이드
        return (
          <div className='mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 shadow-2xl'>
            <div className='bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xl'>
                    <span className='text-2xl'>🛍️</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      AppleStore Pro
                    </h3>
                    <p className='text-sm text-emerald-200'>
                      Enterprise E-commerce Platform
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    1,247 Products
                  </div>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    Live Inventory
                  </div>
                </div>
              </div>
            </div>

            <div className='flex h-[700px]'>
              {/* 상품 그리드 */}
              <div className='flex-1 overflow-y-auto bg-slate-800/50 p-6'>
                <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
                  {[
                    {
                      name: 'MacBook Pro 16"',
                      price: 2590000,
                      originalPrice: 2890000,
                      image:
                        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
                      badge: '10% OFF',
                      rating: 4.9,
                      reviews: 1247,
                    },
                    {
                      name: 'iPhone 15 Pro Max',
                      price: 1550000,
                      originalPrice: 1690000,
                      image:
                        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
                      badge: 'BEST SELLER',
                      rating: 4.8,
                      reviews: 2156,
                    },
                    {
                      name: 'AirPods Pro 2nd',
                      price: 350000,
                      originalPrice: 380000,
                      image:
                        'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop',
                      badge: 'NEW',
                      rating: 4.7,
                      reviews: 892,
                    },
                    {
                      name: 'iPad Pro 12.9"',
                      price: 1450000,
                      originalPrice: 1580000,
                      image:
                        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop',
                      badge: '8% OFF',
                      rating: 4.9,
                      reviews: 634,
                    },
                    {
                      name: 'Apple Watch Ultra',
                      price: 1090000,
                      originalPrice: 1150000,
                      image:
                        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop',
                      badge: 'LIMITED',
                      rating: 4.8,
                      reviews: 445,
                    },
                    {
                      name: 'Mac Studio',
                      price: 2890000,
                      originalPrice: 3100000,
                      image:
                        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
                      badge: 'PREMIUM',
                      rating: 4.9,
                      reviews: 178,
                    },
                  ].map((product, index) => (
                    <div
                      key={index}
                      className='group overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/40'
                    >
                      <div className='relative overflow-hidden'>
                        <img
                          src={product.image}
                          alt={product.name}
                          className='h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute left-3 top-3'>
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${
                              product.badge === 'BEST SELLER'
                                ? 'bg-orange-500 text-white'
                                : product.badge === 'NEW'
                                  ? 'bg-green-500 text-white'
                                  : product.badge === 'LIMITED'
                                    ? 'bg-red-500 text-white'
                                    : product.badge === 'PREMIUM'
                                      ? 'bg-purple-500 text-white'
                                      : 'bg-blue-500 text-white'
                            }`}
                          >
                            {product.badge}
                          </span>
                        </div>
                        <div className='absolute right-3 top-3'>
                          <button className='flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xl transition-all hover:bg-white/30'>
                            ♡
                          </button>
                        </div>
                      </div>

                      <div className='p-4'>
                        <h4 className='mb-2 font-semibold text-white'>
                          {product.name}
                        </h4>

                        <div className='mb-2 flex items-center gap-2'>
                          <div className='flex items-center gap-1'>
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                              >
                                ⭐
                              </span>
                            ))}
                          </div>
                          <span className='text-xs text-gray-400'>
                            ({product.reviews})
                          </span>
                        </div>

                        <div className='mb-3 flex items-center gap-2'>
                          <span className='text-lg font-bold text-white'>
                            ₩{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className='text-sm text-gray-400 line-through'>
                              ₩{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => addToCart(product)}
                          className='w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:from-emerald-700 hover:to-green-700 group-hover:shadow-xl'
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 장바구니 사이드바 */}
              <div className='w-96 border-l border-white/10 bg-slate-800/30 p-6'>
                <div className='mb-6 flex items-center justify-between'>
                  <h4 className='font-semibold text-white'>Shopping Cart</h4>
                  <div className='rounded-full bg-emerald-500 px-2 py-1 text-xs text-white'>
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{' '}
                    items
                  </div>
                </div>

                <div className='mb-6 max-h-80 space-y-4 overflow-y-auto'>
                  {cartItems.length > 0 ? (
                    cartItems.map(item => (
                      <div
                        key={item.id}
                        className='flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3'
                      >
                        <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20'>
                          <span className='text-xs font-bold text-emerald-400'>
                            {item.name.charAt(0)}
                          </span>
                        </div>
                        <div className='flex-1'>
                          <h5 className='text-sm font-medium text-white'>
                            {item.name}
                          </h5>
                          <p className='text-xs text-gray-400'>
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='text-sm font-semibold text-white'>
                            ₩{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='py-8 text-center'>
                      <div className='mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10'>
                        <span className='text-2xl'>🛒</span>
                      </div>
                      <p className='text-sm text-gray-400'>
                        Your cart is empty
                      </p>
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className='space-y-4'>
                    <div className='border-t border-white/10 pt-4'>
                      <div className='mb-2 flex items-center justify-between'>
                        <span className='text-gray-300'>Subtotal:</span>
                        <span className='font-semibold text-white'>
                          ₩
                          {cartItems
                            .reduce(
                              (sum, item) => sum + item.price * item.quantity,
                              0
                            )
                            .toLocaleString()}
                        </span>
                      </div>
                      <div className='mb-2 flex items-center justify-between'>
                        <span className='text-gray-300'>Shipping:</span>
                        <span className='font-semibold text-green-400'>
                          FREE
                        </span>
                      </div>
                      <div className='mb-4 flex items-center justify-between'>
                        <span className='font-semibold text-white'>Total:</span>
                        <span className='text-lg font-bold text-white'>
                          ₩
                          {cartItems
                            .reduce(
                              (sum, item) => sum + item.price * item.quantity,
                              0
                            )
                            .toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <button className='w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-emerald-700 hover:to-green-700'>
                      Proceed to Checkout
                    </button>

                    <div className='flex items-center justify-center gap-2 text-xs text-gray-400'>
                      <span>🔒</span>
                      <span>Secure checkout with 256-bit SSL</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 11: // 대시보드 - Executive급 업그레이드
        return (
          <div className='mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 shadow-2xl'>
            <div className='bg-gradient-to-r from-gray-600 via-slate-600 to-gray-600 p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-xl'>
                    <span className='text-2xl'>📊</span>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      Executive Dashboard
                    </h3>
                    <p className='text-sm text-gray-200'>
                      Real-time Business Intelligence
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-xl'>
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                  <div className='rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-xs text-green-300'>
                    All Systems Operational
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[700px] overflow-y-auto p-6'>
              {/* KPI Cards */}
              <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                {[
                  {
                    title: 'Total Revenue',
                    value: '₩47.2M',
                    change: '+12.5%',
                    changeType: 'positive',
                    icon: '💰',
                    color: 'from-green-500 to-emerald-600',
                  },
                  {
                    title: 'Active Users',
                    value: '28.4K',
                    change: '+8.2%',
                    changeType: 'positive',
                    icon: '👥',
                    color: 'from-blue-500 to-cyan-600',
                  },
                  {
                    title: 'Conversion Rate',
                    value: '3.24%',
                    change: '+0.8%',
                    changeType: 'positive',
                    icon: '📈',
                    color: 'from-purple-500 to-pink-600',
                  },
                  {
                    title: 'Avg Order Value',
                    value: '₩186K',
                    change: '-2.1%',
                    changeType: 'negative',
                    icon: '🛒',
                    color: 'from-orange-500 to-red-600',
                  },
                ].map((kpi, index) => (
                  <div
                    key={index}
                    className='rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/40'
                  >
                    <div className='mb-4 flex items-center justify-between'>
                      <div
                        className={`h-12 w-12 bg-gradient-to-br ${kpi.color} flex items-center justify-center rounded-xl shadow-lg`}
                      >
                        <span className='text-2xl'>{kpi.icon}</span>
                      </div>
                      <div
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                          kpi.changeType === 'positive'
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}
                      >
                        {kpi.change}
                      </div>
                    </div>
                    <h3 className='mb-1 text-sm font-medium text-gray-400'>
                      {kpi.title}
                    </h3>
                    <p className='text-2xl font-bold text-white'>{kpi.value}</p>
                  </div>
                ))}
              </div>

              {/* Charts and Analytics */}
              <div className='mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2'>
                {/* Revenue Chart */}
                <div className='rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'>
                  <div className='mb-6 flex items-center justify-between'>
                    <h4 className='font-semibold text-white'>Revenue Trend</h4>
                    <select className='rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-sm text-white'>
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                    </select>
                  </div>
                  <div className='relative h-48 rounded-lg border border-blue-500/20 bg-gradient-to-t from-blue-500/10 to-transparent'>
                    <div className='absolute inset-4 flex items-end justify-between'>
                      {[65, 45, 75, 85, 70, 90, 95].map((height, index) => (
                        <div
                          key={index}
                          className='cursor-pointer rounded-t bg-gradient-to-t from-blue-500 to-cyan-400 opacity-80 transition-opacity hover:opacity-100'
                          style={{ height: `${height}%`, width: '12%' }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className='mt-4 flex justify-between text-xs text-gray-400'>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>

                {/* User Analytics */}
                <div className='rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'>
                  <h4 className='mb-6 font-semibold text-white'>
                    User Analytics
                  </h4>
                  <div className='space-y-4'>
                    {[
                      {
                        label: 'Desktop',
                        percentage: 68,
                        color: 'bg-blue-500',
                      },
                      {
                        label: 'Mobile',
                        percentage: 24,
                        color: 'bg-green-500',
                      },
                      {
                        label: 'Tablet',
                        percentage: 8,
                        color: 'bg-purple-500',
                      },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className='mb-2 flex items-center justify-between'>
                          <span className='text-sm text-gray-300'>
                            {item.label}
                          </span>
                          <span className='text-sm font-semibold text-white'>
                            {item.percentage}%
                          </span>
                        </div>
                        <div className='h-2 w-full rounded-full bg-white/10'>
                          <div
                            className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='mt-6 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4'>
                    <h5 className='mb-2 font-semibold text-white'>
                      Peak Hours
                    </h5>
                    <p className='text-sm text-gray-300'>
                      Most active: 2PM - 4PM (UTC+9)
                    </p>
                    <p className='text-sm text-gray-300'>
                      Conversion peak: 8PM - 10PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className='rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl'>
                <h4 className='mb-6 font-semibold text-white'>
                  Recent Activity
                </h4>
                <div className='space-y-4'>
                  {[
                    {
                      type: 'order',
                      message: 'New order #ORD-2024-1547 from Premium Customer',
                      time: '2 minutes ago',
                      amount: '₩850,000',
                      status: 'success',
                    },
                    {
                      type: 'user',
                      message: 'New enterprise account registration',
                      time: '15 minutes ago',
                      amount: null,
                      status: 'info',
                    },
                    {
                      type: 'alert',
                      message: 'Server response time increased by 12%',
                      time: '23 minutes ago',
                      amount: null,
                      status: 'warning',
                    },
                    {
                      type: 'payment',
                      message: 'Payment of ₩2,450,000 processed successfully',
                      time: '1 hour ago',
                      amount: '₩2,450,000',
                      status: 'success',
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20'
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          activity.status === 'success'
                            ? 'bg-green-500/20 text-green-300'
                            : activity.status === 'warning'
                              ? 'bg-orange-500/20 text-orange-300'
                              : 'bg-blue-500/20 text-blue-300'
                        }`}
                      >
                        {activity.type === 'order'
                          ? '🛒'
                          : activity.type === 'user'
                            ? '👤'
                            : activity.type === 'alert'
                              ? '⚠️'
                              : '💳'}
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm font-medium text-white'>
                          {activity.message}
                        </p>
                        <p className='text-xs text-gray-400'>{activity.time}</p>
                      </div>
                      {activity.amount && (
                        <div className='text-sm font-semibold text-green-300'>
                          {activity.amount}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className='mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-slate-900 to-gray-900 p-12 text-center shadow-2xl'>
            <div className='mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600'>
              <span className='text-4xl'>{service.icon}</span>
            </div>
            <h3 className='mb-4 text-2xl font-bold text-white'>
              {service.title}
            </h3>
            <p className='mx-auto mb-8 max-w-2xl text-gray-300'>
              {service.description}
            </p>
            <div className='rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6'>
              <p className='mb-2 font-semibold text-white'>
                🚀 Premium Demo Coming Soon
              </p>
              <p className='text-gray-300'>
                This service will feature a comprehensive interactive demo
                showcasing enterprise-level functionality and UI/UX excellence.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id='services'
      className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black'
    >
      {/* 간소화된 배경 효과 */}
      <div className='absolute inset-0'>
        <div className='absolute right-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl filter' />
        <div
          className='absolute bottom-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl filter'
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className='container relative z-10 mx-auto px-4 py-20'>
        {/* 섹션 헤더 */}
        <div className='mb-16 text-center'>
          <h2 className='mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
            Services & Solutions
          </h2>
          <div className='mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500' />
          <p className='mx-auto max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl'>
            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent'>
              Next.js & React 기반
            </span>
            으로 구현 가능한 엔터프라이즈급 솔루션들입니다.
            <span className='font-semibold text-emerald-400'>
              AI, 커머스, SaaS, 대시보드
            </span>{' '}
            등 모든 도메인의 고품질 인터페이스 개발이 가능합니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className='mb-12'>
          <div className='flex flex-wrap justify-center gap-3'>
            {updatedCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-xl border-2 px-4 py-3 font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'scale-105 border-blue-500/50 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'border-white/20 bg-white/10 text-gray-300 backdrop-blur-xl hover:border-white/40 hover:bg-white/20'
                }`}
              >
                <div className='flex items-center gap-2'>
                  <span className='text-lg'>{category.icon}</span>
                  <span>{category.name}</span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      activeCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}
                  >
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 서비스 그리드 */}
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filteredServices.map(service => (
            <div
              key={service.id}
              className='group transform rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-white/30'
            >
              {/* 서비스 헤더 */}
              <div className='mb-4 flex items-center gap-4'>
                <div
                  className={`h-12 w-12 bg-gradient-to-r ${service.color} flex items-center justify-center rounded-xl text-2xl shadow-lg`}
                >
                  {service.icon}
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-white transition-colors duration-300 group-hover:text-blue-300'>
                    {service.title}
                  </h3>
                  <div className='text-xs capitalize text-gray-400'>
                    {service.category}
                  </div>
                </div>
              </div>

              {/* 설명 */}
              <p className='mb-4 text-sm leading-relaxed text-gray-300'>
                {service.description}
              </p>

              {/* 주요 기능 */}
              <div className='mb-4'>
                <h4 className='mb-2 text-xs font-semibold text-gray-400'>
                  주요 기능
                </h4>
                <div className='flex flex-wrap gap-1'>
                  {service.features.slice(0, 4).map((feature, index) => (
                    <span
                      key={index}
                      className='inline-block rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200'
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* 기술 스택 */}
              <div className='mb-4'>
                <h4 className='mb-2 text-xs font-semibold text-gray-400'>
                  기술 스택
                </h4>
                <div className='flex flex-wrap gap-1'>
                  {service.tech.map((tech, index) => (
                    <span
                      key={index}
                      className='inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-2 py-1 text-xs text-blue-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA 버튼들 */}
              <div className='space-y-2'>
                <button
                  onClick={() => openDemo(service.id)}
                  className='w-full transform rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 font-semibold text-white transition-all duration-300 hover:shadow-lg group-hover:scale-105'
                >
                  데모 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 데모 모달 */}
      {demoModal.isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm'>
          <div className='relative max-h-[90vh] w-full max-w-4xl overflow-y-auto'>
            <button
              onClick={closeDemo}
              className='absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600'
            >
              ×
            </button>
            {renderDemo()}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
