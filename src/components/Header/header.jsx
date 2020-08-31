import React, { Component } from "react";
import "./header.css";
import Navbar from "../Navbar/navbar";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar showBrand={this.props.showBrand} />
        <div className="hero-banner d-flex">
          <div className="page-title w-100 text-center align-self-center">
            {this.props.pageTitle}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
