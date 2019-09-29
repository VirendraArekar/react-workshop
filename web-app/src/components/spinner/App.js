//App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoaderComponent from './LoaderComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello AppDividend
        <LoaderComponent/>
      </div>
    );
  }
}

export default App;