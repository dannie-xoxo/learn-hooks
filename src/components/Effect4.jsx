// useEffect with incorrect dependencies
import React, {useState, useEffect} from 'react'; // (1)

function Effect4() {
    const [count, setCount] = useState(0) //(2)

    const tick = () => { //(3)
        setCount(prevCount => prevCount + 1) 
    }
    useEffect (() => {  //(4)
        const interval = setInterval( tick, 1000) // mimic the componentDidMount lifecycle method 
        return(() => {  
            clearInterval (interval) // the clean up code (mimic the componentWillUnMount)
        })
    },[]) 
    
    return ( 
        <>
        {count} 
        </>
     );
}

export default Effect4;