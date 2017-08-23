import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import python from './python-5.svg';
import './App.css';
import { Button, Modal } from 'react-bootstrap';



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    console.log('Constructor value of showModal: ' + this.state.showModal);
  }
  close() {
    console.log('close');
    this.setState({ showModal: false });
    console.log("Close method: " + this.state.showModal);
  }
  open() {
    console.log('open');
    this.setState({ showModal: true });
    console.log("Open method: " + this.state.showModal);
  }
  render() {
    return (
      <div className="dynamic-modal">
        <p>Click to get the full Modal experience!</p>

        <Button bsStyle="primary" bsSize="large" onClick={this.open}>Launch demo modal</Button>

        <Modal show={this.state.showModal} onHide={this.close}>

          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={python} className="App-logo" alt="logo" />
          <h2>ReactiveDjango</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button bsStyle="success" onClick={this.onButtonClick}>Send get</Button>
        </div>
        <Signup />
      </div>
    );
  }
  onButtonClick(ev){
    console.log("Sending a get api call!!!");
    axios.get('http://localhost:8000/products')
    .then(res => {
        console.log(JSON.stringify(res))});
  }
}

export default App;
