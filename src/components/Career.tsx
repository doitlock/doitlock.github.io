interface CareerItem {
  period: string;
  duration: string;
  company: string;
  role: string;
  stack: string[];
  desc: string;
}

const careers: CareerItem[] = [
  {
    period: '2022.09 ~ 2026.01',
    duration: '3년 4개월',
    company: '🤝 펜타브리드',
    role: 'PIX FIX팀 · 사원',
    stack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'Gulp', 'Git', 'Node.js', 'Figma', 'Jira'],
    desc: '에이전시 기반 대형 구축 및 운영 프로젝트 다수 수행. 롯데렌터카, SK AI SUMMIT, 월드비전, 세방그룹, SK네트웍스, 캐논코리아, 안랩, 효성 등 다양한 기업 사이트 구축 및 UI개발 담당.',
  },
  {
    period: '2022.06 ~ 2022.09',
    duration: '4개월',
    company: '🤝 CTTD',
    role: 'AP팀 · 사원',
    stack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'jQuery', 'Gulp', 'GitHub', 'Slack'],
    desc: '아모레퍼시픽 계열사 브랜드 사이트 운영 퍼블리싱. 브랜드 컨벤션 준수 및 마크업 일관성 유지.',
  },
  {
    period: '2021.03 ~ 2021.12',
    duration: '9개월',
    company: '🤝 용감한 컴퍼니',
    role: '그로스디자인그룹 퍼블리싱팀 · 사원',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Jira', 'Adobe XD'],
    desc: '자사 온라인 교육 서비스 산하 브랜드 사이트 운영. 정기 프로모션 페이지, 콘텐츠 수정, 유지보수.',
  },
];

export default function Career() {
  return (
    <section className="section career" id="career">
      <div className="section-inner">
        <div className="section-header color2">
          <span className="section-num">💡</span>
          <div className="section-line-el"></div>
          <h2 className="section-title">Career</h2>
        </div>
        <div id="careerList">
          {careers.map((c) => (
            <div className="career-item" key={c.company + c.period}>
              <div className="career-item-bar"></div>
              <div className="career-period">
                <strong>{c.period}</strong>
                {c.duration}
              </div>
              <div className="career-contents">
                <h3 className="career-company">{c.company}</h3>
                <p className="career-role">{c.role}</p>
                <div className="career-stack">
                  {c.stack.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <p className="career-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
