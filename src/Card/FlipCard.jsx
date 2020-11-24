import React, { useEffect, useState} from 'react';
import ImageCarousel from '../Carousel/ImageCarousel';
import ReactCardFlip from 'react-card-flip'; 
import ControlToolBar from '../ControlToolBar/ControlToolBar';
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


 
   const flipCard = () => {
        
        setIsFlipped(!isFlipped);

        console.log("flipped ???? ", {isFlipped})
   }
   

 
 
    return (
        <ReactCardFlip isFlipped={isFlipped}>
        <div className = "card">
   
          <ImageCarousel searchText={searchText}/>  
          <ControlToolBar 
            flipCard={flipCard}
            nextCard={props.nextCard}
            previousCard={props.previousCard}/>
        </div>
        <div className="card" >
                <div className="english">{props.english}</div>
                <div className="german">{props.german}</div>
                <div className="chinese">{props.chinese}</div>
                <ControlToolBar 
                 flipCard={flipCard}
                 nextCard={props.nextCard}
              previousCard={props.previousCard}/>
         </div>
      </ReactCardFlip>
    );
    
}

export default Card
