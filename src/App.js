import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import BeerDetails from './BeerDetails';
import SearchList from './SearchList';
import BeersList from './BeersList';
import Header from './components/Header';
import Footer from './components/Footer';
import Beers from './Beers';

function App() {

  useEffect(() => {
    window.onscroll = function() {
      myFunction();
    };

    var header = document.getElementById("head");
    var top = document.getElementById("top");
    var sticky = header.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        top.classList.add("low");
      } else {
        header.classList.remove("sticky");
        top.classList.remove("low");
      }
    }

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <Router>
    <div className='App'>
      <Header />
      <div id='top' className='topDiv'>
        <h2>Explore and Learn About the best beers!</h2>
      </div>
      <div className='content'>
        <Switch>
          <Route exact path="/" component={Beers} />
          <Route path="/beer/:beer_Id" component = {BeerDetails}/>
          <Route path="/beers/page=:num" component = {BeersList}/>
          <Route path="/search/beers/:term/:searchTerm" component={SearchList}/>
        </Switch>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
