import React, { useState } from "react";
import ModalSignIn from "./ModalSignIn";
import ModalSignUp from "./ModalSignUp";

const Landing = () => {

const [isModalSignIn, setModalSignIn ] = useState(false);
const [isModalSignUp, setModalSignUp] = useState(false);

    return (
    <>
        <div className="landing-bg">
            <div className="navbar">
                <div className="logo"></div>        
                <span className="login-btns">
                <button className="login-btn" onClick={() => setModalSignIn(true)}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign In</span>
                </button>
                <button className="login-btn" onClick={() => setModalSignUp(true)}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign Up</span>
                </button>
                </span>
            </div>
            {isModalSignUp && <div className="back-plate" onClose={setModalSignUp}/>}
            {isModalSignUp && <ModalSignUp onClose={setModalSignUp}/>}
            {isModalSignIn && <div className="back-plate" onClose={setModalSignIn}/>}
            {isModalSignIn && <ModalSignIn onClose={setModalSignIn}/>}
        </div>
    </>
    )
}

export default Landing;