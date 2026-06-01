import type { CSSProperties } from 'react';

type Floaty = {
  kind: 'emoji' | 'skill';
  label: string;
  top: number; // %
  left: number; // %
  rot: number; // deg
  dur: number; // float 주기 (s)
  delay: number; // 등장/플로팅 지연 (s)
  range: number; // 위아래 이동 폭 (rem)
  size?: number; // 이모지 폰트 크기 (rem)
  accent?: boolean; // skill 칩 강조(그라데이션) 여부
};

// assistantly.com 의 .footer_emojis-wrapper 처럼 섹션 주변에 흩뿌려 둥둥 떠다니게.
// 중앙(이름 영역)을 비우고 상단 밴드 + 좌우 여백에 배치, 이모지와 Skill 칩을 교차.
const floaties: Floaty[] = [
  { kind: 'skill', label: 'HTML', top: 11, left: 7, rot: -8, dur: 7, delay: 0.1, range: 1.4 },
  { kind: 'emoji', label: '🚀', top: 18, left: 19, rot: 6, dur: 6.2, delay: 0.5, range: 1.6, size: 3.4 },
  { kind: 'skill', label: 'SCSS', top: 8, left: 32, rot: -5, dur: 7.6, delay: 0.8, range: 1.2 },
  { kind: 'emoji', label: '✨', top: 13, left: 47, rot: 8, dur: 6.8, delay: 0.25, range: 1.5, size: 2.8 },
  { kind: 'skill', label: 'GSAP', top: 9, left: 60, rot: 5, dur: 7.2, delay: 0.6, range: 1.3, accent: true },
  { kind: 'emoji', label: '🎨', top: 16, left: 78, rot: -7, dur: 6.4, delay: 1, range: 1.7, size: 3.2 },
  { kind: 'skill', label: 'React', top: 8, left: 90, rot: 7, dur: 7.8, delay: 0.35, range: 1.2, accent: true },
  { kind: 'emoji', label: '🔥', top: 31, left: 10, rot: -6, dur: 6.6, delay: 0.9, range: 1.6, size: 3 },
  { kind: 'skill', label: 'Vue', top: 24, left: 27, rot: 5, dur: 8, delay: 0.45, range: 1.3 },
  { kind: 'emoji', label: '🤝', top: 22, left: 70, rot: -5, dur: 6.3, delay: 0.75, range: 1.5, size: 3 },
  { kind: 'skill', label: 'JavaScript', top: 41, left: 6, rot: 6, dur: 7.4, delay: 0.55, range: 1.4 },
  { kind: 'emoji', label: '💡', top: 28, left: 88, rot: 8, dur: 6, delay: 0.7, range: 1.6, size: 3.2 },
  { kind: 'skill', label: 'Figma', top: 39, left: 92, rot: -6, dur: 7.1, delay: 0.2, range: 1.3, accent: true },
  { kind: 'emoji', label: '⚡', top: 52, left: 5, rot: 6, dur: 6.9, delay: 1.1, range: 1.5, size: 2.8 },
  { kind: 'skill', label: 'Swiper', top: 50, left: 91, rot: -7, dur: 7.3, delay: 0.4, range: 1.2 },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-floaties" aria-hidden="true">
        {floaties.map((f, i) => (
          <span
            key={`${f.label}-${i}`}
            className="hero-floaty"
            style={
              {
                '--top': `${f.top}%`,
                '--left': `${f.left}%`,
                '--rot': `${f.rot}deg`,
                '--dur': `${f.dur}s`,
                '--delay': `${f.delay}s`,
                '--range': `${f.range}rem`,
                ...(f.size ? { '--size': `${f.size}rem` } : {}),
              } as CSSProperties
            }
          >
            <span
              className={
                f.kind === 'emoji'
                  ? 'hero-floaty-tile is-emoji'
                  : `hero-floaty-tile is-skill${f.accent ? ' is-accent' : ''}`
              }
            >
              {f.label}
            </span>
          </span>
        ))}
      </div>
      <div className="section-inner">
        <p className="hero-eyebrow">
          Frontend UI Developer · <span className="accent">5 Years</span>
        </p>
        <div className="hero-name" id="heroName">
          <span className="hero-name-line">
            <span>홍수기</span>
          </span>
          <span className="hero-name-line outline">
            <span>
              Ui developer
              <br />
              Portfolio
            </span>
          </span>
        </div>
        <div className="hero-sub-row">
          <div className="hero-title-block">
            <p className="hero-title">
              브랜드 경험을 고려한 UI와
              <br className="mo-only" /> 웹 퍼블리싱에 집중해온 UI개발자 🤝
            </p>
            <div className="hero-tags">
              <span className="hero-tag">Semantic Markup</span>
              <span className="hero-tag">Component-Based UI</span>
              <span className="hero-tag">JavaScript / ES6+</span>
              <span className="hero-tag">Interactive UI</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll" id="heroScroll">
          <div className="hero-scroll-track"></div>
          scroll
        </div>
        <div className="hero-util">
          <div className="util-list">
            <a
              className="util-item"
              href="https://www.notion.so/1e0c21a4d176809a9c81cc6f24942084?source=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M10 2v6l2.5-1.5L15 8V2" />
              </svg>
              Notion
            </a>
            <a className="util-item" href="https://doitlock.tistory.com/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <line x1="9" y1="10" x2="15" y2="10" />
                <line x1="9" y1="14" x2="13" y2="14" />
              </svg>
              Blog
            </a>
            <a className="util-item" href="mailto:doitlock@gmail.com" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24"
                height="24"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
