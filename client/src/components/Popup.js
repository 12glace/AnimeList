import React from 'react';
import {useState} from 'react';
import Axios from 'axios';

const Popup = (props) => {
    const [username, setname] = useState('');
    // const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');
    const addUser = () =>{
        if (password === password2){
            Axios.post('http://localhost:3001/register',{
                username:username, 
                password:password,
            }).then((response) => {
                setMessage(response.statusText);
            });
        }else{
            setMessage('Passwords do not match');
        }
    };

    return(props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="center">
                    <p className='has-text-danger'>{message}</p>
                    <h2 className="is-size-5">Create your account now</h2>                    
                </div>                
                <button className="close-btn button is-light" onClick={() => props.setTrigger(false)}>x</button>
                {props.children}
                    <div className="center is-size-5"></div>
                    <br/>
                    <label>Username:</label>
                    <input className="input" type="text" placeholder='Username'
                        onChange={(event)=> {
                            setname(event.target.value);
                        }}
                    />
                    {/* <br/>
                    <label >Email:</label>
                    <input  className="input" type="email" placeholder='Email' onChange={(event)=> {
                            setemail(event.target.value);
                        }}
                    />
                    <br/> */}
                    <label >Password:</label>
                    <input  className="input" type="password" placeholder='Password' onChange={(event)=> {
                            setPassword(event.target.value);
                        }}
                    />
                    <label >Entre Password again:</label>
                    <input  className="input" type="password" placeholder='Password' onChange={(event)=> {
                            setPassword2(event.target.value);
                        }}
                    />
                    <br/>
                    <div className="center">
                        <button className="button is-outlined pink" onClick={addUser} >Sign up</button>
                    </div>                    
                </div>                            
             
            </div>
    ):"";
};

export default Popup;