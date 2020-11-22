import React, { Component } from 'react';
import './App.css';
import CardApp from './CardApp/CardApp';
import QuizApp from './QuizApp/QuizApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {  
        return (
            <main>
                <Switch>
                    <Route path="/" component={CardApp} exact/> 
                    <Route path="/quiz/language/:lang" component={QuizApp} />
                    <Route path="/cards/category/:category" component={CardApp}/>  
                    <Route component={Error} />
                </Switch>
            </main>
        );
   }
 
}
export default App;