import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { signup } from './../../redux/auth/authactions';
import { useHistory } from 'react-router';
import "./SignUp.css"


const SignUp = ({ signup }) => {
    const state = useSelector(state => state);
    var [fullname, setfullname] = useState("");
    var [email, setemail] = useState("");
    var [password, setpassword] = useState("");
    var [phoneNumber, setphoneNumber] = useState("");
    var [address, setaddress] = useState("");
    var handleFormSubmit = (e) => {
        e.preventDefault();
        var cred = {
            fullname, email, password, phoneNumber, address
        }
        signup(cred);
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
        <div className="signUpContainer">
            <div className="signUpCard">
                <h1>Sign Up</h1>
                <form onSubmit={handleFormSubmit}>
                    <br /><input value={fullname} onChange={(e) => setfullname(e.target.value)} type="text" placeholder="Full Name" />
                    <br /><input value={email} onChange={(e) => setemail(e.target.value)} type="text" placeholder="Email " />
                    <br /><input value={password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder="Password" />
                    <br /><input value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} type="text" placeholder="phoneNumber" />
                    <br /><input value={address} onChange={(e) => setaddress(e.target.value)} type="text" placeholder="Address" />
                    <br /><button type="submit" >Submit</button>
                </form>

            </div>
        </div>
    )
}
var actions = {
    signup
}

export default connect(null, actions)(SignUp)
