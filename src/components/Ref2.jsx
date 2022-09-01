import React, { useEffect, useRef, useState } from 'react';

function Ref2() {
    const[timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect (() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1 )
        },1000)
        return (() => {
            clearInterval(intervalRef.current)
        })
        
    },[])
    return ( 
        <>
        Timer- {timer}
        <div>
        <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
        </div>
        </>
     );
}

export default Ref2;