import React from "react"
import "./Login.css"
import logo from "./svg/logo big.svg"

function Login() {
    return <div className="login">
        <img src={logo} alt="logo" className="logo"/>
        <div className="infoSection">
            <h1 className="title">Welcome to Devs United!</h1>
            <p></p>
            
        </div>
    </div>
}