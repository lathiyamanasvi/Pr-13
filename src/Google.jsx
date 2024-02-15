import React from 'react'
import logo from './logo.svg';
import { PiSquaresFourBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, goggleAuth } from './firebase-config';

const Google = () => {

    const login = async () => {
        try {
            await signInWithPopup(auth,goggleAuth)
        } catch (error) {
            console.log(error);
            return false; 
        }
        console.log("done");
    }

    return (
        <>
            <center>
                <div className='w-50 shadow p-5' style={{ marginTop: "10%", backgroundColor: "#ffffff" }}>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <img src={logo} className="border-end me-3" alt="logo" style={{ width: "80px" }} />
                        <h2 style={{ color: "#757575" }}>React Js</h2>
                    </div>
                    <div className='d-flex align-items-center justify-content-center text-muted px-3'>
                        <PiSquaresFourBold />
                        <h2 className='ms-2'>Account Sign-In</h2>
                    </div>
                    <div style={{ color: "#888888" }} className='mt-3 fs-5'>
                        <p>Customize the Sign in with Google modal with your company brand and personal accout</p>
                    </div>
                    <div class="button-icon" onClick={() => login()}>
                        <div class="icon"><FcGoogle /></div>
                        <div class="cube">
                            <span class="side front">hover me</span>
                            <span class="side top">Sign in with Google</span>
                        </div>
                    </div>

                </div>
            </center>
        </>
    )
}

export default Google
