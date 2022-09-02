import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter2() {
    const[count, increment, decrement, reset] = useCounter(10, 5)
    return ( 
        <>
        <h2> Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
     );
}

export default Counter2;