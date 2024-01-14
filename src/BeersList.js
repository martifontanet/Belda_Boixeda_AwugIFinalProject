import React, { useState, useEffect } from 'react';
import CardPrint from './CardPrint';
import { Link, useHistory } from 'react-router-dom';
import Pagination from './Pagination';

const BeersList = () => {
  const [error, setError] = useState(null);
  const [beersList, setList] = useState([]);
  const [num, setNum] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [abv, setAbv] = useState(0);
  const [ibu, setIbu] = useState(0);
  const [filter1, setFilt1] = useState('abv_gt');
  const [filter2, setFilt2] = useState('ibu_gt');
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${num}&per_page=${perPage}&${filter1}=${abv}&${filter2}=${ibu}`);
        const data = await response.json();
        setList(data);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
    };

    fetchData();
  }, [num, perPage, abv, ibu, filter1, filter2]);

  const handlePageClick = (newNum) => {
    setNum(newNum);
    history.push(`/beers/page=${newNum}`);
  };

  const perPageChange = (event) => {
    setPerPage(event.target.value);
    pageOne();
  };

  const filt1Change = (event) => {
    setFilt1(event.target.value);
    pageOne();
  };

  const filt2Change = (event) => {
    setFilt2(event.target.value);
    pageOne();
  };

  const abvChange = (event) => {
    setAbv(event.target.value);
    pageOne();
  };

  const ibuChange = (event) => {
    setIbu(event.target.value);
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
        <label>ABV  </label>
        <select value={filter1} className='search searchButton col' onChange={filt1Change}>
          <option value='abv_gt'>Higher than</option>
          <option value='abv_lt'>Lower than</option>
        </select>
        <input className='a searchBar col wi' type="number"  min="0" max="55" step="0.5" value={abv} onChange={abvChange} />
        <br />
        <label>IBU  </label>
        <select value={filter1} className='search searchButton col' onChange={filt2Change}>
          <option value='ibu_gt'>Higher than</option>
          <option value='ibu_lt'>Lower than</option>
        </select>
        <input className='a searchBar col wi' type="number"  min="0" max="100" step="1" value={ibu} onChange={ibuChange} />
        <br />
        <label>Beers Per Page  </label>
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
                <CardPrint key={beer.id} beer={beer} />
              </Link>
            ))
          )}
        </div>
      </div>
      {beersList.length > 0 && <Pagination perpage={perPage} currentPage={num} onPageChange={handlePageClick} />}
    </div>
  );
};

export default BeersList;