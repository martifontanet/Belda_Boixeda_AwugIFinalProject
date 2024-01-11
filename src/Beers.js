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
        <div className='beerList'>
          {beerList.map((beer) => (
            <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
              <BeerCard id={beer.id} name={beer.name} imageUrl={beer.image_url} line={beer.tagline} date={beer.first_brewed} />
            </Link>
          ))}
        </div>
        <p>Footer</p>
      </div>
    );
  };
  
  export default Beers;