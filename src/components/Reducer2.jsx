/*useReducer(complex state and action) */
import React, {useReducer} from 'react';

const initialState = { // convert state to object
    firstCounter: 0,
    secondCounter: 5
}
const reducer = (state, action) => {
    switch(action.type) { // add type to the switch expression
        case 'increment': {/*now return the new state object*/}
            return {...state, firstCounter: state.firstCounter + action.value} 
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2': 
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return (initialState)
        default :
         return (state)
    } //........ component action and state are now objects...........

    /********the spread operator is used to merge return statements with state properties *******
     * By using action as an object, we're able to pass additional data 
     to the reducer function.
     * By using state as an object, we're able to keep track of multiple state variables.
      This approach is well suited when dealing with global state*/
    
}

function Reducer2() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return ( 
        <>
        First Counter - {count.firstCounter} 
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button> {/*convert our simple string action into an object which conatains a property called type which is a string */}
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <div>
        Second Counter - {count.secondCounter}
        <button onClick={() => dispatch({type: 'increment2', value: 5})}>Increment-5</button> 
        <button onClick={() => dispatch({type: 'decrement2', value: 5})}>Decrement-5</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
        </>
     );
}

export default Reducer2;