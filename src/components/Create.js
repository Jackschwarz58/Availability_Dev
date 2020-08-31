import React, { Component } from "react";
import Header from "./Header/header";
import Calendar from "./Calendar/calendar";

class Create extends Component {
  state = {};

  componentDidMount() {
    document.title = "Availability - Create Event";
  }

  render() {
    return (
      <div>
        <Header showBrand={true} pageTitle={"Create an Event"} />
        <div className="container-fluid p-4">
          <div className="row text-center m-5">
            <div className="col-lg-6">Half</div>
            <div className="col-lg-6">Half</div>
          </div>
        </div>
        {/* <Calendar /> */}
      </div>
    );
  }
}

export default Create;
