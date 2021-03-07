import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [{ name: "Oliveiro" }, { name: "Maga" }],
  };

  handlerEventHandler=()=>{
    //console.log("Was clicked")
    this.setState({
      persons: [{ name: "Manu" }, { name: "Talita" }]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react App</h1>
        <p>This is really Working!</p>
        <Person />
        <UserInput />
        <button onClick={this.handlerEventHandler}>Handler Event</button>
        <UserOutput name={this.state.persons[0].name} />
        <UserOutput name={this.state.persons[1].name} />
      </div>
    );
  }
}

export default App;
