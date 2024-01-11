import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id="search">
      <form>
        <input className='searchBar' type="text"  placeholder={`Search beers`} value={searchTerm} onChange={handleChange} />
        
        <Link to={`/search/beers/${searchTerm}`}>
            <button type="submit" className='search searchButton'>Searchh</button>
        </Link>
      </form>
    </div>
    
  );
};

export default Search;