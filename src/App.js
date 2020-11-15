import React, { Component } from 'react';
import './App.css';
import CardApp from './CardApp/CardApp';
import QuizApp from './QuizApp/QuizApp';
// import DrawButton from './DrawButton/DrawButton';
// import NavBar from './NavBar/NavBar';
// import TextToSpeechButtons from './TextToSpeech/TextToSpeechButtons'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Route, Switch } from 'react-router-dom';


// class App extends Component {
//   constructor(props){
//     super(props);
//     this.updateCard = this.updateCard.bind(this);
//     this.state = {
//       cards: [],
//       currentCard: {} 
//     }
//   }

//   componentWillMount(){

//     fetch('https://learning-card-api.herokuapp.com/cards')
//     .then(res => res.json())
//     .then((data) => {
//       console.log("update data", data)
//       this.setState({ cards: data, currentCard: this.getRandomCard(data)})
//     })
//     .catch(console.log)
 
//   }

//   getRandomCard(currentCards){
//     var randomIndex = Math.floor(Math.random() * currentCards.length);
//     var card = currentCards[randomIndex];
//     if(card === this.state.currentCard){
//       this.getRandomCard(currentCards)
//     }
//     return(card);
//   }

//   updateCard(){
//     const currentCards = this.state.cards;
//     this.setState({
//       cards: currentCards,
//       currentCard: this.getRandomCard(currentCards)
//     })

//     console.log("updateCard Called")
//   }
  

//   render() {
//     return (
//       <div>
//       <NavBar/>
//       <div className="App">
//         <div className="cardRow">
//           <Card       
//             imageurl={this.state.currentCard.imageurl+"?fit=crop&w=400&h=400"}
//             english={this.state.currentCard.english}
//             german={this.state.currentCard.german}
//             chinese={this.state.currentCard.chinese}
//           />
//         </div>
//         <div className="speakerRow">
//           <TextToSpeechButtons   
//             english={this.state.currentCard.english}
//             german={this.state.currentCard.german}
//             chinese={this.state.currentCard.chinese}/>
//         </div>
//         <div className="buttonRow">
//           <DrawButton drawCard={this.updateCard}/>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

// 
function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={CardApp} exact />
              <Route path="/quiz" component={QuizApp} />
              <Route path="/card" component={CardApp} />
              <Route component={Error} />
          </Switch>
      </main>
  )
}
export default App;