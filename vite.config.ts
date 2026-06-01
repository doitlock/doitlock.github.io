import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// doitlock.github.io 는 유저 페이지 레포라 루트(/)로 배포된다.
export default defineConfig({
  base: '/',
  plugins: [react()],
  css: {
    // 개발자도구에서 컴파일된 CSS 대신 원본 SCSS 파일·줄 번호를 표시
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // 기존 SCSS 의 @import 폐기 예정 경고를 억제 (점진적 @use 전환 전까지)
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
