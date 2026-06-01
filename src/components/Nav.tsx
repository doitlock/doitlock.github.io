import { useEffect, useRef, type MouseEvent } from 'react';
import { useLenisInstance } from './SmoothScrollProvider';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#career', label: 'Career' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const lastScroll = useRef(0);
  const lenis = useLenisInstance();

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const current = window.scrollY || document.documentElement.scrollTop;

      // 스크롤 60 이상이면 배경 적용
      nav.classList.toggle('scrolled', current > 60);

      // 최상단
      if (current <= 0) {
        nav.classList.remove('hide');
        lastScroll.current = current;
        return;
      }
      // 아래로 스크롤 시 숨김, 위로 스크롤 시 노출
      if (current > lastScroll.current && current > 10) nav.classList.add('hide');
      else nav.classList.remove('hide');

      lastScroll.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav id="nav" ref={navRef}>
      <div className="nav-logo">HONGSUKI PORTFOLIO</div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
