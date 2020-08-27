import React, { Component } from "react";
import Event from "./Event/event";

class App extends Component {
  state = {};

  componentDidMount() {
    document.title = "The Enchantment Under the Sea Dance";
  }

  render() {
    return (
      <div>
        <Event eventName="The Enchantment Under the Sea Dance" />
      </div>
    );
  }
}
export default App;
