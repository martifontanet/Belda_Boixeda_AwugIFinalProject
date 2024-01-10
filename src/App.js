 import logo from './img/BoixeldaLogo.png';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Beers from './Beers';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
            Learn About Beers
            <Beers />
        </header>
      </div>
    </Router>
  );
}

export default App;
