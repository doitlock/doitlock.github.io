export default function Hero() {
  return (
    <section className="hero" id="hero">
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
              UI DEVELOPER
              <br />
              PORTFOLIO
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
