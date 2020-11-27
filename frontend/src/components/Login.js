import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import myURL from '../myURL';

export default function Login(props) {
    function Login(event) {
        event.preventDefault();
        const username = event.target['username'].value;
        const password = event.target['password'].value;
        if(username && password) {
            Axios.post(myURL+'/login',{username,password}).then(res => {
                if(res.data) {
                    localStorage.setItem("username",username);
                    localStorage.setItem("password",password);
                    props.LoginSuccess();
                    props.history.push('/');
                }
                else {
                    localStorage.setItem("username","");
                    localStorage.setItem("password","");
                    props.LoginFail();
                }
        })
        }
        else {
            alert("enter your username & password!")
        }
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
