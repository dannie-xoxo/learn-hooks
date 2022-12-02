/* useRef Hook
-used to reference or access DOM elements.
- allows you to persist values between renders.
- it can also be used to store a muttable value that
doesnt cause a re-render when updated */

import React, { useEffect, useRef } from 'react';

function Ref1() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
        console.log('input focused....')
    },[])
    return ( 
        <>
        <input ref={inputRef} type='text' />
        </>
     );
}

export default Ref1;