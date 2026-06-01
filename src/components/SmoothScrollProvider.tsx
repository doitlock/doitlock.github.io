import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);
export const useLenisInstance = () => useContext(LenisContext);

// 기존 main.js 의 Lenis 로직 이식:
// - 1024px 이하(모바일/태블릿)에서는 Lenis 파괴 후 네이티브 스크롤 사용
// - GSAP ticker 로 raf 구동, scroll 이벤트로 ScrollTrigger 갱신
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const createLenis = () => {
      if (window.innerWidth <= 1024) return;
      if (lenisRef.current) return;

      const instance = new Lenis({
        smoothWheel: true,
        syncTouch: false,
        prevent: (node) => !!node.closest('.modal'),
      });
      instance.on('scroll', ScrollTrigger.update);
      lenisRef.current = instance;
      setLenis(instance);
    };

    const destroyLenis = () => {
      if (!lenisRef.current) return;
      lenisRef.current.destroy();
      lenisRef.current = null;
      setLenis(null);
    };

    const handleByScreen = () => {
      if (window.innerWidth <= 1024) destroyLenis();
      else createLenis();
    };

    const update = (time: number) => {
      lenisRef.current?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    handleByScreen();
    window.addEventListener('resize', handleByScreen);

    return () => {
      window.removeEventListener('resize', handleByScreen);
      gsap.ticker.remove(update);
      destroyLenis();
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
