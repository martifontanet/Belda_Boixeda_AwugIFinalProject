import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard';
import Loading from './Loading';

const SearchResults = ({ match }) => {
  const [beerList, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTerm = match.params.searchTerm;

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`);
        const data = await response.json();
        setList(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchSearch();
  }, [searchTerm]);

  return (
    <div className="ListPage SearchPage">
      <h3>Search PAGE</h3>
      <h2>Search term: {searchTerm}</h2>
      <div>
        <div className="beerList">
          {loading ? (
            <Loading />
          ) : beerList.length > 0 ? (
            <div className='beersDiv'>
              {beerList.map((beer) => (
                <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
                  <BeerCard id={beer.id} name={beer.name} imageUrl={beer.image_url} line={beer.tagline} abv={beer.abv} />
                </Link>
              ))}
            </div>
          ) : (
            <p className='error'>No se obtuvieron resultados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;