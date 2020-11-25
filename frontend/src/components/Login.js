import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    function Login() {
        alert("Login");
    }
    return (
        <div className="form">
            <form onSubmit={Login}>
                <ul className="form-container">
                    <li className="title">Sign-In</li>
                    <li>
                        <label>username</label>
                        <input type="text" id="username" name="username" placeholder="username..." />
                    </li>
                    <li>
                        <label>Password</label>
                        <input type="password" id="password" name="password" placeholder="Password..." />
                    </li>
                    <li>
                        <button type="submit" className="btn-Signin">Log In</button>
                    </li>
                    <li>New to Domino?</li>
                    <li>
                        <Link to="/register" className="btn-Register">Create Account</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}
