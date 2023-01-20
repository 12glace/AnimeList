import React from 'react';
import Navigation from '../components/Navigation';
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
    const [pass, setpass] = useState('');
    const [user, setuser] = useState('');

    const [loginName, setloginMessage]= useState("");
    const navigate = useNavigate();

    Axios.defaults.withCredentials = true;
    const login = ()=>{
        Axios.post("http://localhost:3001/login", {
            user: user,
            pass: pass,
        }).then((response) =>{
            console.log(response);
            if(response.data.message){
                setloginMessage(response.data.message); 
            }    
            if(response.data.loggedIn){                
                setloginMessage(response.data.user.user_username_vc);
                navigate('/admin')
            }
        });
    };
    
    const [loggedIn, setloggedIn] = useState("");
    

    Axios.defaults.withCredentials = true;

    useEffect(() => {        
        Axios.get("http://localhost:3001/login").then((response) => {
            setloggedIn(response.data.loggedIn);
            console.log(response.data.loggedIn);
            if(response.data.loggedIn){                
                setloginMessage(response.data.user.user);
                navigate('/admin')
            }
        });
    }, [navigate]);
    
    console.log(loggedIn)
    return (
        <div className='login center'>
            <Navigation/>
            <h3 className="title has-text-black">Login</h3>
            <hr className="login-hr"></hr>

            <div className="box has-text-centered">
                <img alt="earth" src="./img/image003.png"/>
                <label>
                    < p>Username</p>
                    <input className="input is-medium" type="text" placeholder='Username' autoFocus=""
                    onChange={(e) => {setuser(e.target.value)}}
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input className="input is-medium" type="password" placeholder='Password' 
                    onChange={(e) => {setpass(e.target.value)}} 
                    />
                </label>
                
                <div className="is-centered">
                <br/>
                    <button className="button is-outlined is-large" type="submit" onClick={login}>Login</button>
                </div>
            </div>
            <div className="has-text-grey is-4">Please enter your email and password.</div>
                
            <h1>{loginName}</h1>
        </div>
    );
}; 

export default Login;