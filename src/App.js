import React, { Component } from 'react';
import './App.css';
import CardApp from './CardApp/CardApp';
import QuizApp from './QuizApp/QuizApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    
  }
 
  componentWillMount() {

  }

  render() {  
        return (
            <main>
                <Switch>
                    <Route path="/" component={CardApp} exact/>
                    <Route path="/quiz" component={QuizApp} />
                    <Route path="/cards/category/:category" component={CardApp}/>
                    <Route component={Error} />
                </Switch>
            </main>
        );
   }
 
}
export default App;