import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './DrawButton.css';

class DrawButton extends Component{
    constructor(props){
        super(props);
        this.drawCard = this.drawCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
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

    render(props){
        return(
            <div className="buttonContainer">
                <ButtonGroup>
                <Button variant="outline-dark" onClick={this.previousCard}>Previous</Button>
                <Button variant="outline-dark" onClick={this.nextCard}>Next</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default DrawButton