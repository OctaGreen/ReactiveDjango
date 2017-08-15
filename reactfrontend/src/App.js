import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            <button type="button" onClick={this.onClick}>Send get</button>
        </div>
      </div>
    );
  }
  onClick(ev){
    console.log("Sending a get api call!!!");
    axios.get('http://localhost:8000/products')
    .then(res => {
        console.log(JSON.stringify(res))});
  }
}

export default App;
