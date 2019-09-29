import React, { Component } from "react";
import "./App.css";
import AddTask from "./toDoApp/AddTask";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <AddTask />
      </div>
    );
  }
}

export default App;
