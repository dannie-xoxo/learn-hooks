/*useCallback Hook
This is a hook that will return a memoized version of the callback function
that only changes if one of the dependencies has changed.
- it is useful when passing callbacks to optimizred child components
that rely on reference equality to prevent unnecessary renders
  - using the usecallBack hook slows down the need of its use which is performance optimization 
  the constant writing of arrow function tends to mess with optimization.
   */
import React, {useState, useCallback} from 'react';
import Button from './Button';
import Count from './count';
import Title from './title';

function ParentComp() {
    const[age, setAge] = useState(21)
    const[salary, setSalary] = useState(50000)
     
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

     const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
     },[salary])

    return (  
        <>
        <Title />
        <Count text='Age' count= {age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text='Salary' count={salary} />
        <Button handleClick= {incrementSalary}>Increment Salary</Button>
        </>
    );
}

export default ParentComp;