import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './Profile.css';


const Profile = () => {
    const userProfile = useSelector((state) => state);
    var { fullname, userEmail, address, phoneNumber } = userProfile.auth;
    console.log( userProfile.auth)
    return (
        <div>
            <div className="profileContainer">
                <div className="profileCard">
                    <h1>User Profile</h1>
                    <h2>Full Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {fullname}</h2>
                    <h2>Email Address&nbsp;&nbsp;&nbsp;&nbsp;: {userEmail}</h2>
                    <h2>Phone Number&nbsp;&nbsp;: {phoneNumber}</h2>
                    <h2>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {address}</h2>

                </div>
            </div>
        </div>
    )
}

export default Profile
