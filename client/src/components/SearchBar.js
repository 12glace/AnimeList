import React from 'react';
const SearchBar = ( props) => {
  
    return (
        <div>
            <form 
                className="search-box"
                onSubmit={props.HandleSearch}>
                <input 
                    type="search" 
                    placeholder="Search for an anime..." 
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchBar;