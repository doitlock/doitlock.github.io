# 홍수기 UI Developer Portfolio

Vite + React + TypeScript 기반 포트폴리오. GitHub Pages(`https://doitlock.github.io/`)에 배포

> 기존 Gulp + EJS 환경은 [`_legacy/`](./_legacy) 에 참고용으로 보존

## 기술 스택

- **Vite** + **React 18** + **TypeScript**
- **SCSS** (기존 스타일 그대로 이식, `src/styles/`)
- **GSAP** / ScrollTrigger (`@gsap/react`) — 스크롤 인터랙션
- **Lenis** — 스무스 스크롤 (PC 전용, 1024px 이하 비활성)
- **Swiper** — Key Projects 캐러셀

## 개발

```bash
npm install      # 최초 1회
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

## 프로젝트 구조

```
├─ index.html              # Vite 진입점
├─ src/
│  ├─ main.tsx             # 엔트리 (스타일/Swiper CSS import)
│  ├─ App.tsx              # 전체 레이아웃 + Context
│  ├─ components/          # 섹션 단위 컴포넌트
│  ├─ data/projects.ts     # 프로젝트 데이터 (모달/리스트/키프로젝트)
│  ├─ hooks/               # useMainAnimations (GSAP)
│  ├─ context/             # ModalContext
│  └─ styles/              # SCSS (style.scss 진입)
├─ public/assets/          # 이미지 등 정적 파일
└─ .github/workflows/      # GitHub Pages 자동 배포
```

## 배포 (GitHub Actions)

`master` 브랜치에 push 하면 자동으로 빌드 후 GitHub Pages에 배포된다.

최초 1회 설정: GitHub 레포 **Settings → Pages → Build and deployment → Source** 를
**GitHub Actions** 로 변경한다.
