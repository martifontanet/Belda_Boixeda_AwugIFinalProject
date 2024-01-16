import React, { useState, useEffect } from 'react';
import CardPrint from './components/CardPrint';
import { Link, useHistory } from 'react-router-dom';
import Pagination from './components/Pagination';

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
  const [showDropbox, setShowDropbox] = useState(false);

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

  useEffect(() => {
    
    fetchData();
    // eslint-disable-next-line
  }, [num]);

  const handlePageClick = (newNum) => {
    setNum(newNum);
    history.push(`/beers/page=${newNum}`);
  };

  const perPageChange = (event = { target: { value: 25 } }) => {
    var but = document.getElementById('perPage');
    setPerPage(event.target.value);
    // eslint-disable-next-line
    if(event.target.value != 25){
      but.classList.add('orange2');
    } else{
      but.classList.remove('orange2');
    }
    pageOne();
  };

  const filt1Change = (event) => {
    setFilt1(event.target.value);
  };

  const filt2Change = (event) => {
    setFilt2(event.target.value);
  };

  const abvChange = (event = { target: { value: 0 } }) => {
    var but = document.getElementById('abv');
    setAbv(event.target.value);
    if(event.target.value > 0){
      but.classList.add('orange2');
    } else{
      but.classList.remove('orange2');
    }
    pageOne();
  };

  const ibuChange = (event = { target: { value: 0 } }) => {
    var but = document.getElementById('ibu');
    setIbu(event.target.value);
    if(event.target.value > 0){
      but.classList.add('orange2');
    } else{
      but.classList.remove('orange2');
    }
    pageOne();
  };

  const pageOne = () => {
    setNum(1);
    history.push(`/beers/page=1`);
  }

  const filter = () => {
    fetchData();
  }

  const [stateUpdated, setStateUpdated] = useState(false);

  useEffect(() => {
    if (stateUpdated) {
      fetchData();
      setStateUpdated(false); // Reset the flag
    }
    // eslint-disable-next-line
  }, [stateUpdated]);

  const clear = () => {
    ibuChange();
    abvChange();
    perPageChange();
    pageOne();
    setFilt1('abv_gt');
    setFilt2('ibu_gt');
    setStateUpdated(true); // Set the flag to trigger fetchData
  };

  const filterByTextClick = () => {
    setShowDropbox(!showDropbox);
  };

  return (
    <div className="main">
      <div className='beerList'>
        <h3>Beers List</h3>
        <h4 className='filter' onClick={filterByTextClick}>Filter by:<i className={` material-icons ${showDropbox ? 'visible' : 'hidden'}`}>arrow_upward</i><i className={` material-icons ${showDropbox ? 'hidden' : 'visible'}`}>arrow_downward</i></h4>
        <div className={`a dropbox ${showDropbox ? 'visible' : 'hidden'}`}>
          <label>ABV  </label>
          <select value={filter1} className='search searchButton col' onChange={filt1Change}>
            <option value='abv_gt'>Higher than</option>
            <option value='abv_lt'>Lower than</option>
          </select>
          <input id='abv' className='a searchBar col wi' type="number"  min="0" max="55" step="0.5" value={abv} onChange={abvChange} />
          <br />
          <label>IBU  </label>
          <select value={filter2} className='search searchButton col' onChange={filt2Change}>
            <option value='ibu_gt'>Higher than</option>
            <option value='ibu_lt'>Lower than</option>
          </select>
          <input id='ibu' className='a searchBar col wi' type="number"  min="0" max="100" step="1" value={ibu} onChange={ibuChange} />
          <br />
          <label>Beers Per Page  </label>
          <input id='perPage' className='a searchBar col wi' type="number"  min="25" max="80" step="1" value={perPage} onChange={perPageChange} />
          <br />
          <button type="submit" className='search searchButton' onClick={clear}>Clear</button>
          <button type="submit" className='search searchButton orange2' onClick={filter}>Filter</button>
        </div>
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