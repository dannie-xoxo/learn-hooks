// useEffect Hook after render
import React,{useState, useEffect} from 'react';

function Effect1() {
    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

    useEffect(() => { /* a function is passed as an argument each time the component renders.
         it runs after the 1st render of the component and after every update.
         it is placed inside the component which allow ease access to the component state and props
         without writing any other code.
         For conditionally executing an effect, a second argument is passed which is an array
         within the array, you need to specify whether prop or state that need 
         to change or be updated when the component re-renders. */
        console.log('Updating files')
        document.title = `${name} clicked ${count} times` 
    }, [count, name])
    return ( 
        <>
        <input type='text' value= {name}  onChange={(event) => setName(event.target.value)} />
        <button onClick={() => setCount(count + 2)}>Clicked {count} times</button>
        </>
     );
}

export default Effect1;
/*  The Effect hook let's  you perform side effects in functional components.
 it is a close replacement for the following three lifecycle methods which are
 - componentDidMount
 - componentDidUpdate
 - conponentWillUnmount */

