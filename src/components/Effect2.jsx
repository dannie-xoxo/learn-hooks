// Run useEffect only once
import React, {useState, useEffect}from 'react'; //(1)

function Effect2() { //(2)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (event) => { //(5)
        console.log('Mouse event')
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(() => { //(4)
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition) // useEffect used to mimic the componentDidMount 

    
        // useEffect with clean up function.
        // this can be used to cancel subscriptions, timers and remove eventlisteners  
        return (() => {
            console.log('unmounting code......')
            window.removeEventListener('mousemove', logMousePosition) // useEffect used to mimic the componentWillUnmount
        })
    },[])
    return ( 
        <>
        Hooks X-{x} Y- {y}  {/*3*/}
        </>
     );
}

export default Effect2;