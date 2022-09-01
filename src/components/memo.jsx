/*useMemo Hook
 This is also used in performance optimization which is quite similar
 to the useCallBack hook.
 The similarities is they both expect a function and an array of dependencies
 The difference is that
 useCallBack: caches the provided function instance itself
 useMemo: invokes the provided function and caches its result*/
import React, {useState, useMemo}from 'react';

function Memo() {
    const[count1, setCount1] = useState(0)
    const[count2, setCount2] = useState(0)

    const increment1= () => {
        setCount1(count1 + 1)
    }

    const increment2 = () => {
        setCount2(count2 + 1)
    }

    const isEven = useMemo(() => { // created a while loop to slow down our function
        let i = 0
        while(i <2000000000) i++
        return count1 % 2 === 0
    },[count1])
    return ( 
        <>
        <div>
        <button onClick={increment1}>Increment1: {count1}</button>
        <span>{ isEven ? 'Even': 'Odd'}</span>
        </div>
        <div>
        <button onClick={increment2}>Increment2: {count2}</button>
        </div>
        </>
     );
}

export default Memo;