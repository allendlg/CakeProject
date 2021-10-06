import React from 'react';
import './App.css';
import Vector from './frame-1@2x.svg';
import 'typeface-roboto';
import Vector2 from './frame@1x.svg'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import About from './About';
import Cakes from './Cakes';


function Home() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/About" exact component={About} />
        
        <Route path="/Cakes" exact component={Cakes} />
        <Route path="/Home" exact component={Home} />
        <Route path="/" exact component={Home} />
        
    
      <div className="Home">
        <img src={Vector2}/>
        <div className="Rectangle2">
          <div className="Rectangle1">
            <div className="eclipse1"></div>
            <button className="text1"> Book Us! </button>
            <div className="eclipse2"></div>
  
            <button className="text2"> About us </button>
            <div className="eclipse3"></div>
         
            <Link to="/cakes"> Cakes </Link>
            <div className="SamText">
            <p> Sam D. & Co.</p>
              <div className="Frame1">
                <img src={Vector}/>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
      </Switch>
    </BrowserRouter>
  );
}

export default Home;
