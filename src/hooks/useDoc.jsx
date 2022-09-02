import {useEffect} from 'react';

function useDoc(count) {
    useEffect (() => {
        document.title= `Count: ${count}`
    },[count])
}

export default useDoc;