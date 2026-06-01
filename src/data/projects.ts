// 프로젝트 데이터. 기존 main.ejs 의 반복 마크업(모달 / 리스트 / 키프로젝트)을
// 하드코딩 대신 데이터 배열로 분리했다. 컴포넌트에서 .map() 으로 렌더링한다.

export type ProjectType = '구축' | '운영';

export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  desc?: string;
  items?: string[];
}

export interface Project {
  id: string; // 모달 식별자 (ex. modal-p16)
  eyebrow: string;
  title: string;
  meta: ProjectMeta[];
  sections: ProjectSection[];
  result?: string; // 성과 박스 강조 텍스트
  visitUrl?: string;
  visitLabel?: string; // 기본값: "사이트 바로가기"
}

// 모달 상세 데이터
export const projects: Project[] = [
  {
    id: 'modal-p16',
    eyebrow: '구축 · 퍼블리싱 기여도 100%',
    title: '롯데렌터카 지카 (구축)',
    meta: [
      { label: '기간', value: '2025.11 ~ 2026.01' },
      { label: '소속', value: '펜타브리드 PIX FIX' },
      { label: '인력 구성', value: '기획2 디자인2 퍼블1 개발2' },
    ],
    sections: [
      {
        title: '프로젝트 개요',
        desc: '기업 사이트 반응형 웹 구축 프로젝트. UI개발 기여도 100%, 일정 산출, 개발 환경 내 작업',
      },
      {
        title: '담당 업무',
        items: [
          '퍼블리싱 일정 산정 및 작업 범위 관리',
          '공통 컴포넌트, 어드민 페이지 퍼블리싱',
          'UI 인터랙션 구현 및 퍼블리싱 구조 설계',
          '개발 환경 내 직접 작업 및 개발자 협업',
        ],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS/SCSS', 'JavaScript', 'Figma', 'Gsap', 'Lenis', 'intellij idea'],
      },
    ],
    visitUrl: 'https://www.greencar-gcar.co.kr/',
  },
  {
    id: 'modal-p01',
    eyebrow: '운영 · 기업 사이트',
    title: '캐논코리아 (운영)',
    meta: [
      { label: '기간', value: '2025.06 ~ 2025.12' },
      { label: '소속', value: '펜타브리드 PIX FIX' },
      { label: '역할', value: '운영 퍼블리셔' },
    ],
    sections: [
      {
        title: '프로젝트 개요',
        desc: '기업 사이트 운영 프로젝트. 급건 요청이 빈번한 환경에서 일정 압박 속에서도 운영 품질을 유지하는 대응 경험을 축적했습니다. VPN 기반 서버 환경에서 JSP 개발 환경 내 퍼블리싱 작업을 수행했습니다.',
      },
      {
        title: '담당 업무',
        items: [
          '정기 콘텐츠 퍼블리싱 및 UI 수정',
          '마이크로 사이트 및 기존 페이지 고도화 퍼블리싱',
          'JSP 기반 개발 환경 내 퍼블리싱',
          'Jira 기반 이슈 관리',
          'Jenkins 프로세스 배포 경험 / SVN 형상 관리',
        ],
      },
      {
        title: '사용 기술',
        items: [
          'HTML',
          'CSS/SCSS',
          'JavaScript',
          'Figma',
          'JSP',
          'SVN',
          'Jenkins',
          'Jira',
          'eclipse',
          'intellij idea',
          'VPN',
        ],
      },
    ],
    visitUrl: 'https://kr.canon/main',
  },
  {
    id: 'modal-p02',
    eyebrow: '구축 · PL 단독 · 기여도 100%',
    title: '월드비전 크로스',
    meta: [
      { label: '기간', value: '2025.03 ~ 2025.05' },
      { label: '소속', value: '펜타브리드 PIX FIX' },
      { label: '인력 구성', value: '기획2 디자인1 퍼블1 개발1' },
    ],
    sections: [
      {
        title: '프로젝트 개요',
        desc: 'Vue.js 기반 개발 환경에서 퍼블리싱을 단독으로 진행한 프로젝트. 일정 산정부터 구조 설계, 개발자 협업까지 퍼블리싱 전 과정을 책임졌습니다.',
      },
      {
        title: '담당 업무',
        items: [
          '퍼블리싱 일정 산정 및 작업 범위 관리',
          '공통 컴포넌트, 어드민 페이지, 가이드 페이지 구축',
          'UI 인터랙션 구현 및 퍼블리싱 구조 설계',
          'Vue.js 개발 환경 내 직접 작업 및 개발자 협업',
        ],
      },
      {
        title: '회고',
        desc: '촉박한 일정 속 일정 관리와 우선순위 설정의 중요성을 체감. 공통 컴포넌트 선행 작업의 필요성과 퍼블리싱 구조 설계를 선행해야 한다는 기준을 확립했습니다.',
      },
      {
        title: '사용 기술',
        items: [
          'HTML',
          'CSS/SCSS',
          'JavaScript',
          'Figma',
          'Gsap',
          'Lenis',
          'Swiper',
          'Vue.js',
          'VScode',
          'intellij idea',
        ],
      },
    ],
    result: '퍼블리싱 PL 단독 · 기여도 100%',
    visitUrl: 'https://wvcross.or.kr/',
  },
  {
    id: 'modal-p03',
    eyebrow: '구축 · 반응형 웹 · 퍼블리싱 PL',
    title: '세방그룹',
    meta: [
      { label: '기간', value: '2024.10 ~ 2025.04' },
      { label: '소속', value: '펜타브리드 PIX FIX' },
      { label: '인력 구성', value: '기획1 디자인2 퍼블3 개발1' },
    ],
    sections: [
      {
        title: '프로젝트 개요',
        desc: '다수의 프로젝트가 병행되는 환경 속에서 진행된 대규모 구축 프로젝트. 퍼블리싱 PL 역할을 맡아 일정 조율과 화면 구현을 함께 수행했습니다.',
      },
      {
        title: '담당 업무',
        items: [
          '반응형 마크업 및 공통 컴포넌트 개발',
          '인터랙션 구현 및 화면 운영 구조 대응',
          '직무소개 페이지 JSON기반 콘텐츠 URL 파라미터 기반 동적 콘텐츠 렌더링',
          '일정 변경 및 수정 요청 대응 커뮤니케이션',
        ],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS/SCSS', 'JavaScript', 'Figma', 'Gsap', 'Lenis', 'Swiper', 'Vue.js ENV'],
      },
    ],
    visitUrl: 'https://www.sebanggroup.com/',
  },
  {
    id: 'modal-p04',
    eyebrow: '운영 · 기업 사이트',
    title: '현대엘리베이터',
    meta: [
      { label: '기간', value: '2024.12 ~ 2026.01' },
      { label: '소속', value: '펜타브리드 PIX FIX' },
      { label: '환경', value: 'VPN 서버' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: ['정기 콘텐츠 퍼블리싱', 'VPN 환경 유지보수 / 프론트단 서버 배포'],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS', 'JavaScript', 'VPN'],
      },
    ],
    visitUrl: 'https://www.hyundaielevator.com/ko/index',
  },
  {
    id: 'modal-p05',
    eyebrow: '이벤트 페이지 · 기여도 100%',
    title: 'H.Point 크리스마스 이벤트',
    meta: [
      { label: '기간', value: '2024.11' },
      { label: '인력 구성', value: '기획1 디자인1 퍼블1 개발1' },
      { label: '현재 상태', value: '이벤트 종료' },
    ],
    sections: [
      {
        title: '프로젝트 개요',
        desc: '크리스마스를 한 달 앞두고 시작된 출석체크 이벤트 앱·웹 화면 퍼블리싱. 날짜별 active 효과, 일자별 다른 팝업 노출 구조를 구현했습니다.',
      },
      {
        title: '담당 업무',
        items: [
          'CSS 애니메이션 구현',
          'Grid 구조 캘린더 레이아웃',
          '날짜별 active 이미지 전환 로직',
          '모바일 반응형 ~ vw 단위 기반 대응',
          'Gulp 빌드 환경 세팅',
        ],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS/SCSS', 'JavaScript', 'Gulp', 'Grid', 'vw 단위'],
      },
    ],
    visitUrl: 'https://github.com/doitlock/hpoint-christmas-event',
    visitLabel: '캡쳐화면 보기',
  },
  {
    id: 'modal-p07',
    eyebrow: '구축 · 웹접근성 마크',
    title: 'SK네트웍스 오피셜 (구축)',
    meta: [
      { label: '기간', value: '2024.03 ~ 2024.07' },
      { label: '인력 구성', value: '기획2 디자인2 퍼블3 개발2' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: ['마크업 / 공통 컴포넌트 중심 퍼블리싱', '웹접근성 마크 취득 대응', 'Gulp 빌드 환경 세팅'],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS/SCSS', 'JavaScript', 'Figma', 'Gsap', 'Swiper', 'Gulp', 'VScode'],
      },
    ],
    result: '웹접근성 마크 취득',
    visitUrl: 'https://www.sknetworks.co.kr/',
  },
  {
    id: 'modal-p08',
    eyebrow: '운영 · 기업 사이트',
    title: 'SK네트웍스 오피셜 (운영)',
    meta: [
      { label: '기간', value: '2024.09 ~ 2025.06' },
      { label: '환경', value: 'VDI 환경 배포' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: ['고객 요구사항 대응', '정기 콘텐츠 퍼블리싱', 'VDI 환경 프론트단 배포'],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS', 'JavaScript', 'VDI'],
      },
    ],
    visitUrl: 'https://www.sknetworks.co.kr/',
  },
  {
    id: 'modal-p09',
    eyebrow: '운영 · 기업 사이트',
    title: '현대 어린이책미술관',
    meta: [
      { label: '기간', value: '2024.06 ~ 2026.01' },
      { label: '환경', value: 'VPN · Bitbucket' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: ['정기 콘텐츠 퍼블리싱', 'VPN 환경 유지보수', 'Bitbucket 배포'],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS', 'JavaScript', 'VPN', 'Bitbucket'],
      },
    ],
    visitUrl: 'https://www.hmoka.org/main/index.do',
  },
  {
    id: 'modal-p10',
    eyebrow: '구축 · 인터랙션 중심 · 기여도 100%',
    title: '캐논코리아 RF렌즈 마이크로사이트',
    meta: [
      { label: '기간', value: '2024.01 ~ 2024.03' },
      { label: '인력 구성', value: '기획1 디자인2 퍼블1 개발2' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: [
          '반응형 웹 / 인터랙션 구현',
          '유튜브 영상 연동 UI 개발',
          '마크업 단독 진행',
          'GSAP 기반 사용자 인터랙션 구현',
        ],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS/SCSS', 'JavaScript', 'YouTube API', 'Figma', 'Gsap', 'Swiper'],
      },
    ],
    result: 'UI개발 기여도 100%',
    visitUrl: 'https://kr.canon/rflensworld',
  },
  {
    id: 'modal-p11',
    eyebrow: '구축 · React 환경',
    title: '안랩닷컴 전면개편',
    meta: [
      { label: '기간', value: '2023.07 ~ 2024.01' },
      { label: '인력 구성', value: '기획3 디자인3 퍼블4 개발3' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: [
          'React 개발 환경 내 퍼블리싱',
          '메인 페이지 인터랙션 구현 중심',
          '적응형 PC 사이트 퍼블리싱',
          '대형 팀 협업 커뮤니케이션',
        ],
      },
      {
        title: '사용 기술',
        items: [
          'HTML',
          'CSS/SCSS',
          'JavaScript',
          'React ENV',
          'TypeScript',
          'Figma',
          'Jira',
          'Gsap',
          'Swiper',
        ],
      },
    ],
    visitUrl: 'https://www.ahnlab.com/ko',
  },
  {
    id: 'modal-p12',
    eyebrow: '운영 · 기업 계열사',
    title: '현대백화점',
    meta: [
      { label: '기간', value: '2023.08 ~ 2023.11' },
      { label: '환경', value: 'VPN 환경' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: ['현대백화점 산하 브랜드 사이트 운영', '정기 콘텐츠, 프로모션 페이지 퍼블리싱'],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS', 'JavaScript', 'VPN'],
      },
    ],
  },
  {
    id: 'modal-p13',
    eyebrow: '구축 · 첫 구축 프로젝트',
    title: '효성그룹',
    meta: [
      { label: '기간', value: '2022.11 ~ 2023.05' },
      { label: '소속', value: '펜타브리드 PIX FIX' },
    ],
    sections: [
      {
        title: '프로젝트 개요',
        desc: '첫 웹사이트 구축 프로젝트 참여. GSAP을 처음 접하고 스크롤 기반 애니메이션을 구현. 이 경험을 통해 공통 컴포넌트 가이드의 중요성을 실감하게 됐습니다.',
      },
      {
        title: '담당 업무',
        items: [
          '메인 페이지 3개 중 1개 UI 개발',
          'GSAP ScrollTrigger 스크롤 애니메이션 구현',
          'SCSS 모듈화 구조 설계',
        ],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS/SCSS', 'JavaScript', 'GSAP', 'Figma'],
      },
    ],
    result: 'GSAP 첫 실무 적용',
    visitUrl: 'https://www.hyosung.com/kr',
  },
  {
    id: 'modal-p14',
    eyebrow: '운영 · 브랜드 사이트',
    title: '아모레퍼시픽',
    meta: [
      { label: '기간', value: '2022.06 ~ 2022.09' },
      { label: '소속', value: 'CTTD AP팀' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: [
          '아모레퍼시픽 산하 브랜드 사이트 운영',
          'PDP(상품 상세 페이지) 퍼블리싱 중심',
          '브랜드 컨벤션 준수, 마크업 일관성 유지',
          'Gulp 빌드 환경',
        ],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS', 'JavaScript', 'Gulp', 'GitHub'],
      },
    ],
  },
  {
    id: 'modal-p15',
    eyebrow: '운영 · 자사 서비스',
    title: '용감한 컴퍼니',
    meta: [
      { label: '기간', value: '2021.03 ~ 2021.12' },
      { label: '소속', value: '그로스디자인그룹 퍼블리싱팀' },
    ],
    sections: [
      {
        title: '담당 업무',
        items: [
          '용감한컴퍼니 산하 온라인교육 서비스 웹사이트 운영',
          '정기 콘텐츠, 프로모션 페이지 퍼블리싱',
          '유지보수 및 콘텐츠 수정',
        ],
      },
      {
        title: '사용 기술',
        items: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Jira', 'Adobe XD'],
      },
    ],
  },
];

// Key Projects (메인 상단 Swiper 카드)
export interface KeyProject {
  id: string; // 연결할 모달 id
  tag: string;
  name: string;
  period: string;
  desc: string;
  thumb: string;
}

export const keyProjects: KeyProject[] = [
  {
    id: 'modal-p16',
    tag: '구축 · 퍼블리싱 PL · 기여도 100%',
    name: '롯데렌터카 지카',
    period: '2025.11 ~ 2026.01',
    desc: '반응형 웹 퍼블리싱, UI개발 구현 기여도 100% 일정 산출, 개발 환경 내 작업, 어드민 페이지 퍼블리싱',
    thumb: '/assets/images/main/project-thumb004.gif',
  },
  {
    id: 'modal-p02',
    tag: '구축 · 퍼블리싱 PL',
    name: '월드비전 크로스',
    period: '2025.03 ~ 2025.05',
    desc: '퍼블리싱 전반을 단독으로 수행한 프로젝트. 일정 산정, 공통 컴포넌트 구성 및 개발 협업',
    thumb: '/assets/images/main/project-thumb001.gif',
  },
  {
    id: 'modal-p03',
    tag: '구축 · 반응형 웹 · 퍼블리싱 PL',
    name: '세방그룹',
    period: '2024.10 ~ 2025.04',
    desc: '다수의 프로젝트가 병행되는 환경 속에서 진행된 구축 프로젝트. 퍼블리싱 PL 역할을 맡아 일정 조율과 화면 구현 수행',
    thumb: '/assets/images/main/project-thumb002.gif',
  },
  {
    id: 'modal-p11',
    tag: '구축 · React / TypeScript 환경',
    name: '안랩닷컴 전면 개편',
    period: '2023.07 ~ 2024.01',
    desc: 'React · TypeScript 기반으로 진행된 대규모 웹사이트 전면 개편 프로젝트. 다수 직군과 협업하며 인터랙션 구현 및 화면 개발 업무 수행',
    thumb: '/assets/images/main/project-thumb003.gif',
  },
];

// All Projects 리스트 (하단 필터 리스트)
export interface ProjectListItem {
  id: string; // 연결할 모달 id
  type: ProjectType;
  name: string;
  sub: string;
  period: string;
}

export const projectList: ProjectListItem[] = [
  { id: 'modal-p16', type: '구축', name: '롯데렌터카 지카', sub: '브랜드 사이트 구축 · 기여도 100%', period: '2025.11 ~ 2026.01' },
  { id: 'modal-p01', type: '운영', name: '캐논코리아 (운영)', sub: '기업 사이트 운영 · JSP · SVN · Jenkins', period: '2025.06 ~ 2025.12' },
  { id: 'modal-p02', type: '구축', name: '월드비전 크로스 (구축)', sub: '반응형 브랜드 사이트 · Vue.js · PL 단독', period: '2025.03 ~ 2025.05' },
  { id: 'modal-p03', type: '구축', name: '세방그룹 (구축)', sub: '반응형 기업 사이트 · Vue.js · PL', period: '2024.10 ~ 2025.04' },
  { id: 'modal-p04', type: '운영', name: '현대엘리베이터 (운영)', sub: '기업 사이트 유지보수 · VPN', period: '2024.12 ~ 2026.01' },
  { id: 'modal-p05', type: '구축', name: 'H.Point 크리스마스 이벤트', sub: '인터랙션 · Grid 반응형 · CSS 애니메이션 · Gulp 세팅', period: '2024.11 ~ 2024.12' },
  { id: 'modal-p07', type: '구축', name: 'SK네트웍스 (구축)', sub: '반응형 기업 사이트 · 웹접근성 마크 · Gulp 세팅', period: '2024.03 ~ 2024.07' },
  { id: 'modal-p08', type: '운영', name: 'SK네트웍스 (운영)', sub: '기업 사이트 유지보수 · VDI 환경', period: '2024.09 ~ 2025.06' },
  { id: 'modal-p09', type: '운영', name: '현대 어린이책미술관 (운영)', sub: '사이트 유지보수 · VPN · Bitbucket', period: '2024.06 ~ 2026.01' },
  { id: 'modal-p10', type: '구축', name: '캐논코리아 RF렌즈 마이크로사이트 (구축)', sub: '인터랙션 중심 · 유튜브 UI · 기여도 100%', period: '2024.01 ~ 2024.03' },
  { id: 'modal-p11', type: '구축', name: '안랩닷컴 전면개편 (구축)', sub: 'React 환경 · 메인 인터랙션 · 적응형 PC', period: '2023.07 ~ 2024.01' },
  { id: 'modal-p12', type: '운영', name: '현대백화점 (운영)', sub: 'VPN 환경 · 프로모션 페이지 퍼블리싱', period: '2023.08 ~ 2023.11' },
  { id: 'modal-p13', type: '구축', name: '효성그룹 (구축)', sub: '첫 구축 프로젝트 · GSAP 스크롤 애니메이션 · SCSS', period: '2022.11 ~ 2023.05' },
  { id: 'modal-p14', type: '운영', name: '아모레퍼시픽 (운영)', sub: '브랜드 사이트 운영 · PDP 퍼블리싱 · Gulp', period: '2022.06 ~ 2022.09' },
  { id: 'modal-p15', type: '운영', name: '용감한 컴퍼니 (운영)', sub: '교육 서비스 브랜드 사이트 운영', period: '2021.03 ~ 2021.12' },
];
