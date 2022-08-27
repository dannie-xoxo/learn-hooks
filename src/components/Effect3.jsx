import React, {useState} from 'react';
import Effect2 from './Effect2';

function Effect3() {
    const [display, setDisplay] = useState(true)
    return ( 
        <>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <Effect2 />}
        </>
     );
}

export default Effect3;