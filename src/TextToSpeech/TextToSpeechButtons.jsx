import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './TextToSpeechButtons.css';
import { DEFAULTS } from './appEnums';

 
function TextToSpeechButtons(props) {
    const api = 'dcfef15cf8cf49c8babeedb6bbdccf27';
    const [speech, setSpeech] = useState(DEFAULTS.SPEECH);

    
    function handleClick(text, language) {
        const audioSrc = `http://api.voicerss.org/?key=${api}&hl=${language}&src=${text}&r=-5&v=Chen`
    
        console.log(audioSrc)
        setSpeech(audioSrc)
       
    };
  
    return(
            <div className="buttonContainer">
                <ButtonGroup>
                     <Button variant="outline-dark" onClick= {() => handleClick(props.english, 'en-gb')}>🇬🇧</Button>
                     <Button variant="outline-dark" onClick= {() => handleClick(props.german, 'de-de' )}>🇩🇪</Button>
                     <Button variant="outline-dark" onClick= {() => handleClick(props.chinese, 'zh-hk')}>🇭🇰</Button>
                </ButtonGroup>     
                <audio autoPlay src={speech}></audio> 
            </div>
    );
     
}

export default TextToSpeechButtons