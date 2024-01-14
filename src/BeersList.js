import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import { Link, useHistory } from 'react-router-dom';
import Pagination from './Pagination';

const Beers = () => {
  const [error, setError] = useState(null);
  const [beersList, setList] = useState([]);
  const [num, setNum] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [abv, setAbv] = useState(1);
  const [filter1, setFilt1] = useState('abv_gt');
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${num}&per_page=${perPage}&${filter1}=${abv}`);
        const data = await response.json();
        setList(data);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
    };

    fetchData();
  }, [num, perPage, abv, filter1]);

  const handlePageClick = (newNum) => {
    setNum(newNum);
    history.push(`/beers/page=${newNum}`);
  };

  const perPageChange = (event) => {
    setPerPage(event.target.value);
    pageOne();
  };

  const termChange = (event) => {
    setFilt1(event.target.value);
    pageOne();
  };

  const abvChange = (event) => {
    setAbv(event.target.value);
    pageOne();
  };

  const pageOne = () => {
    setNum(1);
    history.push(`/beers/page=1`);
  }

  return (
    <div className="main">
      <div className='beerList'>
        <h3>Beers List</h3>
        <h4>Filter by:</h4>
        <label>Abv</label>
        <select value={filter1} className='search searchButton col' onChange={termChange}>
          <option value='abv_gt'>Higher than</option>
          <option value='abv_lt'>Lower than</option>
        </select>
        <input className='a searchBar col wi' type="number"  min="0" max="55" step="0.5" value={abv} onChange={abvChange} />
        <br />
        <label>Beers Per Page</label>
        <input className='a searchBar col wi' type="number"  min="1" max="80" step="1" value={perPage} onChange={perPageChange} />
        <br />
        <div className='beersDiv'>
          {error ? (
            <p>{error}</p>
          ) : beersList.length === 0 ? (
            <p className='error'>No results found.</p>
          ) : (
            beersList.map((beer) => (
              <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
                <BeerCard id={beer.id} name={beer.name} imageUrl={beer.image_url} line={beer.tagline} abv={beer.abv} />
              </Link>
            ))
          )}
        </div>
      </div>
      {beersList.length > 0 && <Pagination perpage={perPage} currentPage={num} onPageChange={handlePageClick} />}
    </div>
  );
};

export default Beers;