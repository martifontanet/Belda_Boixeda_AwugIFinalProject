import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard';
const SearchResults = ({match}) => {
  const [beerList, setList] = useState([]);
  const searchTerm = match.params.searchTerm;
  const term = match.params.term;
  
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`);
        const data = await response.json();
        setList(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchSearch();
  }, [searchTerm]);

  return (
    <div className="ListPage SearchPage">
        <h3>Search PAGE</h3>
      <h2>Search term: {searchTerm}</h2>
      <div>
        <div className="charList">
        
        {beerList.map((beer) => (
            <Link key={beer.id} className="link" to={`/beers/${beer.id}`}>
              <BeerCard id={beer.id} name={beer.name} imageUrl={beer.image_url} line={beer.tagline} abv={beer.abv} />
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default SearchResults;