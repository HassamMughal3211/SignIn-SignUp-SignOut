import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { signin } from './../../redux/auth/authactions';
import { useSelector } from 'react-redux';
import "./SignIn.css"

const SignIn = ({ signin }) => {
    const state = useSelector(state => state);
    var [email, setemail] = useState("");
    var [password, setpassword] = useState("");
    var handleFormSubmit = (e) => {
        e.preventDefault();
        var cred = {
            email, password
        }
        signin(cred)
        console.log(cred)
    }

    var history = useHistory();

    function handleClick() {
        history.push("/");
    }
    useEffect(() => {
        if (state.auth) {
            handleClick();
        }
    }, [state])
    return (
        <div className="signInContainer">
            <div className="signInCard">

            <h1>Sign In</h1>
            <form onSubmit={handleFormSubmit}>
                <input value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="Email " />
                <input value={password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder="Password" />
                <button type="submit" >Submit</button>
            </form>
            </div>
        </div>
    )
}
var actions = {
    signin
}
export default connect(null, actions)(SignIn);
