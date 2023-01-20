import React from 'react';

const SearchCard = (props) => {
    return (
        <div className="column">
                <div className="card mix-card">
                    <div className="card-image">
                        <div className="media-content">
                            <p className="title is-4">{props.title}</p>
                        </div>
                        <div className="icons">   
                        <img src={props.url} alt={props.title} /> 
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="subtitle is-6">{props.desc}</p>
                            </div>
                        </div>
                        <div className="content">
                        {props.content}
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default SearchCard;