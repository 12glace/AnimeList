import React from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import { useState, useEffect } from 'react';
const Navigation = () => {
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
      }
      const [loggedIn, setloggedIn] = useState("");
      useEffect(() => {
          Axios.get("http://localhost:3001/login").then((response) => {
              
              setloggedIn(response.data.loggedIn);
              console.log(response.data.loggedIn);
          });
      }, []);
      return (
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
          <div className="navbar-brand burger-down">
            <div className='logoitem'>
            <NavLink to="/"   className="navbar-item"><img className="logo" alt="earth" src="./img/image003.png" /></NavLink>
            </div>
            <a href="#/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic"
              onClick={toggleBurgerMenu}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>   
          <div className="navbar-end ">
            <div id="navbarBasic" className=" navbar-end navbar-menu">
              <div className="navbar-start">
                <NavLink to="/" activeclassname="nav-active" className="navbar-item is-size-5" onClick={toggleBurgerMenu}>Home</NavLink>
                <NavLink to="/random" activeclassname="nav-active" className="navbar-item is-size-5" onClick={toggleBurgerMenu}>Random Anime</NavLink>
                <NavLink to="/search" activeclassname="nav-active" className="navbar-item is-size-5" onClick={toggleBurgerMenu}>Search</NavLink>
                {loggedIn===true? <NavLink to="/logout" activeclassname="nav-active" className="navbar-item is-size-5" onClick={toggleBurgerMenu}>Logout</NavLink> : 
                <NavLink to="/login" activeclassname="nav-active" className="navbar-item is-size-5" onClick={toggleBurgerMenu}>Login</NavLink>}
                <NavLink to="/contact" activeclassname="nav-active" className="navbar-item is-size-5" onClick={toggleBurgerMenu}>Contact</NavLink>
              </div>
            </div>
          </div>
        </nav>
      );
    }
 

export default Navigation;
