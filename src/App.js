import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is a react App</h1>
        <p>This is really Working!</p>
        <Person />
        <UserInput />
        <UserOutput userName ="Pepito"/>
        <UserOutput userName="Fulana" />
      
      </div>
    );
  }
}

export default App;
