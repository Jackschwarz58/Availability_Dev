import React, { Component } from "react";
import Header from "./Header/header";
import Calendar from "./Calendar/calendar";
import CreateInfo from "./CreateInfo/createinfo";

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
          <div className="row text-center mx-5 mb-4">
            <div className="col-lg-6">
              <CreateInfo />
            </div>
            <div className="col-lg-6">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
