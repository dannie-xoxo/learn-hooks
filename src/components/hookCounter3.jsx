//useState with object
import React, {useState} from 'react';

function HookCounter3() {
                                //object as a parameter in the useState 
    const [name, setName] = useState({firstName: '', lastName: ''})
    return ( 
        <>
        <form>
            <input type='text' value={name.firstName}
             onChange={(event) => setName({...name, firstName: event.target.value})} />
            <input type='text' value={name.lastName} 
             onChange={(event) => setName({...name,lastName: event.target.value})}/>
            <p>Your  first name is: {name.firstName}</p>
            <p>Your last name is: {name.lastName}</p>
        </form>
        </>
     );
}

export default HookCounter3;

/*Comments
unfortunately, the setter function provided by the useState hook
 does not automatically merge and updated objects 
it has to be manually merged using the spread operator ... and pass the value 
to the setter function. */