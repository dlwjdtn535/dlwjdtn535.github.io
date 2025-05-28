import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@/App';

// Tailwind CSS 스타일 import
import './styles/main.css';

// DOM이 로드된 후 App 컴포넌트를 마운트
document.addEventListener('DOMContentLoaded', (): void => {
  // React App을 #react-app에 마운트
  const appElement = document.getElementById('react-app');
  if (appElement) {
    const appRoot = ReactDOM.createRoot(appElement);
    appRoot.render(React.createElement(App));
    console.log('React SPA가 성공적으로 초기화되었습니다!');
  } else {
    console.error('#react-app 엘리먼트를 찾을 수 없습니다!');
  }
});
