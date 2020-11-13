import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './DrawButton.css';

class DrawButton extends Component{
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <Button variant="outline-dark" onClick={this.drawCard}>Draw Card</Button>
                
            </div>
        )
    }
}

export default DrawButton