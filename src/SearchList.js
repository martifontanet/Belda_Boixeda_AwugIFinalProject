import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardPrint from './CardPrint';
import Loading from './Loading';

const SearchResults = ({ match }) => {
  const [beerList, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTerm = match.params.searchTerm;
  const searchTerm2 = match.params.term;

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?${searchTerm2}=${searchTerm}`);
        const data = await response.json();
        setList(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchSearch();
  }, [searchTerm,searchTerm2]);

  return (
    <div className="ListPage SearchPage">
      <h3>Search PAGE</h3>
      <h4>Search term: <span className='orange'>"{searchTerm}"</span></h4>
      <div>
        <div className="beerList">
          {loading ? (
            <Loading />
          ) : beerList.length > 0 ? (
            <div className='beersDiv'>
              {beerList.map((beer) => (
                <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
                  <CardPrint key={beer.id} beer={beer} />
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