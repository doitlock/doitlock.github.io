import { useEffect, useRef } from 'react';
import { useLenisInstance } from './SmoothScrollProvider';

// 상단 스크롤 진행 바 (#progress)
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const lenis = useLenisInstance();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      el.style.width = (limit > 0 ? (scrollTop / limit) * 100 : 0) + '%';
    };

    onScroll();
    if (lenis) {
      lenis.on('scroll', onScroll);
      return () => lenis.off('scroll', onScroll);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lenis]);

  return <div id="progress" ref={ref} />;
}
