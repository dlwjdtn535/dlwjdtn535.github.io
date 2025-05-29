import React, { useMemo, useState } from 'react';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [demoModal, setDemoModal] = useState<{ isOpen: boolean; serviceId: number | null }>({
    isOpen: false,
    serviceId: null
  });

  // 데모 상태들 - 한국 맞춤형으로 업데이트
  const [chatMessages, setChatMessages] = useState<Array<{id: number, text: string, sender: 'user' | 'ai'}>>([
    { id: 1, text: '안녕하세요! 네이버 클로바 AI입니다. 무엇을 도와드릴까요?', sender: 'ai' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Array<{id: number, name: string, price: number, quantity: number}>>([]);
  const [dashboardData] = useState({
    users: 1245,
    revenue: 89432,
    orders: 234,
    growth: 12.5
  });

  // 한국형 배달/카페 아이템들
  const [deliveryItems] = useState([
    { id: 1, name: '불고기버거 세트', price: 12000, restaurant: '맥도날드', image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=200&fit=crop' },
    { id: 2, name: '양념치킨', price: 18000, restaurant: 'BBQ', image: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=300&h=200&fit=crop' },
    { id: 3, name: '김치찌개', price: 8000, restaurant: '한식당', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop' },
    { id: 4, name: '떡볶이 세트', price: 6000, restaurant: '분식집', image: 'https://images.unsplash.com/photo-1553978297-833d24e0d1e2?w=300&h=200&fit=crop' }
  ]);

  const [cafeItems] = useState([
    { id: 1, name: '아메리카노', price: 4500, category: '커피', image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=300&h=200&fit=crop' },
    { id: 2, name: '카라멜 마키아또', price: 5500, category: '커피', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop' },
    { id: 3, name: '녹차 프라푸치노', price: 6000, category: '음료', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop' },
    { id: 4, name: '크루아상', price: 3500, category: '디저트', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop' }
  ]);

  // 메모리 최적화: 서비스 데이터를 useMemo로 메모이제이션 - 데모가 있는 서비스만 포함
  const serviceCategories = useMemo(() => [
    { id: 'all', name: '전체', icon: '🚀', count: 0 },
    { id: 'ai', name: 'AI 서비스', icon: '🤖', count: 2 },
    { id: 'delivery', name: '배달/음식', icon: '🛵', count: 1 },
    { id: 'cafe', name: '카페', icon: '☕', count: 1 },
    { id: 'ecommerce', name: '이커머스', icon: '📦', count: 1 },
    { id: 'realestate', name: '부동산', icon: '🏠', count: 1 },
    { id: 'webtoon', name: '웹툰', icon: '📱', count: 1 },
    { id: 'fintech', name: '핀테크', icon: '💳', count: 1 },
    { id: 'saas', name: '협업툴', icon: '👥', count: 1 },
    { id: 'dashboard', name: '대시보드', icon: '📊', count: 1 }
  ], []);

  // 데모가 있는 서비스만 유지 - 한국 맞춤형으로 업데이트
  const services = useMemo(() => [
    // AI 앱
    {
      id: 1,
      title: '네이버 클로바 챗봇',
      category: 'ai',
      description: '한국어 특화 AI 챗봇 서비스 - 네이버 클로바와 GPT 연동',
      features: ['한국어 자연어처리', '실시간 채팅', '한국 문화 이해', 'API 통합'],
      tech: ['Next.js', 'Clova AI', 'TypeScript', 'Korean NLP'],
      icon: '🤖',
      color: 'from-green-500 to-emerald-600',
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
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
      hasDemo: true
    }
  ], []);

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
        count: services.filter(service => service.category === category.id).length
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
        sender: 'user' as const
      };
      setChatMessages(prev => [...prev, newMessage]);
      setChatInput('');
      
      // 한국어 AI 응답 시뮬레이션
      setTimeout(() => {
        const aiResponse = {
          id: chatMessages.length + 2,
          text: chatInput.includes('안녕') ? '안녕하세요! 네이버 클로바 AI 어시스턴트입니다. 궁금한 것이 있으시면 언제든 물어보세요! 😊' :
                chatInput.includes('날씨') ? '오늘 서울 날씨는 맑음이고 기온은 22도입니다. 미세먼지 농도는 보통이에요!' :
                chatInput.includes('음식') || chatInput.includes('맛집') ? '한국 음식 추천드릴게요! 김치찌개, 불고기, 떡볶이는 어떠세요? 근처 맛집도 찾아드릴 수 있어요!' :
                chatInput.includes('K-POP') || chatInput.includes('케이팝') ? 'K-POP 정말 좋죠! BTS, 블랙핑크, 뉴진스 등 어떤 그룹을 좋아하시나요?' :
                chatInput.includes('서울') || chatInput.includes('부산') ? '한국의 아름다운 도시들이죠! 관광지나 맛집 정보가 필요하시면 도움드릴게요!' :
                chatInput.includes('드라마') ? '한국 드라마 추천해드릴까요? 요즘 인기 있는 작품들이 많아요!' :
                chatInput.includes('게임') ? '한국 게임들이 세계적으로 인기죠! 리그 오브 레전드나 배틀그라운드 어떠세요?' :
                chatInput.includes('시간') ? `현재 한국 시간은 ${new Date().toLocaleTimeString('ko-KR')}입니다.` :
                chatInput.includes('쇼핑') ? '온라인 쇼핑이라면 쿠팡, 11번가, 이마트몰 등을 추천드려요! 어떤 제품을 찾고 계신가요?' :
                '흥미로운 질문이네요! 한국어로 더 자세히 설명해주시면 정확한 답변을 드릴 수 있을 것 같아요. 🤗',
          sender: 'ai' as const
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
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'  // Korean temple
      ];
      const randomImage = koreanImageUrls[Math.floor(Math.random() * koreanImageUrls.length)];
      setGeneratedImage(randomImage);
    }
  };

  const addToCart = (item: {name: string, price: number}) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.name === item.name 
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, {
        id: cartItems.length + 1,
        name: item.name,
        price: item.price,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const renderDemo = () => {
    const service = services.find(s => s.id === demoModal.serviceId);
    if (!service) return null;

    switch (service.id) {
      case 1: // 네이버 클로바 챗봇
        return (
          <div className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 rounded-2xl shadow-2xl max-w-5xl mx-auto overflow-hidden">
            {/* 상단 헤더 */}
            <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">네이버 클로바 AI</h3>
                    <div className="flex items-center gap-2 text-green-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">온라인 • 한국어 특화 AI</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    응답속도: 0.8초
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    정확도: 95.2%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-[500px]">
              {/* 채팅 영역 */}
              <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-800/50">
                  {chatMessages.map((message, index) => (
                    <div key={message.id} className={`flex gap-4 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                          : 'bg-gradient-to-br from-green-500 to-emerald-600'
                      }`}>
                        <span className="text-white text-sm font-bold">
                          {message.sender === 'user' ? '나' : 'AI'}
                        </span>
                      </div>
                      <div className={`max-w-md ${message.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                        <div className={`px-4 py-3 rounded-2xl backdrop-blur-xl shadow-lg ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white ml-auto'
                            : 'bg-white/10 text-gray-100 border border-white/20'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 px-2">
                          {new Date().toLocaleTimeString('ko-KR')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 입력 영역 */}
                <div className="p-6 bg-slate-800/30 border-t border-white/10">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                        placeholder="K-POP, 한국음식, 서울 여행 등 무엇이든 물어보세요..."
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={sendChatMessage}
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      전송
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                    <span>🇰🇷 한국어 최적화</span>
                    <span>⚡ 실시간 응답</span>
                    <span>🧠 문맥 이해</span>
                  </div>
                </div>
              </div>

              {/* 사이드바 */}
              <div className="w-80 bg-slate-800/30 border-l border-white/10 p-6">
                <h4 className="text-white font-semibold mb-4">AI 기능</h4>
                <div className="space-y-3">
                  {[
                    { icon: '🇰🇷', label: '한국어 처리', status: '활성' },
                    { icon: '🍜', label: '맛집 추천', status: '준비됨' },
                    { icon: '🎵', label: 'K-POP 정보', status: '활성' },
                    { icon: '🏢', label: '한국 여행', status: '활성' },
                    { icon: '📺', label: '드라마 추천', status: '준비됨' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-gray-300 text-sm">{item.label}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === '활성' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                  <h5 className="text-white font-semibold mb-2">오늘의 통계</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-300">
                      <span>오늘 질문:</span>
                      <span className="text-white font-semibold">2,847개</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>평균 응답:</span>
                      <span className="text-white font-semibold">0.8초</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>만족도:</span>
                      <span className="text-green-300 font-semibold">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // K-POP 이미지 생성기
        return (
          <div className="bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 rounded-2xl shadow-2xl max-w-6xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">K-POP 이미지 스튜디오</h3>
                    <p className="text-pink-200 text-sm">한국 문화 특화 AI 이미지 생성</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    해상도: 1024x1024
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    스타일: K-POP
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-[600px]">
              {/* 프롬프트 및 설정 */}
              <div className="w-96 bg-slate-800/30 p-6 border-r border-white/10">
                <h4 className="text-white font-semibold mb-4">생성 설정</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">프롬프트</label>
                    <textarea
                      value={imagePrompt}
                      onChange={(e) => setImagePrompt(e.target.value)}
                      placeholder="한복을 입은 K-POP 아이돌, 경복궁 배경, 벚꽃이 피는 봄날, 4K 화질..."
                      className="w-full h-24 px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">테마</label>
                      <select className="w-full px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <option>K-POP 아이돌</option>
                        <option>전통 한복</option>
                        <option>한국 궁궐</option>
                        <option>서울 야경</option>
                        <option>한국 음식</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">품질</label>
                      <select className="w-full px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <option>고화질 (1024x1024)</option>
                        <option>초고화질 (2048x2048)</option>
                        <option>8K (4096x4096)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={generateImage}
                    className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 shadow-lg"
                  >
                    🎨 이미지 생성하기
                  </button>

                  <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg p-4 border border-pink-500/30">
                    <h5 className="text-white font-semibold mb-2">생성 정보</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>예상 시간:</span>
                        <span className="text-white">15-30초</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>비용:</span>
                        <span className="text-white">무료</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>대기열:</span>
                        <span className="text-green-300">대기 없음</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 이미지 표시 영역 */}
              <div className="flex-1 bg-slate-800/50 p-6">
                <div className="h-full flex items-center justify-center">
                  {generatedImage ? (
                    <div className="relative group">
                      <img
                        src={generatedImage}
                        alt="K-POP AI Generated"
                        className="max-w-full max-h-full rounded-xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-end justify-end p-4 opacity-0 group-hover:opacity-100">
                        <div className="flex gap-2">
                          <button className="bg-white/20 backdrop-blur-xl text-white p-2 rounded-lg hover:bg-white/30 transition-all">
                            💾 저장
                          </button>
                          <button className="bg-white/20 backdrop-blur-xl text-white p-2 rounded-lg hover:bg-white/30 transition-all">
                            🔄 재생성
                          </button>
                          <button className="bg-white/20 backdrop-blur-xl text-white p-2 rounded-lg hover:bg-white/30 transition-all">
                            📤 공유
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <span className="text-4xl">🎨</span>
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-2">K-POP 이미지 생성기</h3>
                      <p className="text-gray-400">한국 문화와 K-POP을 반영한 AI 이미지를 생성해보세요</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // 배달의민족 클론
        return (
          <div className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 rounded-2xl shadow-2xl max-w-7xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">배달의민족</h3>
                    <p className="text-orange-200 text-sm">한국 최대 배달 음식 주문 플랫폼</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    🚗 평균 배달시간: 30분
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    📍 서울 강남구
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-[700px]">
              {/* 메뉴 리스트 */}
              <div className="flex-1 p-6 bg-slate-800/50 overflow-y-auto">
                <div className="mb-6">
                  <h4 className="text-white font-semibold text-lg mb-4">🍽️ 인기 맛집</h4>
                  <div className="flex gap-3 mb-4">
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold">전체</button>
                    <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20">치킨</button>
                    <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20">한식</button>
                    <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20">분식</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deliveryItems.map((item) => (
                    <div key={item.id} className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 hover:border-orange-500/50 transition-all duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          🔥 인기
                        </div>
                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                          ⭐ 4.8
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-400 text-sm">{item.restaurant}</span>
                          <span className="text-green-400 text-xs">🚗 25분</span>
                        </div>
                        <h4 className="text-white font-semibold mb-2">{item.name}</h4>
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-bold text-lg">{item.price.toLocaleString()}원</span>
                          <span className="text-gray-400 text-sm line-through">{(item.price + 2000).toLocaleString()}원</span>
                        </div>
                        
                        <button
                          onClick={() => addToCart(item)}
                          className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg"
                        >
                          🛒 담기
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 주문 요약 */}
              <div className="w-96 bg-slate-800/30 border-l border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-semibold">🛒 주문서</h4>
                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}개
                  </div>
                </div>

                <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
                  {cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-orange-400 text-xs font-bold">{item.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white text-sm font-medium">{item.name}</h5>
                        <p className="text-gray-400 text-xs">수량: {item.quantity}개</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold text-sm">{(item.price * item.quantity).toLocaleString()}원</p>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🍽️</span>
                      </div>
                      <p className="text-gray-400 text-sm">장바구니가 비어있어요</p>
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className="space-y-4">
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">주문금액:</span>
                        <span className="text-white font-semibold">{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}원</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">배달팁:</span>
                        <span className="text-white font-semibold">3,000원</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-white font-semibold">총 결제금액:</span>
                        <span className="text-white font-bold text-lg">{(cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 3000).toLocaleString()}원</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg">
                      🛵 주문하기
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
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
          <div className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 rounded-2xl shadow-2xl max-w-7xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-green-700 via-teal-700 to-green-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <span className="text-2xl">☕</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">스타벅스 코리아</h3>
                    <p className="text-green-200 text-sm">카페 키오스크 & 모바일 주문</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    📍 강남점
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    ⏰ 준비시간: 5분
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-[700px]">
              {/* 메뉴 선택 */}
              <div className="flex-1 p-6 bg-slate-800/50 overflow-y-auto">
                <div className="mb-6">
                  <div className="flex gap-3 mb-4">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold">전체</button>
                    <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20">커피</button>
                    <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20">음료</button>
                    <button className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg hover:bg-white/20">디저트</button>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {cafeItems.map((item) => (
                    <div key={item.id} className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 hover:border-green-500/50 transition-all duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {item.category}
                        </div>
                        {item.name.includes('아메리카노') && (
                          <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                            BEST
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <h4 className="text-white font-semibold mb-2">{item.name}</h4>
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-bold text-lg">{item.price.toLocaleString()}원</span>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-sm">⭐</span>
                            <span className="text-gray-300 text-sm">4.5</span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => addToCart(item)}
                          className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                        >
                          ☕ 담기
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 주문 요약 */}
              <div className="w-96 bg-slate-800/30 border-l border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-semibold">☕ 주문서</h4>
                  <div className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}개
                  </div>
                </div>

                <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
                  {cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                        <span className="text-green-400 text-xs font-bold">☕</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white text-sm font-medium">{item.name}</h5>
                        <p className="text-gray-400 text-xs">수량: {item.quantity}개</p>
                        <p className="text-gray-400 text-xs">옵션: ICE, 일반</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold text-sm">{(item.price * item.quantity).toLocaleString()}원</p>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">☕</span>
                      </div>
                      <p className="text-gray-400 text-sm">주문할 음료를 선택해주세요</p>
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className="space-y-4">
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">상품금액:</span>
                        <span className="text-white font-semibold">{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}원</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">스타 적립:</span>
                        <span className="text-yellow-400 font-semibold">+12⭐</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-white font-semibold">총 결제금액:</span>
                        <span className="text-white font-bold text-lg">{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}원</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg">
                      ☕ 주문하기
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
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
          <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 rounded-2xl shadow-2xl max-w-7xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AppleStore Pro</h3>
                    <p className="text-emerald-200 text-sm">Enterprise E-commerce Platform</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    1,247 Products
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    Live Inventory
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-[700px]">
              {/* 상품 그리드 */}
              <div className="flex-1 p-6 bg-slate-800/50 overflow-y-auto">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      name: 'MacBook Pro 16"', 
                      price: 2590000, 
                      originalPrice: 2890000,
                      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
                      badge: '10% OFF',
                      rating: 4.9,
                      reviews: 1247
                    },
                    { 
                      name: 'iPhone 15 Pro Max', 
                      price: 1550000,
                      originalPrice: 1690000, 
                      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
                      badge: 'BEST SELLER',
                      rating: 4.8,
                      reviews: 2156
                    },
                    { 
                      name: 'AirPods Pro 2nd', 
                      price: 350000,
                      originalPrice: 380000,
                      image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop',
                      badge: 'NEW',
                      rating: 4.7,
                      reviews: 892
                    },
                    { 
                      name: 'iPad Pro 12.9"', 
                      price: 1450000,
                      originalPrice: 1580000,
                      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop',
                      badge: '8% OFF',
                      rating: 4.9,
                      reviews: 634
                    },
                    { 
                      name: 'Apple Watch Ultra', 
                      price: 1090000,
                      originalPrice: 1150000,
                      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop',
                      badge: 'LIMITED',
                      rating: 4.8,
                      reviews: 445
                    },
                    { 
                      name: 'Mac Studio', 
                      price: 2890000,
                      originalPrice: 3100000,
                      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
                      badge: 'PREMIUM',
                      rating: 4.9,
                      reviews: 178
                    }
                  ].map((product, index) => (
                    <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            product.badge === 'BEST SELLER' ? 'bg-orange-500 text-white' :
                            product.badge === 'NEW' ? 'bg-green-500 text-white' :
                            product.badge === 'LIMITED' ? 'bg-red-500 text-white' :
                            product.badge === 'PREMIUM' ? 'bg-purple-500 text-white' :
                            'bg-blue-500 text-white'
                          }`}>
                            {product.badge}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <button className="w-8 h-8 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all">
                            ♡
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="text-white font-semibold mb-2">{product.name}</h4>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
                                ⭐
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-400 text-xs">({product.reviews})</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-white font-bold text-lg">₩{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-gray-400 text-sm line-through">₩{product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                        
                        <button
                          onClick={() => addToCart(product)}
                          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 장바구니 사이드바 */}
              <div className="w-96 bg-slate-800/30 border-l border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-semibold">Shopping Cart</h4>
                  <div className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
                  </div>
                </div>

                <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
                  {cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-400 text-xs font-bold">{item.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white text-sm font-medium">{item.name}</h5>
                        <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold text-sm">₩{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🛒</span>
                      </div>
                      <p className="text-gray-400 text-sm">Your cart is empty</p>
                    </div>
                  )}
                </div>

                {cartItems.length > 0 && (
                  <div className="space-y-4">
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Subtotal:</span>
                        <span className="text-white font-semibold">₩{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Shipping:</span>
                        <span className="text-green-400 font-semibold">FREE</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-white font-semibold">Total:</span>
                        <span className="text-white font-bold text-lg">₩{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg">
                      Proceed to Checkout
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
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
          <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-2xl shadow-2xl max-w-7xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-gray-600 via-slate-600 to-gray-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Executive Dashboard</h3>
                    <p className="text-gray-200 text-sm">Real-time Business Intelligence</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-xl px-3 py-1 rounded-full text-white text-xs">
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                  <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs border border-green-500/30">
                    All Systems Operational
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 h-[700px] overflow-y-auto">
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { 
                    title: 'Total Revenue', 
                    value: '₩47.2M', 
                    change: '+12.5%', 
                    changeType: 'positive', 
                    icon: '💰',
                    color: 'from-green-500 to-emerald-600'
                  },
                  { 
                    title: 'Active Users', 
                    value: '28.4K', 
                    change: '+8.2%', 
                    changeType: 'positive', 
                    icon: '👥',
                    color: 'from-blue-500 to-cyan-600'
                  },
                  { 
                    title: 'Conversion Rate', 
                    value: '3.24%', 
                    change: '+0.8%', 
                    changeType: 'positive', 
                    icon: '📈',
                    color: 'from-purple-500 to-pink-600'
                  },
                  { 
                    title: 'Avg Order Value', 
                    value: '₩186K', 
                    change: '-2.1%', 
                    changeType: 'negative', 
                    icon: '🛒',
                    color: 'from-orange-500 to-red-600'
                  }
                ].map((kpi, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${kpi.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl">{kpi.icon}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        kpi.changeType === 'positive' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                      }`}>
                        {kpi.change}
                      </div>
                    </div>
                    <h3 className="text-gray-400 text-sm font-medium mb-1">{kpi.title}</h3>
                    <p className="text-white text-2xl font-bold">{kpi.value}</p>
                  </div>
                ))}
              </div>

              {/* Charts and Analytics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-white font-semibold">Revenue Trend</h4>
                    <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                    </select>
                  </div>
                  <div className="relative h-48 bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg border border-blue-500/20">
                    <div className="absolute inset-4 flex items-end justify-between">
                      {[65, 45, 75, 85, 70, 90, 95].map((height, index) => (
                        <div key={index} className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t opacity-80 hover:opacity-100 transition-opacity cursor-pointer" style={{ height: `${height}%`, width: '12%' }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-gray-400">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                {/* User Analytics */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                  <h4 className="text-white font-semibold mb-6">User Analytics</h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Desktop', percentage: 68, color: 'bg-blue-500' },
                      { label: 'Mobile', percentage: 24, color: 'bg-green-500' },
                      { label: 'Tablet', percentage: 8, color: 'bg-purple-500' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 text-sm">{item.label}</span>
                          <span className="text-white font-semibold text-sm">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div className={`${item.color} h-2 rounded-full transition-all duration-1000`} style={{ width: `${item.percentage}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                    <h5 className="text-white font-semibold mb-2">Peak Hours</h5>
                    <p className="text-gray-300 text-sm">Most active: 2PM - 4PM (UTC+9)</p>
                    <p className="text-gray-300 text-sm">Conversion peak: 8PM - 10PM</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-semibold mb-6">Recent Activity</h4>
                <div className="space-y-4">
                  {[
                    { 
                      type: 'order', 
                      message: 'New order #ORD-2024-1547 from Premium Customer', 
                      time: '2 minutes ago', 
                      amount: '₩850,000',
                      status: 'success' 
                    },
                    { 
                      type: 'user', 
                      message: 'New enterprise account registration', 
                      time: '15 minutes ago', 
                      amount: null,
                      status: 'info' 
                    },
                    { 
                      type: 'alert', 
                      message: 'Server response time increased by 12%', 
                      time: '23 minutes ago', 
                      amount: null,
                      status: 'warning' 
                    },
                    { 
                      type: 'payment', 
                      message: 'Payment of ₩2,450,000 processed successfully', 
                      time: '1 hour ago', 
                      amount: '₩2,450,000',
                      status: 'success' 
                    }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.status === 'success' ? 'bg-green-500/20 text-green-300' :
                        activity.status === 'warning' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {activity.type === 'order' ? '🛒' : 
                         activity.type === 'user' ? '👤' : 
                         activity.type === 'alert' ? '⚠️' : '💳'}
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">{activity.message}</p>
                        <p className="text-gray-400 text-xs">{activity.time}</p>
                      </div>
                      {activity.amount && (
                        <div className="text-green-300 font-semibold text-sm">
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
          <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl shadow-2xl max-w-4xl mx-auto p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{service.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{service.description}</p>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
              <p className="text-white font-semibold mb-2">🚀 Premium Demo Coming Soon</p>
              <p className="text-gray-300">
                This service will feature a comprehensive interactive demo showcasing enterprise-level functionality and UI/UX excellence.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* 간소화된 배경 효과 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Services & Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">Next.js & React 기반</span>으로 
            구현 가능한 엔터프라이즈급 솔루션들입니다. 
            <span className="text-emerald-400 font-semibold">AI, 커머스, SaaS, 대시보드</span> 등 
            모든 도메인의 고품질 인터페이스 개발이 가능합니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {updatedCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500/50 shadow-lg scale-105'
                    : 'bg-white/10 backdrop-blur-xl text-gray-300 border-white/20 hover:border-white/40 hover:bg-white/20'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 서비스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* 서비스 헤더 */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="text-xs text-gray-400 capitalize">
                    {service.category}
                  </div>
                </div>
              </div>

              {/* 설명 */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* 주요 기능 */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">주요 기능</h4>
                <div className="flex flex-wrap gap-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-block bg-emerald-500/20 text-emerald-200 px-2 py-1 rounded-full text-xs border border-emerald-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* 기술 스택 */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-400 mb-2">기술 스택</h4>
                <div className="flex flex-wrap gap-1">
                  {service.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA 버튼들 */}
              <div className="space-y-2">
                <button 
                  onClick={() => openDemo(service.id)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform group-hover:scale-105"
                >
                  🚀 라이브 데모 체험
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              왜 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">이런 퀄리티</span>가 가능한가?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-semibold text-white mb-2">모던 UI/UX</h4>
                <p className="text-sm text-gray-400">최신 디자인 트렌드 적용</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-white mb-2">성능 최적화</h4>
                <p className="text-sm text-gray-400">빠른 로딩과 부드러운 UX</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold text-white mb-2">반응형 디자인</h4>
                <p className="text-sm text-gray-400">모든 디바이스 완벽 대응</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30">
              <p className="text-white text-lg font-semibold mb-2">
                🚀 Enterprise급 UI/UX 개발
              </p>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">10년+ 경험</span>을 바탕으로 한 모던한 디자인 시스템과 
                <span className="text-emerald-400 font-semibold"> Next.js, React, TypeScript</span> 등 최신 기술 스택으로 
                사용자 경험을 극대화한 인터페이스를 제작합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 데모 모달 */}
      {demoModal.isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeDemo}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
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