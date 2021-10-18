import React from 'react'
import { connect } from 'react-redux'
import { signout } from './../../redux/auth/authactions';

const SignOut = ({signout}) => {
    return (
        <div>
            {signout}
        </div>
    )
}

var actions = {
    signout
}

export default connect(null,actions)(SignOut);
