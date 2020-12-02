import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myURL from '../myURL';

export default function Register(props) {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Repassword, setRepassword] = useState('');
    function register (event) {
        event.preventDefault();
        if(Repassword === password) {
            if(username !== '' && email !== '' && password !== '' && Repassword !=='') {
                Axios.get(myURL+'/user').then(res => {
                    var checkUsername = res.data.find(x => x.username === username);
                    var checkEmail = res.data.find(x => x.email === email);
                    if(checkUsername || checkEmail) {
                        alert("username or email is exist!");
                    }
                    else {
                        Axios.post(myURL+'/user',{username,password,email}).then(res => {
                            alert("register success!")
                            props.history.push("/login");
                        })
                    }
                })
            }
            else {
                alert("fill the form!");
            }
        }
        else {
            alert("Re-password and password is not the same!");
        }
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
                            <label>Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email..." 
                            value={email} onChange={(event) => setemail(event.target.value)}/>
                        </li>
                        <li>
                            <label>Password</label>
                            <input type="password" id="password" name="password" placeholder="Password..."
                            value={password} onChange={(event)=>setpassword(event.target.value)}/>
                        </li>
                        <li>
                            <label>Re-Password</label>
                            <input type="password" id="re-password" name="re-password" placeholder="Re-Password..."
                            value={Repassword} onChange={(event)=>setRepassword(event.target.value)}/>
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
