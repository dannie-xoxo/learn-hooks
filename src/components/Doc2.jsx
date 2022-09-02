import React, { useState } from 'react';
import useDoc from '../hooks/useDoc';

function Doc2() {
    const[count, setCount] = useState(0)

    useDoc(count)
    return ( 
        <>
        <button onClick={() => setCount(count + 1)}> Count: {count}</button>
        </>
     );
}

export default Doc2;