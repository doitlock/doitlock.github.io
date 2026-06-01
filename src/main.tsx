import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Swiper 기본 스타일 (우리 SCSS 가 이후에 로드되어 오버라이드)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles/style.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
