interface EduItem {
  period: string;
  badge: string;
  school: string;
  major: string;
  detail: string;
}

const edus: EduItem[] = [
  {
    period: '2026.06 ~ ',
    badge: '학습중',
    school: '📚 codeit',
    major: '피그마(Figma)와 AI로 쉽게 배우는 UI 디자인',
    detail: 'UI 개발, 웹접근성 · JavaScript 심화 학습',
  },
  {
    period: '2022.01 ~ 2022.04',
    badge: '수료',
    school: '📚 아카데미 정글',
    major: '프론트엔드 개발 아카데미',
    detail: 'UI 개발, 웹접근성 · JavaScript 심화 학습',
  },
  {
    period: '2020.05 ~ 2020.08',
    badge: '수료',
    school: '📖 경기도여성능력개발센터',
    major: 'UI/UX 웹 퍼블리셔 포트폴리오 과정',
    detail: 'HTML5, CSS3, JavaScript, jQuery · 취업 포트폴리오 제작',
  },
  {
    period: '2010.03 ~ 2012.02',
    badge: '전문학사 졸업',
    school: '🏫 한양여자대학교',
    major: '실용미술과 ~ 조형일러스트레이션',
    detail: '학점 3.5 / 4.5 · 서울 · 주간',
  },
];

export default function Education() {
  return (
    <section className="section edu" id="education">
      <div className="section-inner">
        <div className="section-header color2">
          <span className="section-num">💡</span>
          <div className="section-line-el"></div>
          <h2 className="section-title">Education</h2>
        </div>
        <div id="eduList">
          {edus.map((e) => (
            <div className="edu-item" key={e.school}>
              <div>
                <p className="edu-period">{e.period}</p>
                <span className="edu-badge">{e.badge}</span>
              </div>
              <div>
                <h3 className="edu-school">{e.school}</h3>
                <p className="edu-major">{e.major}</p>
                <p className="edu-detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
