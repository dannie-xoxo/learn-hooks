/* useReducer Hook
This is used for state management which involves complex state logic, 
It's an alternative for useState Hook
- accepts 2 parameters 
-reducer which accepts 2 argument which are (current state and action)
- intialstate. */
import React, {useReducer} from 'react'; //(1) import useReducer

const initialState = 0 //(3) declare the initial state
const reducer = (state, action) => {  //(4) declare the reducer variable
    switch(action) {
        case 'Increment':
        return (state + 2)
        case 'Decrement' :
        return (state - 1)
        case 'Reset' :
        return (initialState)
        default : 
        return(state)
    }
}

function Reducer1() { 
    const [count, dispatch] = useReducer(reducer, initialState) //(2) call the useReducer function
    return (  //(5) render in the JSX
        <> 
        Count - {count}
        <button onClick={() => dispatch('Increment')}>Increment</button>
        <button onClick={() => dispatch('Decrement')}>Decrement</button>
        <button onClick={() => dispatch('Reset')}>Reset</button>
        </> //( The dispatch method is responsible for sending out the action to the assigned buttons )
     );
}

export default Reducer1;