import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <img className="imageurl" src={props.imageurl}/>
            </div>
            <div className="front back">
                <div className="english">{props.english}</div>
                <div className="german">{props.german}</div>
                <div className="chinese">{props.chinese}</div>
            </div>
        </div>
    </div>
)

export default Card
