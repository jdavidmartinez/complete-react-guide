import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [{ name: "parcerito" }, { name: "Talita" }],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react App</h1>
        <p>This is really Working!</p>
        <Person />
        <UserInput />
        <UserOutput name={this.state.persons[0].name} />
        <UserOutput name={this.state.persons[1].name} />
      </div>
    );
  }
}

export default App;
