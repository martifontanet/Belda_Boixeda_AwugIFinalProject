import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [term, setTerm] = useState('beer name');

  const searchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const termChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div id="searchDiv">
      <form className=''>
        <input className='a searchBar' type="text"  placeholder={`Search beers by ${term}`} value={searchTerm} onChange={searchTermChange} />
        <select value={term} className='search searchButton' onChange={termChange}>
          <option value='beer name'>Beer name</option>
          <option value='food pair'>Food</option>
        </select>
        <Link to={`/search/beers/${searchTerm}`}>
            <button type="submit" className='search searchButton'>Search</button>
        </Link>
        
      </form>
    </div>
    
  );
};

export default Search;