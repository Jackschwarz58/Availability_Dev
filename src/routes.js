import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import App from "./components/App";
import Landing from "./components/Landing";
import Footer from "./components/Footer/footer";

class Routes extends Component {
  state = {};

  //This checks to ensure user is logged in to access the dashboard view
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Create />} />
            <Route path="/event" exact component={() => <App />} />
            <Route path="/about" exact component={() => <Landing />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default Routes;
