import React, { Component } from 'react';

import './App.css';
import HookCounter from './components/hookCounter';
class App extends Component {
  render () {
    return (
    <div className="App">
     <HookCounter />
    </div>
  );
  }
}

export default App;
