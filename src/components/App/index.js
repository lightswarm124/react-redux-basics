import React, { Component } from 'react';
import Main from "../Main";
import './App.css';
import "isomorphic-unfetch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cryptocurrency Listing</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
