import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  //create state variables for the input form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //function to handle input change
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message
    if (inputType === "name" && !inputValue) {
      setErrorMessage("Name is required!");
    } else if (inputType === "email" && !inputValue) {
      setErrorMessage("Email is required!");
    } else if (inputType === "message" && !inputValue) {
      setErrorMessage("Message is required!");
    }
  };

  //function to handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // check for invalid email. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    alert(
      `Hi ${name}! Please note, this page is under construction and does not have any functionality yet. Your message will not be sent.`
    );

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <section id="contact">
      <h2>contact</h2>
      <article>
        {/* <a href="tel:+647 000 0000">647 000 0000</a>
        <a href="mailto:placeholder@mail.com">placeholder@mail.com</a>
        <a href="https://github.com/jjocelynn" target="_blank">
          GitHub
        </a> */}
        <form>
          <div class="form-group">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="name"
              class="form-control"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleBlur}
              type="email"
              class="form-control"
              placeholder="email@example.com"
            />
          </div>
          <div class="form-group">
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleBlur}
              class="form-control"
              placeholder="type your message here!"
              rows="3"
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </article>
    </section>
  );
}
