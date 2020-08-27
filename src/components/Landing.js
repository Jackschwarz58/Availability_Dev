import React, { Component } from "react";
//import Banner from "./banner/banner";
import Header from "./Header/header";
import About from "./About/about";

class Create extends Component {
  state = {};

  componentDidMount() {
    document.title = "Availability - About";
  }

  render() {
    return (
      <div>
        <Header />
        <div className="p-5 container">
          <About />
        </div>
      </div>
    );
  }
}

export default Create;
