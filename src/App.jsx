import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* =========================
          HEADER
      ========================= */}
      <header className="header">

        <div className="header-inner">

          <div className="profile">

            <div className="profile-image">
              <img
                src="src/assets/입사사진.jpg"
                alt="Profile Image"
              />
            </div>

            <div className="profile-info">
              <h1>SIM HYOJIN</h1>

              <p className="job">
                SOFTWARE DEVELOPER
              </p>

              <div className="contact-info">
                <span>✉ viu310@naver.com</span>
                <span>📍 Paju, Gyeonggi-do</span>
              </div>
            </div>

          </div>

          <p className="intro">
            항상 탐구하고 발전하는<br />
            미래지향적인 개발자가 되겠습니다.
          </p>

        </div>

      </header>


      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="navigation">

        <a href="#about">ABOUT</a>
        <a href="#education">EDUCATION</a>
        <a href="#career">CAREER</a>
        <a href="#certificate">CERTIFICATE</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>

      </nav>


      <main>


        {/* =========================
            ABOUT
        ========================= */}
        <section id="about" className="section about">

          <div className="section-title">
            <span>01</span>
            <h2>ABOUT ME</h2>
          </div>

          <div className="about-content">

            <h3>
              새로운 기술과 도전을 두려워하지 않는 개발자
            </h3>

            <p>
              끊임없이 새로운 기술과 도전에 관심을 가지고
              문제를 해결하기 위해 새로운 방법을 탐구합니다.
            </p>

            <p>
              단순히 기술적인 발전에 그치지 않고,
              기술을 활용하여 사람들의 삶을 더 나은 방향으로
              이끌 수 있는 개발자가 되고자 합니다.
            </p>

            <div className="keyword-list">
              <span>PROBLEM SOLVING</span>
              <span>CONTINUOUS LEARNING</span>
              <span>COLLABORATION</span>
            </div>

          </div>

        </section>


        {/* =========================
            EDUCATION
        ========================= */}
        <section id="education" className="section">

          <div className="section-title">
            <span>02</span>
            <h2>EDUCATION</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="date">
                2018.03 — 2022.06
              </div>

              <div className="timeline-content">
                <h3>중부대학교</h3>

                <p className="sub">
                  게임소프트웨어전공 · 학사
                </p>

                <p>
                  게임소프트웨어를 전공하며 C, C++,
                  Unity3D 등의 기술을 학습했습니다.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="date">
                2015.03 — 2018.02
              </div>

              <div className="timeline-content">
                <h3>문산수억고등학교</h3>

                <p className="sub">
                  이과
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CAREER
        ========================= */}
        <section id="career" className="section">

          <div className="section-title">
            <span>03</span>
            <h2>CAREER</h2>
          </div>

          <div className="career-box">

            <div className="career-header">

              <div>
                <h3>프로그램 개발</h3>
                <p>Developer</p>
              </div>

              <span>
                Career
              </span>

            </div>

            <div className="career-body">

              <div className="career-column">

                <h4>주요 업무</h4>

                <ul>
                  <li>프로그램 개발 및 유지보수</li>
                  <li>웹 서비스 개발</li>
                  <li>DB 연동 및 SQL 작성</li>
                  <li>프론트엔드 및 백엔드 개발</li>
                </ul>

              </div>

              <div className="career-column">

                <h4>사용 기술</h4>

                <div className="tag-list">
                  <span>JAVA</span>
                  <span>Spring</span>
                  <span>Spring Boot</span>
                  <span>JSP</span>
                  <span>JavaScript</span>
                  <span>Oracle</span>
                  <span>MySQL</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CERTIFICATE
        ========================= */}
        <section id="certificate" className="section">

          <div className="section-title">
            <span>04</span>
            <h2>CERTIFICATE</h2>
          </div>

          <div className="certificate-grid">

            <Certificate
              name="정보처리기사"
              organization="한국산업인력공단"
            />

            <Certificate
              name="정보처리산업기사"
              organization="한국산업인력공단"
            />

            <Certificate
              name="SQLD"
              organization="한국데이터산업진흥원"
            />

            <Certificate
              name="컴퓨터활용능력 1급"
              organization="대한상공회의소"
            />

          </div>

        </section>


        {/* =========================
            EDUCATION / TRAINING
        ========================= */}
        <section className="section training">

          <div className="section-title">
            <span>05</span>
            <h2>TRAINING</h2>
          </div>

          <div className="training-item">

            <div className="training-date">
              2023.10 — 2024.04
            </div>

            <div>
              <h3>
                데이터처리 기반 자바 풀스택 개발자 과정
              </h3>

              <p>
                한국ICT인재개발원
              </p>

              <div className="award-list">
                <span>특모범상</span>
                <span>프로젝트 최우수상</span>
                <span>SW인재상</span>
                <span>봉사상</span>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}
        <section id="skills" className="section skills-section">

          <div className="section-title">
            <span>06</span>
            <h2>SKILLS</h2>
          </div>


          <SkillGroup
            title="LANGUAGE"
            skills={[
              "JAVA",
              "JAVASCRIPT",
              "C",
              "C++",
              "PYTHON"
            ]}
          />


          <SkillGroup
            title="WEB"
            skills={[
              "HTML5",
              "CSS3",
              "JSP",
              "JQuery",
              "AJAX",
              "REACT"
            ]}
          />


          <SkillGroup
            title="FRAMEWORK"
            skills={[
              "SPRING",
              "SPRING BOOT",
              "JPA",
              "JDBC"
            ]}
          />


          <SkillGroup
            title="DATABASE"
            skills={[
              "ORACLE",
              "MYSQL",
              "SQL"
            ]}
          />


          <SkillGroup
            title="TOOLS"
            skills={[
              "GITHUB",
              "SOURCETREE",
              "VISUAL STUDIO CODE",
              "INTELLIJ",
              "ECLIPSE"
            ]}
          />


          <SkillGroup
            title="API / ETC"
            skills={[
              "GOOGLE VISION API",
              "지도 API",
              "공공데이터 API",
              "BOOTSTRAP",
              "REACT-BOOTSTRAP"
            ]}
          />

        </section>


        {/* =========================
            PROJECTS
        ========================= */}
        <section id="projects" className="section projects-section">

          <div className="section-title">
            <span>07</span>
            <h2>PROJECTS</h2>
          </div>


          {/* FirstBank */}
          <Project
            number="01"
            title="FirstBank"
            subtitle="은행 웹 서비스"
            period="2024.02.27 — 2024.03.28"
            role="분석 / 개발"
            description="
              간편하고 안전한 금융 거래를 위한
              웹 서비스를 개발한 최종 팀 프로젝트입니다.
            "
            skills={[
              "JAVA",
              "Spring Boot",
              "React",
              "JPA",
              "Oracle",
              "JavaScript",
              "CSS",
              "Python",
              "Tomcat"
            ]}
          />


          {/* 문학마당 Spring */}
          <Project
            number="02"
            title="문학마당"
            subtitle="Spring 기반 도서 리뷰 커뮤니티"
            period="2024.02.16 — 2024.02.26"
            role="분석 / 개발"
            description="
              사용자가 도서 리뷰를 공유할 수 있는
              커뮤니티 웹 서비스를 개발했습니다.
            "
            skills={[
              "JAVA",
              "Spring",
              "JSP",
              "Oracle",
              "JavaScript",
              "JQuery",
              "Ajax",
              "Tomcat"
            ]}
          />


          {/* 문학마당 JSP */}
          <Project
            number="03"
            title="문학마당"
            subtitle="JSP 기반 도서 리뷰 커뮤니티"
            period="2024.01.22 — 2024.02.02"
            role="분석 / 개발"
            description="
              JSP와 Java를 이용하여 도서 리뷰를
              등록하고 관리할 수 있는 커뮤니티를 구현했습니다.
            "
            skills={[
              "JAVA",
              "JSP",
              "HTML5",
              "CSS3",
              "JavaScript",
              "JQuery",
              "Ajax",
              "Oracle"
            ]}
          />


          {/* Pokemon */}
          <Project
            number="04"
            title="포켓몬 도감 관리"
            subtitle="개인 프로젝트"
            period="2023.12.18 — 2023.12.22"
            role="분석 / 개발"
            description="
              Java와 JDBC를 활용하여 도서,
              게시판, 포켓몬 도감 정보를 관리하는
              프로그램을 구현했습니다.
            "
            skills={[
              "JAVA",
              "JDBC",
              "Oracle"
            ]}
          />

        </section>


        {/* =========================
            STRENGTH
        ========================= */}
        <section className="section strength">

          <div className="section-title">
            <span>08</span>
            <h2>MY STRENGTH</h2>
          </div>


          <div className="strength-grid">

            <div>
              <span>01</span>
              <h3>문제 해결</h3>
              <p>
                문제를 발견하면 원인을 분석하고
                새로운 해결 방법을 찾아 적용합니다.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>새로운 기술</h3>
              <p>
                새로운 기술과 아이디어를 탐구하고
                직접 적용하며 배우는 것을 좋아합니다.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>협업</h3>
              <p>
                팀원들과 자유롭게 의견을 공유하고
                함께 성장하는 개발을 중요하게 생각합니다.
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}
        <section id="contact" className="section contact">

          <div className="section-title">
            <span>09</span>
            <h2>CONTACT</h2>
          </div>

          <div className="contact-content">

            <h3>
              Let's make something together.
            </h3>

            <p>
              새로운 프로젝트와 개발에 대한 이야기를
              나누고 싶습니다.
            </p>

            <a
              href="mailto:viu310@naver.com"
              className="email"
            >
              viu310@naver.com
            </a>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">

        <p>
          © 2026 SIM HYOJIN
        </p>

        <p>
          SOFTWARE DEVELOPER
        </p>

      </footer>

    </div>
  );
}


/* =========================
   COMPONENTS
========================= */

function Certificate({ name, organization }) {
  return (
    <div className="certificate">
      <div className="certificate-icon">
        ✓
      </div>

      <div>
        <h3>{name}</h3>
        <p>{organization}</p>
      </div>
    </div>
  );
}


function SkillGroup({ title, skills }) {
  return (
    <div className="skill-group">

      <h3>{title}</h3>

      <div className="skill-tags">

        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}


function Project({
  number,
  title,
  subtitle,
  period,
  role,
  description,
  skills
}) {
  return (
    <article className="project">

      <div className="project-number">
        {number}
      </div>

      <div className="project-content">

        <div className="project-top">

          <div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>

          <span className="project-period">
            {period}
          </span>

        </div>


        <div className="project-info">

          <div>
            <span className="label">
              ROLE
            </span>

            <p>
              {role}
            </p>
          </div>

          <div>
            <span className="label">
              DESCRIPTION
            </span>

            <p>
              {description}
            </p>
          </div>

        </div>


        <div className="project-skills">

          {skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}

        </div>

      </div>

    </article>
  );
}


export default App;