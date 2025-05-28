# Jekyll + React + TypeScript + Tailwind CSS + Vite 하이브리드 포트폴리오

이 프로젝트는 Jekyll 정적 사이트 생성기와 React + TypeScript + Tailwind CSS + Vite를 결합한 현대적인 하이브리드 포트폴리오 웹사이트입니다.

## 🚀 주요 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Build Tools**: Vite 6.3 + Rollup
- **Package Manager**: pnpm
- **Static Site**: Jekyll
- **Type Safety**: TypeScript 5.2
- **Code Quality**: ESLint

## 🏗️ 프로젝트 구조

```
├── src/                    # React + TypeScript 소스 코드
│   ├── components/         # React 컴포넌트 (.tsx)
│   │   ├── ContactForm.tsx # 연락처 폼 컴포넌트
│   │   └── PortfolioGallery.tsx # 포트폴리오 갤러리
│   ├── entries/           # Vite 엔트리 포인트
│   │   ├── contact-form.ts # ContactForm 엔트리
│   │   └── portfolio-gallery.ts # PortfolioGallery 엔트리
│   ├── types/             # TypeScript 타입 정의
│   │   └── index.ts       # 공통 타입 정의
│   ├── styles/            # Tailwind CSS 스타일
│   │   └── main.css       # 메인 스타일 파일
│   └── main.ts            # 메인 엔트리 포인트
├── js/react-build/        # 빌드된 React 파일들
├── _posts/                # Jekyll 블로그 포스트
├── _layouts/              # Jekyll 레이아웃
├── _includes/             # Jekyll 인클루드 파일
├── package.json           # pnpm 의존성
├── pnpm-lock.yaml         # pnpm 락 파일
├── vite.config.ts         # Vite 설정
├── tsconfig.json          # TypeScript 설정
├── tailwind.config.js     # Tailwind CSS 설정
├── postcss.config.js      # PostCSS 설정
├── .eslintrc.js          # ESLint 설정
└── _config.yml           # Jekyll 설정
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
# Ruby 의존성 (Jekyll)
bundle install

# Node.js 의존성 (React + TypeScript + Vite)
pnpm install
```

### 2. 개발 서버 실행

```bash
# React(Vite)와 Jekyll을 동시에 실행 (권장)
pnpm start

# 또는 개별 실행
pnpm run dev          # Vite 개발 서버 (포트 3000)
pnpm run jekyll:serve # Jekyll 서버 (포트 4000)
```

### 3. 프로덕션 빌드

```bash
# React 빌드 후 Jekyll 빌드
pnpm run build:all

# 또는 개별 빌드
pnpm run build        # Vite로 React 빌드
pnpm run jekyll:build # Jekyll만 빌드
```

### 4. 코드 품질 검사

```bash
# TypeScript 타입 체크
pnpm run type-check

# ESLint 검사
pnpm run lint

# Vite 프리뷰 (빌드 결과 미리보기)
pnpm run preview

# 빌드 파일 정리
pnpm run clean
```

## 🎯 주요 기능

### Vite + React + TypeScript
- **⚡ 초고속 개발 서버**: ESM 기반으로 즉시 시작
- **🔥 빠른 HMR**: 파일 변경 시 즉시 반영 (50-200ms)
- **📦 최적화된 번들링**: Rollup 기반 프로덕션 빌드
- **🎯 타입 안전성**: 완전한 TypeScript 지원

### React 컴포넌트
- **인터랙티브 포트폴리오 갤러리**: 카테고리 필터링, 모달 상세보기
- **향상된 연락처 폼**: 실시간 유효성 검사, 상태 관리
- **반응형 디자인**: Tailwind CSS로 모바일 최적화

### Tailwind CSS 스타일링
- **유틸리티 우선**: 빠른 개발과 일관된 디자인
- **커스텀 컴포넌트**: 재사용 가능한 버튼, 폼, 카드 스타일
- **다크 모드 지원**: 자동 다크 모드 감지
- **애니메이션**: 부드러운 전환 효과

### Jekyll 기능
- **정적 사이트 생성**: 빠른 로딩, SEO 최적화
- **마크다운 지원**: 쉬운 콘텐츠 관리
- **GitHub Pages 호환**: 무료 호스팅

## 🔧 Vite 설정 커스터마이징

### 새로운 React 컴포넌트 추가

1. **컴포넌트 생성**
```bash
# src/components/NewComponent.tsx
import React from 'react';

interface NewComponentProps {
  title: string;
}

const NewComponent: React.FC<NewComponentProps> = ({ title }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-soft">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

export default NewComponent;
```

2. **엔트리 파일 생성** (`src/entries/new-component.ts`)
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import NewComponent from '@/components/NewComponent';
import '@/styles/main.css';

document.addEventListener('DOMContentLoaded', (): void => {
  const element = document.getElementById('react-new-component');
  if (element) {
    const root = ReactDOM.createRoot(element);
    root.render(React.createElement(NewComponent, { title: 'Hello' }));
  }
});
```

3. **Vite 설정 업데이트** (`vite.config.ts`)
```typescript
rollupOptions: {
  input: {
    'main': resolve(__dirname, 'src/main.ts'),
    'contact-form': resolve(__dirname, 'src/entries/contact-form.ts'),
    'portfolio-gallery': resolve(__dirname, 'src/entries/portfolio-gallery.ts'),
    'new-component': resolve(__dirname, 'src/entries/new-component.ts'), // 추가
  },
  // ...
}
```

4. **Jekyll 템플릿에 마운트 포인트 추가**
```html
<div id="react-new-component"></div>
<script src="{{ '/js/react-build/new-component.bundle.js' | relative_url }}"></script>
```

### Vite 플러그인 추가

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    // 새로운 플러그인 추가 예시
    // legacy({ targets: ['defaults', 'not IE 11'] }), // 레거시 브라우저 지원
  ],
  // ...
});
```

## ⚡ Vite vs Webpack 성능 비교

| 항목 | Vite | Webpack (이전) |
|------|------|----------------|
| **개발 서버 시작** | ~1초 | ~30-60초 |
| **HMR 속도** | 50-200ms | 1-5초 |
| **빌드 시간** | ~1.1초 | ~2.6초 |
| **번들 크기** | 최적화됨 | 최적화됨 |
| **설정 복잡도** | 간단 | 복잡 |

## 🌐 배포

### GitHub Pages
```bash
pnpm run build:all
git add .
git commit -m "Update Vite build"
git push origin main
```

### Vercel (권장)
```bash
# vercel.json 설정
{
  "buildCommand": "pnpm run build:all",
  "outputDirectory": "_site"
}
```

### Netlify
```bash
# netlify.toml 설정
[build]
  command = "pnpm run build:all"
  publish = "_site"
```

## 🧪 개발 팁

### Vite 활용
- **빠른 시작**: `pnpm run dev`로 즉시 개발 시작
- **HMR**: 파일 저장 시 즉시 브라우저 업데이트
- **TypeScript**: 별도 설정 없이 `.ts`, `.tsx` 파일 지원
- **CSS**: PostCSS + Tailwind 자동 처리

### TypeScript 활용
- 엄격한 타입 체크로 버그 방지
- IntelliSense로 개발 생산성 향상
- 리팩토링 안전성 보장

### Tailwind CSS 활용
- VS Code 확장: "Tailwind CSS IntelliSense"
- 클래스 자동완성 및 미리보기
- 커스텀 유틸리티 클래스 생성

### 성능 최적화
- Vite의 자동 코드 분할
- Tailwind CSS PurgeCSS로 미사용 스타일 제거
- React.memo()로 불필요한 리렌더링 방지

## 🐛 문제 해결

### 일반적인 문제들

**Vite 서버가 시작되지 않음**
```bash
# 포트 충돌 확인
lsof -ti:3000
# 프로세스 종료
kill -9 $(lsof -ti:3000)
```

**TypeScript 컴파일 에러**
```bash
pnpm run type-check
```

**Tailwind 스타일이 적용되지 않음**
```bash
# PostCSS 설정 확인
cat postcss.config.js
# Tailwind 설정 확인
cat tailwind.config.js
```

**빌드 에러**
```bash
# 캐시 정리 후 재빌드
pnpm run clean
pnpm run build
```

## 📄 라이선스

MIT License

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원

문제가 있거나 질문이 있으시면 이슈를 생성해주세요.

---

**Made with ❤️ using Jekyll + React + TypeScript + Tailwind CSS + Vite + pnpm**
