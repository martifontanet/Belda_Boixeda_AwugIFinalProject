import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import { Link, useHistory } from 'react-router-dom';

const Beers = () => {
    const [beersEndpoint, setKey] = useState('https://api.punkapi.com/v2/beers');
    const [beerList, setList] = useState([]);
    const [randNum, setRandomNumbers] = useState([]);
    const history = useHistory();

    useEffect(() => {
      const generateRandomNumbers = () => {
        const newRandomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 324) + 1);
        setRandomNumbers(newRandomNumbers);
      };
  
      generateRandomNumbers();
    }, []); // Ejecutar solo una vez al montar el componente
  
    useEffect(() => {
      if (history.location.pathname === '/' && randNum.length === 4) {
        setKey(`https://api.punkapi.com/v2/beers?ids=${randNum[0]}|${randNum[1]}|${randNum[2]}|${randNum[3]}`);
      } else {
        setKey('https://api.punkapi.com/v2/beers');
      }
    }, [history.location.pathname, randNum]);
  
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
      </div>
    );
  };
  
  export default Beers;