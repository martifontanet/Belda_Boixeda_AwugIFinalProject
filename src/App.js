import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Beers from './Beers';
import BeerDetails from './BeerDetails';
import SearchList from './SearchList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='mainDiv'>
            <h2>Beer List</h2>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Beers} />
        <Route path="/beer/:beer_Id" component = {BeerDetails}/>
        <Route path="/search/beers/:searchTerm" component={SearchList}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
