import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// 기존 main.js 의 GSAP 스크롤 애니메이션 이식.
// (Lenis / Nav / Modal / Swiper / Filter 는 각 컴포넌트에서 처리)
export default function useMainAnimations() {
  useGSAP(() => {
    // HERO intro
    gsap
      .timeline({ defaults: { ease: 'power4.out' } })
      .to('.hero-name-line span', { y: '0%', duration: 1.1, stagger: 0.14 })
      .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 }, '-=.7')
      .to('.hero-title-block', { opacity: 1, y: 0, duration: 0.8 }, '-=.55')
      .to('#heroScroll', { opacity: 1, duration: 0.6 }, '-=.3');

    // section lines / titles / nums
    gsap.utils.toArray<HTMLElement>('.section-line-el').forEach((el) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.3,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });
    gsap.utils.toArray<HTMLElement>('.section-title').forEach((el) => {
      gsap.from(el, {
        x: 70,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });
    gsap.utils.toArray<HTMLElement>('.section-num').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 10,
        duration: 0.7,
        scrollTrigger: { trigger: el, start: 'top 90%' },
      });
    });

    // ABOUT
    gsap.from('.about-quote', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.about-quote', start: 'top 80%' },
    });
    gsap.from('.about-card', {
      opacity: 0,
      y: 50,
      stagger: 0.18,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#aboutCards', start: 'top 80%' },
    });

    // SKILLS
    gsap.from('.skill-block', {
      opacity: 0,
      y: 80,
      stagger: 0.13,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#skillsGrid', start: 'top 78%' },
    });

    // CAREER
    gsap.utils.toArray<HTMLElement>('.career-item').forEach((item) => {
      const bar = item.querySelector('.career-item-bar');
      gsap
        .timeline({ scrollTrigger: { trigger: item, start: 'top 82%' } })
        .from(item, { opacity: 0, x: -50, duration: 0.9, ease: 'power3.out' })
        .to(bar, { scaleY: 1, duration: 1.1, ease: 'power2.out' }, '-=.6');
    });

    // PROJECT LIST
    // fromTo 로 종료값(opacity:1, y:0)을 명시해, 다른 코드가 인라인 opacity 를
    // 0 으로 박아둔 경우에도 스크롤 인트로가 0→0 으로 회귀하지 않도록 방어한다.
    gsap.fromTo(
      '.plist-row',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.055,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: '#plistWrap', start: 'top 82%' },
      },
    );

    // EDUCATION
    gsap.from('.edu-item', {
      opacity: 0,
      x: -40,
      stagger: 0.16,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: '#eduList', start: 'top 82%' },
    });

    // CONTACT
    gsap
      .timeline({ scrollTrigger: { trigger: '.contact', start: 'top 70%' } })
      .from('#ctaEyebrow', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' })
      .from(
        '#ctaHead',
        {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power4.out',
          onStart: () => document.querySelector('#ctaHead')?.classList.add('active'),
        },
        '-=.3',
      )
      .from('#ctaDesc', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=.5');

    // 대용량 이미지/GIF 가 늦게 로드되면 문서 높이가 바뀌어 스크롤 트리거 위치가
    // 어긋난다. 로드 완료 시점에 ScrollTrigger 위치를 재계산한다.
    if (document.readyState === 'complete') {
      ScrollTrigger.refresh();
    } else {
      window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
    }
  });
}
