import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { useState } from 'react';
import Axios from 'axios';
import SearchCard from '../components/SearchCard';

const RandomAnime = () => {
    const [anime, SetAnime] = useState();

    useEffect(() => {
        Axios.get(`https://api.jikan.moe/v4/random/anime`, {headers: {
            'Content-Type': 'application/json',
          }}).then((response) =>{
            SetAnime(response.data.data);
        });
    }, []);

    return (
        <div className='center'>
            <Navigation/>   
            <div className="anime-item">
                <h1 className='title is-2 is-capitalized'>Random Anime</h1>
                {anime?
                <SearchCard title={anime.title} desc={anime.synopsis? anime.synopsis.slice(0, 100) + (anime.synopsis.length > 100 ? "..." : ""):"No synopsis"} url={anime.images.jpg.image_url}/>
                : null}
            </div>
            <button className='button is-outlined is-large pink' onClick={() => window.location.reload(false)}>Click to reload!</button>
            <Footer/>
        </div>
    );
};

export default RandomAnime;