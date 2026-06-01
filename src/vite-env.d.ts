/// <reference types="vite/client" />

// Swiper CSS는 import 경로가 ".css"로 끝나지 않아 vite/client의
// `declare module '*.css'` 와일드카드에 매칭되지 않는다. 직접 선언해 준다.
declare module 'swiper/css';
declare module 'swiper/css/*';
