# Hong Suki Portfolio

웹 퍼블리셔 + 콘텐츠 디자이너 홍수기의 포트폴리오. 빌드 없는 정적 HTML/CSS/JS로 만들었고 GitHub Pages(`https://doitlock.github.io/`)에 배포한다.

## 구성

```
├─ index.html     # 메인 (인트로 · Projects · Profile · Career · Capabilities · Contact)
├─ work.html      # 프로젝트 상세 (work.html?id=gcar | wvcross | sebang | ahnlab)
├─ style.css      # 기본 스타일 · 색 · 타이포
├─ ide.css        # VS Code + Figma 레이아웃 (탭 · 상태 막대 · 에디터 · 터미널)
├─ assets/        # 이미지
└─ .github/workflows/deploy.yml
```

외부 라이브러리는 CDN으로 불러온다: GSAP 3.12.5 + ScrollTrigger, Pretendard, Plus Jakarta Sans, JetBrains Mono.

## 로컬에서 보기

이미지 경로가 `/assets/...` 절대 경로라서 파일을 직접 열지 말고 정적 서버로 띄운다.

```bash
npx --yes http-server -p 5173 -c-1
```

## 배포

`master`에 push하면 GitHub Actions가 사이트 파일만 모아 GitHub Pages에 올린다.
