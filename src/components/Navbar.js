import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  return (

        <nav class={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div class="container-fluid ">
            <a class="navbar-brand" href="#">
              {" "}
              {props.title}
            </a>
            <button
              class="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent"aria-expanded="false"aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <div
                class={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                <input class="form-check-input"onClick={props.toggleMode}type="checkbox"role="switch"id="flexSwitchCheckDefault"/>
                <label class="form-check-label  "htmlFor="flexSwitchCheckDef"> 🌒 Enable Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};