import React from 'react';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import { useState } from 'react';
import Axios from 'axios';
import SearchCard from '../components/SearchCard';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
    const [animeList, SetAnimeList] = useState();
    const [search, SetSearch] = useState("");
    const [gif, SetGif] = useState("");
    const HandleSearch = (e) => {
        e.preventDefault();
        Axios.get(`https://api.jikan.moe/v4/anime?q=${search}&order_by=title&sort=asc&limit=10`, {headers: {
            'Content-Type': 'application/json',
          }}).then((response) =>{
            SetAnimeList(response.data.data);
        });
    };
    useEffect(() => {
        const fetchGif = async () => {   
            try {
                const results = await Axios("//api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "8kR0cTrtvjIXmVwFZmtajrwHT2qMfDDL",
                    limit: 50,
                    q:'anime'
                    
                }
                });
                SetGif(results.data.data[Math.floor(Math.random() * 51)].images.fixed_height.url);
            } catch (err) {
                if (err) {
                    console.log(err);
                }
            } 
        }; 
        fetchGif();
    }, []    
    );
    console.log(gif);
    return (
        <div className="center">
            <Navigation/>
            <h1 className='title is-2 is-capitalized'>Search for an anime!</h1>
            <div className="search">
                <form 
                    className="search-box"
                    onSubmit={HandleSearch}>                    
                    <div class="field has-addons">
                        <div class="control">
                        <input 
                            className="input is-large"
                            type="search" 
                            placeholder="Search for an anime..." 
                            required
                            value={search}
                            onChange={e => SetSearch(e.target.value)}
                        />
                        </div>
                        <div class="control">
                            <a class="button is-info is-large" onClick={HandleSearch}>
                            Search
                            </a>
                        </div>
                    </div>
                </form>
                
                <div className="anime-list">
                    {animeList?     
                    animeList.map((anime) => (
                        <div className="anime-item" key={anime.mal_id}>
                            <SearchCard title={anime.title} desc={anime.synopsis.slice(0, 100) + (anime.synopsis.length > 100 ? "..." : "")} url={anime.images.jpg.image_url}/>
                        </div>
                    ))                
                    : 
                    <div className="uneQuestion has-text-centered ">
                        <h3>Don't know what to watch ?</h3>
                        <img src={gif} alt="gif"/>
                        <br/>
                        <Link to="/random" className="button is-outlined is-large">Click here !</Link>
                    </div>}
                </div>
                
            </div>
            <Footer/>
        </div>
    );
};

export default Search;