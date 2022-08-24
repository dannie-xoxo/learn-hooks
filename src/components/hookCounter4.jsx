// useState with arrays
import React,{useState} from 'react'; //(1) import useState

function HookCounter4() {
    const [items, setItems] = useState([]) //(2) declare the useState 
    const addItems = () => {  //(3) set the new state variable
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1 //generate a random number
        }])
    }
    return ( 
        <>
        <button onClick={addItems}>Add an Item</button>
        <ul>
            {
                items.map(item => ( // declare the map method which is used to iterate over
                // an array and calling function on every element of array
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ul>
        </>
    );
}

export default HookCounter4;
/* Summary of the useState Hook.
- let's you add state to a functional component
- in classes, the state is always an object.
- with the useState hook, the state doesn't have to be an object,
it could be an array, string, boolean or a number
- the useState hook returns an array with 2 elements
1 the current value of the state
2 the setter functon.
- New state value depends on the previous state value? you can pass a function to the setter function
- when dealing with objects and arrays, always make sure to spread your state variable and then 
call the setter function.  */