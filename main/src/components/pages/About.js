import React from "react";

export default function About() {
  return (
    <section id="about">
      <section id="intro-section">
        <article>
          <p class="intro">Hello, I'm Jocelyn,</p>
          <p class="intro-large">Full Stack</p>
          <p class="intro-large">Developer</p>
          <p class="intro">based in Toronto.</p>
          {/* <a href="placehodler-link-to-resume" target="_blank">
            <button>Resumé</button>
          </a> */}
        </article>
        <img
          id="profile-pic"
          src="./assets/images/profile-picture.jpg"
          alt="line art of a portrait"
        />
      </section>
      <a href="#aboutMe">
        <img
          class="arrow"
          alt="down arrow gif"
          src="./assets/images/down-arrow.gif"
        />
      </a>
      <div id="aboutMe">
        <h2>about</h2>
        <p>
          <br />
          Hi, I'm Jocelyn! I graduated from OCADU with a Bachelors in Fine Arts, specializing in oil painting. Despite my focus on painting, I've
          always maintained a variety of hobbies on the side, one of them being coding. <br /> <br />
          After taking a few art and coding classes, I re-discovered my love of
          coding and decided to take the plunge by enrolling in the Full-Stack
          Developer Bootcamp offered by the University of Toronto. I'm currently
          studying and building my skills as a Full-Stack Developer, with a
          passion for creating dynamic, engaging digital experiences. <br />   <br />
          My background in Fine Arts, coupled with my growing expertise in
          coding, allows me to approach web development with a unique
          perspective and multidisciplinary skill set. I'm excited to continue
          honing my skills and applying my creativity to the world of tech.
        </p>
      </div>
    </section>
  );
}
