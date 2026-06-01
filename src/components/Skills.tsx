interface SkillBlock {
  num: string;
  cat: string;
  title: string;
  list: string[];
}

const skills: SkillBlock[] = [
  {
    num: '01',
    cat: 'Frontend',
    title: 'UI Development',
    list: [
      'HTML / CSS / SCSS / JavaScript ES6+',
      '시멘틱 마크업 구조 설계',
      '반응형 웹 퍼블리싱',
      '웹 접근성 준수 마크업',
      '크로스 브라우징 대응',
      '컴포넌트 기반 UI 구성',
    ],
  },
  {
    num: '02',
    cat: 'Interaction',
    title: 'Motion UI',
    list: ['GSAP / ScrollTrigger / Lenis 활용', '스크롤 기반 인터랙션 구현', 'Swiper 커스터마이징', 'CSS 애니메이션'],
  },
  {
    num: '03',
    cat: 'Workflow',
    title: 'Workflow',
    list: [
      'Gulp / Node.js 기반 환경 구성',
      'Git 형상관리 및 협업 경험',
      'Jenkins · SVN 운영 경험',
      '빌드 및 배포 프로세스 경험',
      'React / Vue 기반 프로젝트 협업 경험',
      'VPN, VDI 환경 운영 경험',
    ],
  },
  {
    num: '04',
    cat: 'Collaboration',
    title: 'Communication',
    list: [
      '기획 · 디자인 · 개발 협업 경험',
      'Jira · Slack · Notion 기반 커뮤니케이션',
      'Figma · Adobe XD 디자인 협업',
      'Google Sheets 기반 일정 및 QA 관리',
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-num">💡</span>
          <div className="section-line-el"></div>
          <h2 className="section-title">Tech Stack</h2>
        </div>
        <div className="skills-grid" id="skillsGrid">
          {skills.map((s) => (
            <div className="skill-block" key={s.num}>
              <span className="skill-num">{s.num}</span>
              <p className="skill-cat">{s.cat}</p>
              <h3 className="skill-title">{s.title}</h3>
              <ul className="skill-list">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
