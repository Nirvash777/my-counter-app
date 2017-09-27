import React, { Component } from 'react';
import './App.css';
import Welcome from './welcome.js';
import Counter from './counter.js';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name='michel'/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
    </div>

    );
  }
}

export default App;
