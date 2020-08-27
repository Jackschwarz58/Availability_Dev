import React, { Component } from "react";
//import Banner from "./banner/banner";

class Create extends Component {
  state = {};

  //This checks to ensure user is logged in to access the dashboard view
  componentDidMount() {
    document.title = "Availability - Create Event";
  }

  render() {
    return <div>Create Page</div>;
  }
}

// //This is for Redux store access
// const mapStateToProps = (state) => {
//   return state;
// };

// export default connect(mapStateToProps)(DashboardCreate);

export default Create;
