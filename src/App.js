import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Beers from './Beers';
import BeerDetails from './BeerDetails';
import SearchList from './SearchList';

function App() {
  useEffect(() => {
    // This code will run after the component is mounted
    window.onscroll = function() {
      myFunction();
    };

    var header = document.getElementById("head");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    // Cleanup function to remove the scroll event listener when the component is unmounted
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className='App'>
    <Router>
      <Header />
      <div className='content'>
          <h2>Explore and Learn About the best beers!</h2>
        <Switch>
          <Route exact path="/" component={Beers} />
          <Route path="/beer/:beer_Id" component = {BeerDetails}/>
          <Route path="/search/beers/:searchTerm" component={SearchList}/>
        </Switch>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
