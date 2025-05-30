import React from 'react';

import { useScrollProgress } from '@/hooks/useScrollAnimation';

export const ScrollProgress: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className='fixed left-0 top-0 z-50 h-1 w-full bg-gray-200/20'>
      <div
        className='h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
        style={{
          width: `${scrollProgress}%`,
          transform: `translateZ(0)`, // GPU 가속을 위한 하드웨어 가속 활성화
        }}
      />
    </div>
  );
};
