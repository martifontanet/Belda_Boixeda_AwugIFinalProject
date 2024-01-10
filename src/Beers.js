import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import { Link } from 'react-router-dom';

const Beers = () => {
    const [beersEndpoint, setKey] = useState('https://api.punkapi.com/v2/beers');
    const [beerList, setList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(beersEndpoint);
          const data = await response.json();
  
          setList(data);
  
        } catch (err) {
          console.error(err);
        }
  
      };
  
      fetchData();
    }, [beersEndpoint]);
  
    return (
      <div className="main">
        <h2>Beer List</h2>
        <div className='beerList'>
          {beerList.map((character) => (
            <Link key={character.id} className="link" to={`/character/${character.id}`}>
              <BeerCard id={character.id} name={character.name} imageUrl={character.image_url} line={character.tagline} date={character.first_brewed} />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Beers;