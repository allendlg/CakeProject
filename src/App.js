import React from 'react';
import './App.css';
import Vector from './frame-1@2x.svg';
import 'typeface-roboto';
import Vector2 from './frame@1x.svg'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import About from './About'
import Cakes from './Cakes'
import Home from './Home'

function App() {
  return (

      <div className="App">
        
        <BrowserRouter>
        <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/Cakes" exact component={Cakes} />
            <Route path="/Home" exact component={Home} />
            <Route path="/" exact component={Home} />
            
          </Switch>
        </BrowserRouter>
      </div>
  
  );
}

export default App;
