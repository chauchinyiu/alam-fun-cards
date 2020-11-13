import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import NavBar from './NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props){
    super(props);
    this.updateCard = this.updateCard.bind(this);
    this.state = {
      cards: [],
      currentCard: {} 
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;
    fetch('https://learning-card-api.herokuapp.com/cards')
    .then(res => res.json())
    .then((data) => {
      console.log("update data", data)
      this.setState({ cards: data, currentCard: this.getRandomCard(data)})
    })
    .catch(console.log)
 
  }

  getRandomCard(currentCards){
    var randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(currentCards)
    }
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div>
      <NavBar/>
      <div className="App">
        <div className="cardRow">
          <Card 
            imageurl={this.state.currentCard.imageurl+"?w=700&h=400"}
            english={this.state.currentCard.english}
            german={this.state.currentCard.german}
            chinese={this.state.currentCard.chinese}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
