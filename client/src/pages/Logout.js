import React from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Logout = () => {
    const navigate = useNavigate();
    const [shouldRedirect, setShouldRedirect] = useState(false);
  
    useEffect(() => {
      if (shouldRedirect) {
        navigate('/');
      }
    });

    Axios.get("http://localhost:3001/logout").then((response) => {
        response.data.loggedIn === false? setShouldRedirect(true): setShouldRedirect(false);
    });
    
    return (
        <div>
            
        </div>
    );
};

export default Logout;