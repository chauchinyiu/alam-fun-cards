import React, { Component } from 'react';
import './CardApp.css';
import FlipCard from '../Card/FlipCard';
import TextToSpeechButtons from '../TextToSpeech/TextToSpeechButtons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getRandomCard} from '../Utility/Utils'
import findIndex from 'lodash/findIndex'

class CardApp extends Component {
  constructor(props){
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
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

  componentDidMount(){
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
      this.setState({ cards: data, currentCard: data[0], category: ''})
    })
    .catch(console.log)
  }


  nextCard() {
    var currentIndex = findIndex(this.state.cards, this.state.currentCard);
    var nextIndex = currentIndex + 1
    if (nextIndex > this.state.cards.length - 1) {
       nextIndex = this.state.cards.length - 1
    }
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: currentCards[nextIndex]
    })
  }

  previousCard() {
   
    var currentIndex =  findIndex(this.state.cards, this.state.currentCard);
    var previousIndex = currentIndex - 1
    if (previousIndex < 0) {
      previousIndex = 0
    }
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: currentCards[previousIndex]
    })
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
     
       <div className="CardApp">
          <div className="cardRow"> 
               <FlipCard 
                  nextCard={this.nextCard} 
                  previousCard={this.previousCard}
                  english={this.state.currentCard.english}
                  german={this.state.currentCard.german}
                  chinese={this.state.currentCard.chinese}
                  category={this.state.currentCard.category}
               />
          </div>  
          <div className="speakerRow">
              <TextToSpeechButtons   
                english={this.state.currentCard.english}
                german={this.state.currentCard.german}
                chinese={this.state.currentCard.chinese}/>
            </div>  
        </div>
     
    );
  }
}

export default CardApp;
