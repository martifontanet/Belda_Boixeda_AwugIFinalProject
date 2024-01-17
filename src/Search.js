import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [term, setTerm] = useState('beer_name');

  const searchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const termChange = (event) => {
    setTerm(event.target.value);
  };

  const isSearchDisabled = !searchTerm.trim();

  return (
    <div id="searchDiv">
      <form className=''>
        <input className='a searchB' type="text"  placeholder={`Search beers by ${term}`} value={searchTerm} onChange={searchTermChange} />
        <select value={term} className='search searchBu' onChange={termChange}>
          <option value='beer_name'>Beer name</option>
          <option value='food'>Food pair</option>
        </select>
        <Link to={`/search/beers/${term}/${searchTerm}`}>
        <button type="submit" className={`search searchBu orange2 ${isSearchDisabled ? 'disabled' : ''}`} disabled={isSearchDisabled} >Search</button>
        </Link>
        
      </form>
    </div>
    
  );
};

export default Search;