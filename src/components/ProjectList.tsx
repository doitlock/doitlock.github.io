import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectList, type ProjectType } from '../data/projects';
import { useModal } from '../context/ModalContext';
import { useLenisInstance } from './SmoothScrollProvider';

type Filter = 'all' | ProjectType;

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: '구축', label: '구축' },
  { key: '운영', label: '운영' },
];

export default function ProjectList() {
  const { openModal } = useModal();
  const lenis = useLenisInstance();
  const [filter, setFilter] = useState<Filter>('all');
  const wrapRef = useRef<HTMLDivElement>(null);
  // 초기 filter('all') 와 같은 값으로 두어 mount + StrictMode 2차 setup 모두 no-op 이 되게 한다.
  // (null 로 두면 null !== 'all' 이라 mount 때 가드를 통과해 버그가 재현되므로 주의)
  const prevFilter = useRef<Filter>('all');

  // 필터 전환 애니메이션 (기존 main.js runFilter 이식)
  useGSAP(
    () => {
      // mount 및 StrictMode 2차 setup 은 filter 가 동일하므로 스킵한다.
      // 최초 진입 인트로는 useMainAnimations 의 스크롤 트리거에 위임.
      if (prevFilter.current === filter) return;
      prevFilter.current = filter;
      const wrap = wrapRef.current;
      if (!wrap) return;

      const rows = gsap.utils.toArray<HTMLElement>('.plist-row', wrap);
      const show: HTMLElement[] = [];
      const hide: HTMLElement[] = [];
      rows.forEach((row) => {
        if (filter === 'all' || row.dataset.type === filter) show.push(row);
        else hide.push(row);
      });

      if (hide.length) {
        gsap.to(hide, {
          opacity: 0,
          y: -10,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => {
            hide.forEach((r) => r.classList.add('is-hidden'));
            ScrollTrigger.refresh();
            lenis?.resize();
          },
        });
      }

      show.forEach((r) => {
        r.classList.remove('is-hidden');
        gsap.set(r, { opacity: 0, y: 14 });
      });
      gsap.to(show, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
        stagger: 0.055,
        delay: hide.length ? 0.22 : 0,
        onComplete: () => {
          ScrollTrigger.refresh();
          lenis?.resize();
        },
      });
    },
    { dependencies: [filter] },
  );

  return (
    <section className="section proj-list" id="projects">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-num">💡</span>
          <div className="section-line-el"></div>
          <h2 className="section-title">All Projects</h2>
        </div>

        <div className="filter-bar" id="filterBar">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-btn${filter === f.key ? ' is-active' : ''}`}
              data-filter={f.key}
              onClick={() => setFilter(f.key)}
            >
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        <div id="plistWrap" className="plist-wrap" ref={wrapRef}>
          {projectList.map((p) => (
            <div className="plist-row" data-type={p.type} key={p.id} onClick={() => openModal(p.id)}>
              <div className="plist-row-bg"></div>
              <div className="plist-main">
                <span className="plist-name">{p.name}</span>
                <span className="plist-sub">{p.sub}</span>
              </div>
              <div className="plist-right">
                <span className="plist-period">{p.period}</span>
                <span className="plist-link">자세히보기</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
