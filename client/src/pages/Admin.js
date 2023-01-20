import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import NotFound from "./NotFound"
import Navigation from '../components/Navigation';
const Admin = () => {
  
    const [loggedIn, setloggedIn] = useState("");
    const [contacts, setcontacts] = useState();
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            setloggedIn(response.data.loggedIn);
        });
        Axios.get("http://localhost:3001/contact").then((response) => {
            setcontacts(response.data);
        });
    }, []);
    const AddMessages = () => {
        if (loggedIn===true && contacts) {
            return(
                <div class="content">
                    <div className="center">
                        <h1 className="title has-text-black">Messages</h1>
                        <table class="table">
                                    <thead>
                                        <tr>
                                        <th>From</th>
                                        <th>E-Mail</th>
                                        <th>Message</th>
                                        </tr>
                                    </thead>
                        {contacts.map((contact, index) => {
                            return(
                                <tbody>
                                    <tr>
                                    <th>{contact.mess_date_dt}</th>
                                    <td>{contact.mess_email_vc}</td>
                                    <td>{contact.mess_message}</td>
                                    </tr>
                                </tbody>        
                            )
                        })}
                        </table>    
                    </div>
                </div>
            )
        } else {
            return(
            <NotFound/>);
        }
    }

    return(
        <div className="center">
            <Navigation loggedIn={loggedIn}/> 
            <AddMessages/>
        </div>            

    )
};
export default Admin;