import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, dude!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />That is all that it takes!!!!
          <br /> Now it is time to actually build something useful...
          <br /><button type="button" class="btn btn-primary">Primary</button>
        </p>
      </div>
    );
  }
}

export default App;