//useContext Hook
import React, {useContext} from 'react'; //(1) import the useContext Hook
import ComponentC from './componentC';
import {UserContext, ChannelContext} from '../App' //(2) import the necessary context

function ComponentB() {

    const user = useContext(UserContext)  // (3)  call the useContext function passing in the context as its argument.
    const channel = useContext(ChannelContext)
    return ( 
        <>
       <p>Hello {user}-{channel}</p> 
        </>    //(4)    render in the JSX
     );
}

export default ComponentB;