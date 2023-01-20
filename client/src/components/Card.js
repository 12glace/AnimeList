
import React from 'react';
const Card = (props) => {
    return (
    <div className="column">
            <div className="card">
                <div className="card-image">
                    <div className="icons">   
                        <br/>
                        {props.icon}
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.title}</p>
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

export default Card;