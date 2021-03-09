import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [{ name: "Oliveiro" }, { name: "Maga" }],
  };

  handlerEventHandler = (newName) => {
    this.setState({
      persons: [{ name: newName }, { name: "Talita" }],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react App</h1>
        
        
        <UserInput />
        <button onClick={this.handlerEventHandler.bind(this, 'Andres')}>Handler Event</button>
        <UserOutput 
        name={this.state.persons[0].name} 
        click={this.handlerEventHandler.bind(this,'juan')}
        />
        <UserOutput 
        name={this.state.persons[1].name}
         />
      </div>
    );
  }
}

export default App;
