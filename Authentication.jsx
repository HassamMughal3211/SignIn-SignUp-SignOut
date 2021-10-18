import React from 'react'
import SignUp from './../SignUp/SignUp';
import SignIn from './../SignIn/SignIn';
import SignOut from './../SignOut/SignOut';

export const Authentication = () => {
    return (
        <div>
            <h1>Authentication</h1>
            <SignIn/>
            <SignUp/>
            <SignOut/>
        </div>
    )
}
