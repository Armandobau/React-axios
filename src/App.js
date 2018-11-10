import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          
          {/*<Switch>*/}
            <Route exact path="/" component={Todos} />
            <Route exact path="/about" component={About} />
          {/*</Switch>*/}
        </div>
      </Router>
    );
  }
}

export default App;
