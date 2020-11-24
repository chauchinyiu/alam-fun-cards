import React, { useEffect, useState} from 'react';
import ImageCarousel from '../Carousel/ImageCarousel'
import ReactCardFlip from 'react-card-flip'; 
import './FlipCard.css';
function Card(props) {
    const [searchText, setSearchText] = useState(undefined)
    const [isFlipped, setIsFlipped] = useState(false)
    
    useEffect(
        () => {
          console.log('card props ', {props});
          if (props.english) {
              console.log('set search test', props.english)
               setSearchText(props.english)
          }

        return;
        },
        
      [props]);


 
   const handleClick = () => {
        
        setIsFlipped(!isFlipped);

        console.log("flipped ???? ", {isFlipped})
   }
 
 
    return (
        <ReactCardFlip isFlipped={isFlipped}>
        <div className = "card">
   
          <ImageCarousel searchText={searchText}/>  
           <button onClick={() => handleClick()}>Flip Card</button>
        </div>
        <div className="card" >
                <div className="english">{props.english}</div>
                <div className="german">{props.german}</div>
                <div className="chinese">{props.chinese}</div>
                <button onClick={() => handleClick()}>Flip Card</button>
         </div>
      </ReactCardFlip>
    );
    
}

export default Card
