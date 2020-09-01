import React, { Component } from "react";
import "./createinfo.css";

class CreateInfo extends Component {
  state = {};
  render() {
    return (
      <form>
        <input
          type="text"
          name="evt-nme"
          className="question event-t"
          id="evt-nme"
          required
          autoComplete="off"
        />
        <label htmlFor="evt-nme">
          <span>New Event Name</span>
        </label>
      </form>
    );
  }
}

export default CreateInfo;
