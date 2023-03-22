import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1
        href="#home"
        onClick={() => handlePageChange("Home")}
        className={currentPage === "Home" ? "nav-link active" : "nav-link"}
      >
        Jocelyn Chiu
      </h1>
      <nav>
        <ul>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#work"
              onClick={() => handlePageChange("Work")}
              className={
                currentPage === "Work" ? "nav-link active" : "nav-link"
              }
            >
              Work
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavTabs;
