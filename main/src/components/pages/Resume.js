import React from "react";

export default function Resume() {
  const frontEnd = [
    "HTML",
    "CSS",
    "Javascript",
    "jQuery",
    "responsive design",
    "react",
    "Bootstrap",
  ];
  const backEnd = [
    "API's",
    "Node",
    "Express",
    "MySQL",
    "Sequelize",
    "Mongo",
    "Mongoose",
  ];

  return (
    <section id="resume">
      <p>view my resume</p>
      <a
        href="./assets/images/working-on-it.gif"
        target="blank"
        // image from https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif
      >
        <button>resumé</button>
      </a>
      <h2>Front End Proficiencies</h2>
      <ul className="proficiencies">
        {frontEnd.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
      <h2>Back End Proficiencies</h2>
      <ul className="proficiencies">
        {backEnd.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
