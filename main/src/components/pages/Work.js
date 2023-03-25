import React, { useState } from "react";

export default function About() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const hoverStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    color: "var(--text)",
    display: "flex",
  };

  return (
    <section id="work">
      <h2>work</h2>
      <section id="sub-work">
        <article
          className="sub-article"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <img
            class="sub-img"
            src="./assets/images/codefolio-screenshot.jpg"
            alt="screenshot of the codefolio page"
          />
          <p class="img-title">Codefolio</p>
          {hover ? (
            <div style={hoverStyle}>
              <a
                className="workLink"
                href="https://frozen-brushlands-64969.herokuapp.com/login"
                target="blank"
              >
                Deployed Site↗
              </a>
              <a
                className="workLink"
                href="https://github.com/Mdwag316/Codefolio"
                target="blank"
              >
                GitHub Repo↗
              </a>
            </div>
          ) : null}
        </article>
        <article
          className="sub-article"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <img
            class="sub-img"
            src="./assets/images/WikiGO-landing-page.jpg"
            alt="screenshot of the WikiGO landing page"
          />
          <p class="img-title">WikiGO</p>
          {hover ? (
            <div style={hoverStyle}>
              <a
                className="workLink"
                href="https://jjocelynn.github.io/WikiGo/"
                target="blank"
              >
                Deployed Site↗
              </a>
              <a
                className="workLink"
                href="https://github.com/jjocelynn/WikiGo"
                target="blank"
              >
                GitHub Repo↗
              </a>
            </div>
          ) : null}
        </article>
        <article
          className="sub-article"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <img
            class="sub-img"
            src="assets/images/weather-dashboard.jpg"
            alt="screenshot of the weather dashboard site"
          />
          <p class="img-title">Study Guide</p>
          {hover ? (
            <div style={hoverStyle}>
              <a
                className="workLink"
                href="https://jjocelynn.github.io/weather-dashboard/"
                target="blank"
              >
                Deployed Site↗
              </a>
              <a
                className="workLink"
                href="https://github.com/jjocelynn/weather-dashboard"
                target="blank"
              >
                GitHub Repo↗
              </a>
            </div>
          ) : null}
        </article>
        <article
          className="sub-article"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <img
            class="sub-img"
            src="assets/images/work-day-scheduler.jpg"
            alt="screenshot of work day scheduler site"
          />
          <p class="img-title">Work Day Scheduler</p>
          {hover ? (
            <div style={hoverStyle}>
              <a
                className="workLink"
                href="https://jjocelynn.github.io/work-day-scheduler/"
                target="blank"
              >
                Deployed Site↗
              </a>
              <a
                className="workLink"
                href="https://github.com/jjocelynn/work-day-scheduler"
                target="blank"
              >
                GitHub Repo↗
              </a>
            </div>
          ) : null}
        </article>
        <article
          className="sub-article"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <img
            class="sub-img"
            src="assets/images/Javascript-quiz.jpg"
            alt="Screenshot of the JavaScript Quiz start page"
          />
          <p class="img-title">JavaScript Quiz</p>
          {hover ? (
            <div style={hoverStyle}>
              <a
                className="workLink"
                href="https://jjocelynn.github.io/javascript-fundamental-quiz/"
                target="blank"
              >
                Deployed Site↗
              </a>
              <a
                className="workLink"
                href="https://github.com/jjocelynn/javascript-fundamental-quiz"
                target="blank"
              >
                GitHub Repo↗
              </a>
            </div>
          ) : null}
        </article>
        <article
          className="sub-article"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <img
            class="sub-img"
            src="./assets/images/jate.jpg"
            alt="screenshot of the just another text editor page"
          />
          <p class="img-title">J.A.T.E</p>
          {hover ? (
            <div style={hoverStyle}>
              <a
                className="workLink"
                href="https://jocelyn-text-editor.herokuapp.com/"
                target="blank"
              >
                Deployed Site↗
              </a>
              <a
                className="workLink"
                href="https://github.com/jjocelynn/Text-Editor"
                target="blank"
              >
                GitHub Repo↗
              </a>
            </div>
          ) : null}
        </article>
      </section>
    </section>
  );
}
