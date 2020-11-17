import React, { useEffect, useState} from 'react';
import './Card.css';
import ImageCarousel from '../Carousel/ImageCarousel'
 
function Card(props) {
    const [searchText, setSearchText] = useState(undefined)
    
    
    useEffect(
        () => {
          console.log('card props ', {props});
          if (props.english) {
              console.log('set search test', props.english)
               setSearchText(props.english)
          }
          setupListener();   
          return () => removeListener();
        },
        
      [props,setupListener,removeListener]);

  
  function setupListener() {
    var card = document.querySelector('.card');
    card.addEventListener('dblclick', flip);
  }

  function removeListener() {
    var card = document.querySelector('.card');
    card.removeEventListener("dblclick", flip);
  }
  
  function flip(event) {
    var card = document.querySelector('.card');
    card.classList.toggle('flip');
  }
 
    return (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <ImageCarousel searchText={searchText}/>
            </div>
            <div className="back" >
                <div className="english">{props.english}</div>
                <div className="german">{props.german}</div>
                <div className="chinese">{props.chinese}</div>
            </div>
        </div>
    </div>
    );
    
}

export default Card
