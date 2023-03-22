import React from "react";

export default function Home() {
  return (
    <section id="intro-section">
      <article>
        <p class="intro">Hello, I'm Jocelyn,</p>
        <p class="intro-large">Full Stack</p>
        <p class="intro-large">Developer</p>
        <p class="intro">based in Toronto.</p>
        <a href="placehodler-link-to-resume" target="_blank">
          <button>Resumé</button>
        </a>
      </article>
      <img
        id="profile-pic"
        src="./assets/images/profile-picture.jpg"
        alt="line art of a portrait"
      />
    </section>
  );
}
