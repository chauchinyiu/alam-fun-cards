import React, { useEffect} from 'react';
import './Card.css';

function Card(props) {
    
    useEffect(
        () => {
          setupListener();   
          return () => removeListener();
        },
        
      );


  function setupListener() {
    var card = document.querySelector('.card');
    card.addEventListener('click', flip);
  }

  function removeListener() {
    var card = document.querySelector('.card');
    card.removeEventListener("click", flip);
  }
  function flip(event) {
    console.log(event.target);
    var card = document.querySelector('.card');
    card.classList.toggle('flip');
  }
 
    return (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <img className="imageurl" src={props.imageurl}/>
            </div>
            <div className="back">
                <div className="english">{props.english}</div>
                <div className="german">{props.german}</div>
                <div className="chinese">{props.chinese}</div>
            </div>
        </div>
    </div>
    );
    
}

export default Card
