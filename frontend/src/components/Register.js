import Axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [username, setusername] = useState('');
    const [password, setpasword] = useState('');
    function register (event) {
        event.preventDefault();
        if(username && password) {
            Axios.get('http://localhost:3000/user').then(res => {
                var checkusername = res.data.find(x => x.username === username)
                if(checkusername) {
                    alert("username is exist!");
                }
                else {
                    Axios.post('http://localhost:3000/user',{username,password}).then(res => {
                        alert("register success!")
                    })
                }
            })
        }
        else {
            alert("please register!");
        }
        // Axios.post('http://localhost:3000/user').then()
        // console.log("username:",Username);
        // console.log("password:",matkhau);
    }
    return (
        <div>
            <div className="form">
                <form onSubmit={register}>
                    <ul className="form-container">
                        <li className="title">Create Account</li>
                        <li>
                            <label>Your Name</label>
                            <input type="text" id="username" name="username" placeholder="Your Name..." 
                            value={username} onChange={(event) => setusername(event.target.value)}/>
                        </li>
                        <li>
                            <label>Password</label>
                            <input type="password" id="password" name="password" placeholder="Password..."
                            value={password} onChange={(event)=>setpasword(event.target.value)}/>
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
