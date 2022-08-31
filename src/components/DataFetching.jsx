// Fetching data using the useReducer
import React, {useReducer, useEffect}from 'react'; //(1- import necessary hooks and axios)
import axios from 'axios';

const initialState = { //(2- declare current state)
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => { //(3- function to update the current state)
    switch(action.type) {
        case 'FETCH-SUCESS':
            return {
                loading: false,
                error: '',
                post:action.payload

            }
        case 'FETCH-ERROR':
            return {
                loading: false,
                error:'Something went wrong....',
                post:{}
            }
        default:
            return state
    }
}

function DataFetching() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect (() => {  //(4- make the API call  )
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            dispatch({type: 'FETCH-SUCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH-ERROR' })
        })
    })
    return ( //(5- specify the JSX)
        <>
        {state.loading ?'Loading' : state.post.title}
        {state.error ? state.error: null}
        </>
     );
}

export default DataFetching;