import React, { Component } from 'react';
import './CardApp.css';
import Card from '../Card/Card';
import DrawButton from '../DrawButton/DrawButton';
import NavBar from '../NavBar/NavBar';
import TextToSpeechButtons from '../TextToSpeech/TextToSpeechButtons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getRandomCard} from '../Utility/Utils'


class CardApp extends Component {
  constructor(props){
    super(props);
    this.updateCard = this.updateCard.bind(this);
     this.state = {
      cards: [],
      currentCard: {},
      category: ''
    }
  }
  
  componentDidUpdate(){
    const cat = this.props.match.params.category;
    console.log("componentDidUpdate called : ", cat)
    if (cat && cat !== this.state.category) {
       this.getCardsByCategory(cat)
    }
  }

  componentWillMount(){
    const cat = this.props.match.params.category;
    console.log("componentWillMount called: ", cat)
    if (cat) {
      this.getCardsByCategory(cat)
    }else{
      this.getAllCards()
    }
  }
  
  
  getAllCards(){
    fetch('https://learning-card-api.herokuapp.com/cards')
    .then(res => res.json())
    .then((data) => {
      console.log("update data", data)
      this.setState({ cards: data, currentCard: getRandomCard(data, this.state.currentCard), category: ''})
    })
    .catch(console.log)
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: getRandomCard(currentCards, this.state.currentCard)
    })

    console.log("updateCard Called")
  }
  
  getCardsByCategory(category){
    console.log("getCardsByCategory called with parameter ", category)
    fetch('https://learning-card-api.herokuapp.com/cards?category='+ category)
    .then(res => res.json())
    .then((data) => {
      console.log("getCardsByCategory called ", data)
      this.setState({ cards: data, currentCard: getRandomCard(data, this.state.currentCard), category: category})
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
      <NavBar getCardsByCategory={this.getCardsByCategory}/>
      <div className="CardApp">
        <div className="cardRow">
          <Card          
            english={this.state.currentCard.english}
            german={this.state.currentCard.german}
            chinese={this.state.currentCard.chinese}
          />
        </div>
        <div className="speakerRow">
          <TextToSpeechButtons   
            english={this.state.currentCard.english}
            german={this.state.currentCard.german}
            chinese={this.state.currentCard.chinese}/>
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
      </div>
    );
  }
}

export default CardApp;
