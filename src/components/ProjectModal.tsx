import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { projects } from '../data/projects';
import { useModal } from '../context/ModalContext';
import { useLenisInstance } from './SmoothScrollProvider';

// 프로젝트 상세 모달 (기존 Bootstrap pj-modal 을 React 상태로 제어)
export default function ProjectModal() {
  const { activeId, closeModal } = useModal();
  const lenis = useLenisInstance();
  const contentRef = useRef<HTMLDivElement>(null);
  const project = projects.find((p) => p.id === activeId);

  // 모달 열림 시 Lenis 정지, 닫힘 시 재개
  useEffect(() => {
    if (activeId) lenis?.stop();
    else lenis?.start();
  }, [activeId, lenis]);

  // ESC 로 닫기
  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeId, closeModal]);

  // 콘텐츠 등장 애니메이션
  useGSAP(
    () => {
      if (activeId && contentRef.current) {
        gsap.from(contentRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          clearProps: 'all',
        });
      }
    },
    { dependencies: [activeId] },
  );

  if (!project) return null;

  return (
    <>
      <div className="modal-backdrop show" onClick={closeModal} />
      <div
        className="modal fade pj-modal show"
        style={{ display: 'block' }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content" ref={contentRef}>
            <div className="modal-header">
              <div>
                <p className="modal-eyebrow">{project.eyebrow}</p>
                <h5 className="modal-title">{project.title}</h5>
              </div>
              <button type="button" className="btn-close" aria-label="닫기" onClick={closeModal} />
            </div>
            <div className="modal-body">
              <div className="modal-meta-row">
                {project.meta.map((m) => (
                  <div className="modal-meta-cell" key={m.label}>
                    <p className="modal-meta-label">{m.label}</p>
                    <p className="modal-meta-val">{m.value}</p>
                  </div>
                ))}
              </div>

              {project.sections.map((s) => (
                <div className="modal-section" key={s.title}>
                  <p className="modal-section-title">{s.title}</p>
                  {s.desc && <p className="modal-section-desc">{s.desc}</p>}
                  {s.items && s.title === '사용 기술' && (
                    <div className="modal-stack">
                      {s.items.map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {s.items && s.title !== '사용 기술' && (
                    <ul className="modal-feat-list">
                      {s.items.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {project.result && (
                <div className="modal-result-box">
                  성과: <strong>{project.result}</strong>
                </div>
              )}
            </div>
            <div className="modal-footer">
              {project.visitUrl && (
                <a href={project.visitUrl} target="_blank" rel="noreferrer" className="btn-visit">
                  {project.visitLabel ?? '사이트 바로가기'}
                </a>
              )}
              <button type="button" className="btn-modal-close" onClick={closeModal}>
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
