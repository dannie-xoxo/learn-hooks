import React from 'react';
import {ChannelContext, UserContext} from '../App'
function ComponentC() {
    return ( 
        <>
        <UserContext.Consumer>
            {
                user => {
                    return (
        <ChannelContext.Consumer>
            {
                channel => {
                    return (
                        <p>Hello {user} {channel}</p>
                    )
                }}
                </ChannelContext.Consumer>
            )
                }}
              
        </UserContext.Consumer>
        </>
     );
}

export default ComponentC;