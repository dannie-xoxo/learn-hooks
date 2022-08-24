// useState Hook
import React, {useState} from 'react'; //(1)

function HookCounter() {
    // [array destructuring]
    const [count, setCount]= useState(0) // (2)
    return ( 
        <>
        <button onClick={() => setCount(count + 2)}>count {count} </button>
        </>
     ); // (3)
}

export default HookCounter;

/*Comments
 3 steps
- create a component
- need a state variable intialized to zero
- need a method capable of setting the state property value.

 A hook is just a special function that help you hook into react functions
   2 immportant rules when using hooks
   - always call hooks at the top level. don't call hooks inside loops,
   conditions or nested functions
   - only call hooks from react functions. call them from within react components
   and not just any regular javaScript functions*/