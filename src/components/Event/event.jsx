import React, { Component } from "react";
import "./event.css";
import Navbar from "../Navbar/navbar";

class Event extends Component {
  state = {};
  render() {
    const { eventName } = this.props;
    return (
      <div>
        <Navbar showBrand={true} />
        <div className="hero-banner">
          <span className="event-title">{eventName}</span>
        </div>
      </div>
    );
  }
}

export default Event;
