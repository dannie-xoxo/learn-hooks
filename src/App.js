import React from 'react';

import './App.css';
import HookCounter from './components/hookCounter';
import HookCounter2 from './components/hookCounter2';
import HookCounter3 from './components/hookCounter3';
import HookCounter4 from './components/hookCounter4';
import Effect1 from './components/Effect1';
import Effect2 from './components/Effect2';
import Effect3 from './components/Effect3';
import Effect4 from './components/Effect4';
import ComponentA from './components/componentA';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App () {
    return (
    <div className="App">
     {/* <HookCounter /> */}
     {/* <HookCounter2 /> */}
     {/* <HookCounter3 /> */}
     {/* <HookCounter4 /> */}
     {/* <Effect1 /> */}
     {/* <Effect2 /> */}
     {/* <Effect3 /> */}
     {/* <Effect4 /> */}
     <UserContext.Provider value={'Daniel'}>
      <ChannelContext.Provider value={'Orisaeke'}>
     <ComponentA />
     </ChannelContext.Provider>
     </UserContext.Provider>
    </div>
  );
  }

export default App;
