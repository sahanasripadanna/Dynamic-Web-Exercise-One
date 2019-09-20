import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from './containers/Home'
import Article from './containers/Article'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
      </Router>
  </div>
  );
}

export default App;
