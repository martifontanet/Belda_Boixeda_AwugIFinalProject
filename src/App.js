import Beers from './Beers';
import BeerDetails from './BeerDetails';
import SearchList from './SearchList';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='mainDiv'>
          <Link to='/beers'>
            <h2>Beer List</h2>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/beers" component={Beers} />
        <Route path="/beer/:beer_Id" component = {BeerDetails}/>
        <Route path="/search/beers/:searchTerm" component={SearchList}/>
      </Switch>
    </Router>
  );
}

export default App;
