import Axios from 'axios';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Contact = () => { 

    const [subjet, setsubjet] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const addMessageContact = () =>{
        Axios.post('http://localhost:3001/contact',{
            subjet:subjet, 
            email:email,
            message:message,
        }).then(() => {
            console.log("success");    
        });
    };

    return (
        <div>
            <Navigation/> 
            <div className="contact container">
                <h2 className="title is-2 is-capitalized">CONTACT US</h2>
            <div class="columns">
                <div class="is-half address is-vcentered">
                    <div class=" ">
                        <h1>NANTES</h1>
                        <p>Bois de boulogne<br/>44000</p>
                        <p>+336 96 69 69 69</p>
                        <p><a href="mailto:douglas.barlow79@gmail.com">douglas.barlow79@gmail.com</a></p>
                    </div>
                </div>
                <div class="column column is-four-fifths">
                    <div className="field">
                        <label for="subjet" className="label is-size-4 has-text-weight-light"></label>
                        <div className="control has-icons-right">
                            <input type="text" name="subjet" id="subjet" className="input" placeholder="Nom " autofocus 
                            onChange={(event)=> {
                            setsubjet(event.target.value);
                        }}
                    />
                                <span className="icon is-left">
                                    <i className="fa fa-user"></i>
                                </span>
                        </div>
                    </div>
                    <div className="field">
                        <label for="email" className="label is-size-4 has-text-weight-light"></label>
                        <div className="control has-icons-right">
                            <input type="email" name="email" id="email" className="input" placeholder="Email"
                            onChange={(event)=> {
                            setemail(event.target.value);
                        }}
                    />
                                <span className="icon is-left">
                                    <i className="fa fa-envelope"></i>
                                </span>
                        </div>
                    </div>
                    <div className="field">
                        <label for="message" className="label is-size-4 has-text-weight-light"></label>
                        <textarea name="message" id="message" rows="5" className="textarea is-medium" placeholder="Message"
                            onChange={(event)=> {
                            setmessage(event.target.value);
                        }}
                    />
                    </div>
                    <button onClick={addMessageContact} type="submit" className="button is-outlined is-large orange">Envoyer</button>
                
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;