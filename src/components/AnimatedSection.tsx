import React from 'react';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?:
    | 'fadeInUp'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'fadeIn'
    | 'scaleIn'
    | 'slideInUp';
  delay?: number;
  duration?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 'duration-1000',
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.15,
    rootMargin: '-100px',
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ${duration} ease-out`;

    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClasses} opacity-0 translate-y-16`;
        case 'fadeInLeft':
          return `${baseClasses} opacity-0 -translate-x-16`;
        case 'fadeInRight':
          return `${baseClasses} opacity-0 translate-x-16`;
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-95`;
        case 'slideInUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        default:
          return `${baseClasses} opacity-0 translate-y-16`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: number;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  className = '',
  speed = 0.5,
  offset = 0,
}) => {
  const { ref, scrollY } = useScrollAnimation();
  const parallaxOffset = scrollY * speed + offset;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        transform: `translateY(${parallaxOffset}px)`,
      }}
    >
      {children}
    </div>
  );
};

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '-50px',
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};
