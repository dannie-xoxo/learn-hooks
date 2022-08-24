// useState with previous state
import React, {useState} from 'react';

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return ( 
        <>
        count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </>
     );
}

export default HookCounter2;