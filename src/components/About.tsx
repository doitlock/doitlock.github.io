export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <div className="section-header color2">
          <span className="section-num">💡</span>
          <div className="section-line-el"></div>
          <h2 className="section-title">About</h2>
        </div>
        <div className="about-grid">
          <div className="about-quote-wrap">
            <img src="/assets/images/main/hsg.jpeg" alt="홍수기 바다에서 찍은 사진" />
          </div>
          <div className="about-cards" id="aboutCards">
            <p className="about-quote">
              안녕하세요!
              <br /> 새로운 도전을 즐기며 묵묵하게 성과를 증명하는 UI개발자 홍수기입니다. 🏃‍♂️
              <br />
              <br />
              다양한 대형 프로젝트를 경험하며, 촉박한 일정이나 낯선 기술 환경 앞에서도{' '}
              <em>'끈기 있게 끝까지 책임진다'</em>는 마음가짐으로 임해왔습니다.
              <br />
              <br />
              동료들과 소통하며 쌓아온 실무 기반의 프로세스를 바탕으로, 어떤 환경에서도 성실하게 중심을 잡고 함께 일하고
              싶은 든든한 파트너가 되겠습니다. 🚀
            </p>
            <div className="about-card">
              <p className="about-card-label">🌟 Core Experience</p>
              <p className="about-card-val">
                5년차 웹 퍼블리셔 기반 실무 경험
                <br />
                컴포넌트 구조 및 UI 인터랙션 구현
                <br />
                유지보수를 고려한 마크업 및 화면 개발
              </p>
            </div>
            <div className="about-card">
              <p className="about-card-label">🌟 Frontend & Interaction</p>
              <p className="about-card-val">
                JavaScript · GSAP · Lenis
                <br />
                React / Vue 기반 환경 경험
              </p>
            </div>
            <div className="about-card">
              <p className="about-card-label">🌟 Collaboration & Workflow</p>
              <p className="about-card-val">
                GitHub · GitLab · SVN 협업 경험
                <br />
                Slack · Jira · Notion 기반 커뮤니케이션
                <br />
                VPN · VDI 환경 프로젝트 운영 경험
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
