//useState with object
import React, {useState} from 'react';  //(1)

function HookCounter3() {
                                //object as a parameter in the useState 
    const [details, setDetails] = useState({   //(2)
        firstName: '',
        lastName: '',
        eMail: ''
    })

    const onSubmitChange = (event) => {
        event.preventDefault()
        alert('Subscription sucessful')

    }
    return (   //(3) 
        <>
        <form onSubmit={onSubmitChange}>
            <div>
                <label>First-Name: </label>
            <input type='text' value={details.firstName}
             onChange={(event) => setDetails({...details, firstName: event.target.value})} required/>
             </div>

             <div>
             <label>Last-Name: </label>
            <input type='text' value={details.lastName} 
             onChange={(event) => setDetails({...details, lastName: event.target.value})} required/>
             </div>

             <div>
                <label>E-mail: </label>
                <input type='text' value={details.eMail}
               onChange={(event) => setDetails({...details, eMail: event.target.value})} required />
             </div>
             <button type='submit'>Submit</button>

            <p>Your  first naame is: {details.firstName}</p>
            <p>Your last namme is: {details.lastName}</p>
            <p>Your email address: {details.eMail}</p>
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