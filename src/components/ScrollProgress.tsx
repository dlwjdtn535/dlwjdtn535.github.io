import { useScrollProgress } from '@/hooks/useScrollAnimation';
import React from 'react';

export const ScrollProgress: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200/20">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}; 