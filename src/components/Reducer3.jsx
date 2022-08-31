/*Multiple useReducer */
import React, {useReducer} from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
    case 'increment':
        return(state + 1)
    case 'decrement':
        return(state - 1)
    case 'reset': 
        return(initialState)
    default:
        return(state)
    }
}
function Reducer3() {
    const[count, dispatch] = useReducer(reducer, initialState)
    const[count1, dispatch1] = useReducer(reducer, initialState)
    return ( 
        <>
        Count - {count}
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <div>
        Count - {count1}
        <button onClick={() => dispatch1('increment')}>Increment</button>
        <button onClick={() => dispatch1('decrement')}>Decrement</button>
        <button onClick={() => dispatch1('reset')}>Reset</button> 
        </div>
        </>
     );
}

export default Reducer3;