import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import RandomAnime from './pages/RandomAnime';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import 'bulma/css/bulma.min.css';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Search from './pages/Search';
import Contact from './pages/Contact';
import Logout from './pages/Logout';
const App = () => {

  
  return (
    <BrowserRouter>
    <Routes>            
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/random" exact element={<RandomAnime/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/admin" exact element={<Admin/>}/>
      <Route path="/search" exact element={<Search/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/logout" exact element={<Logout/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;