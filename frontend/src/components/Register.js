import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    function register () {
        alert("register");
    }
    return (
        <div>
            <div className="form">
                <form onSubmit={register}>
                    <ul className="form-container">
                        <li className="title">Create Account</li>
                        <li>
                            <label>Your Name</label>
                            <input type="text" id="username" name="username" placeholder="Your Name..." />
                        </li>
                        <li>
                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Email..." />
                        </li>
                        <li>
                            <label>Password</label>
                            <input type="password" id="password" name="password" placeholder="Password..." />
                        </li>
                        <li>
                            <button type="submit" className="btn-Signin">Register</button>
                        </li>
                        <li>
                            Already have an account <Link to="/login">Log In</Link>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}
