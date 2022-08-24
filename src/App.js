import React, { Component } from 'react';

import './App.css';
import HookCounter from './components/hookCounter';
import HookCounter2 from './components/hookCounter2';
import HookCounter3 from './components/hookCounter3';
import HookCounter4 from './components/hookCounter4';
class App extends Component {
  render () {
    return (
    <div className="App">
     {/* <HookCounter /> */}
     {/* <HookCounter2 /> */}
     {/* <HookCounter3 /> */}
     <HookCounter4 />
    </div>
  );
  }
}

export default App;
