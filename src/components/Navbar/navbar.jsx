import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light w-100 white-back-overlay">
        {this.props.showBrand ? (
          <a class="navbar-brand ml-3" href="#3">
            <img
              src="./assets/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Availability
          </a>
        ) : (
          ""
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item white-hover-overlay">
              <a className="nav-link font-weight-bold text-dark" href="#3">
                Create New Event
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
