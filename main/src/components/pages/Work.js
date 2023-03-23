import React from "react";

export default function Work() {
  return (
    <section id="work">
      <h2>work</h2>
      <section id="main-work">
        <article id="main-article">
          <a
            href="https://frozen-brushlands-64969.herokuapp.com/login"
            target="_blank"
          >
            <img
              id="main-img"
              src="./assets/images/codefolio-screenshot.jpg"
              alt="screenshot of the codefolio page"
            />
            <p class="img-title">Codefolio</p>
          </a>
        </article>
      </section>
      <section id="sub-work">
        <article class="sub-article">
          <a href="https://jjocelynn.github.io/WikiGo/" target="_blank">
            <img
              class="sub-img"
              src="./assets/images/WikiGO-landing-page.jpg"
              alt="screenshot of the WikiGO landing page"
            />
            <p class="img-title">WikiGO</p>
          </a>
        </article>
        <article class="sub-article">
          <a
            href="https://jjocelynn.github.io/weather-dashboard/"
            target="_blank"
          >
            <img
              class="sub-img"
              src="assets/images/weather-dashboard.jpg"
              alt="screenshot of the weather dashboard site"
            />
            <p class="img-title">Study Guide</p>
          </a>
        </article>
        <article class="sub-article">
          <a
            href="https://jjocelynn.github.io/work-day-scheduler/"
            target="_blank"
          >
            <img
              class="sub-img"
              src="assets/images/work-day-scheduler.jpg"
              alt="screenshot of work day scheduler site"
            />
            <p class="img-title">Work Day Scheduler</p>
          </a>
        </article>
        <article class="sub-article">
          <a
            href="https://jjocelynn.github.io/javascript-fundamental-quiz/"
            target="_blank"
          >
            <img
              class="sub-img"
              src="assets/images/Javascript-quiz.jpg"
              alt="Screenshot of the JavaScript Quiz start page"
            />
            <p class="img-title">JavaScript Quiz</p>
          </a>
        </article>
      </section>
    </section>
  );
}
