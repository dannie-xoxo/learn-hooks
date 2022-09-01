import React from 'react';

function Count({text, count}) {
    console.log(`rendering ${text}`)
    return ( 
        <>
        {text} - {count}
        </>
     ); 
}

export default React.memo(Count) ;