import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount () {
    axios
      //.get( '/healthcheck' ) // this will fail because it's looking in 3000 root.
      .get( '/healthcheck' ) // This will work after a proxy url is added in package.json
      .then( res => { // whenever then() is used it's a promice.
        // Response from API.
        console.log( res )
      } )
      .catch( err => { // Catch allows you a condition to handle an error.
        console.log( err )
      } )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
