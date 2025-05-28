import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  
  // Path aliases 설정 (tsconfig.json과 동일)
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/types': resolve(__dirname, 'src/types'),
      '@/utils': resolve(__dirname, 'src/utils'),
    },
  },

  // 개발 서버 설정
  server: {
    port: 3000,
    open: '/index-dev.html', // 개발용 HTML 파일 경로 지정
    cors: true,
    host: true, // 외부 접속 허용
  },

  // 개발용 HTML 파일 설정
  root: '.',
  publicDir: 'img', // 이미지 등 정적 파일 디렉토리

  // 빌드 설정
  build: {
    outDir: 'js/react-build',
    emptyOutDir: true,
    sourcemap: true,
    
    // 단일 엔트리 포인트 설정
    rollupOptions: {
      input: {
        'app': resolve(__dirname, 'src/main.ts'), // 모든 컴포넌트를 포함하는 단일 엔트리
      },
      output: {
        entryFileNames: '[name].bundle.js',
        chunkFileNames: '[name].chunk.js',
        assetFileNames: '[name].[ext]',
        // 코드 분할 비활성화 - 모든 것을 하나의 파일로
        manualChunks: undefined,
      },
    },
    
    // 번들 크기 경고 임계값 증가 (단일 파일이므로)
    chunkSizeWarningLimit: 2000,
  },

  // CSS 설정
  css: {
    postcss: './postcss.config.js',
  },

  // TypeScript 설정
  esbuild: {
    target: 'es2020',
  },
}); 