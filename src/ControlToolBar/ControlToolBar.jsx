import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ForwardIcon from '@material-ui/icons/Forward'; 
import FlipIcon from '@material-ui/icons/Flip';
import './ControlToolBar.css';

class ControlToolBar extends Component{
    constructor(props){
        super(props);
        this.drawCard = this.drawCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
        this.flipCard = this.flipCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }

    nextCard(){
        this.props.nextCard();
    }

    previousCard(){
        this.props.previousCard();
    }

    flipCard(){
        this.props.flipCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <ButtonGroup>
                <Button variant="dark" onClick={this.previousCard}><ForwardIcon id="flippedIcon"/></Button>
                <Button variant="dark" onClick={this.nextCard}><ForwardIcon/></Button>
                <Button variant="dark" onClick={this.flipCard}><FlipIcon/></Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default ControlToolBar