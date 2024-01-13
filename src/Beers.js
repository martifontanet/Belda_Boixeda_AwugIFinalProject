import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
import { Link, useHistory } from 'react-router-dom';

const Beers = () => {
    const [randList, setRandList] = useState([]);
    const [randNum, setRandomNumbers] = useState([]);
    const [abvList, setAbv] = useState([]);

    useEffect(() => {
      const generateRandomNumbers = () => {
        const newRandomNumbers = [];
    
        while (newRandomNumbers.length < 4) {
          const randomNumber = Math.floor(Math.random() * 324) + 1;
    
          if (!newRandomNumbers.includes(randomNumber)) { //Verifiquem que no surti cap numero igual per assegurar-nos
            newRandomNumbers.push(randomNumber);          // que surtiran 4 cerveses i no menys
          }
        }
        setRandomNumbers(newRandomNumbers);
      };
      generateRandomNumbers();
    }, []);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.punkapi.com/v2/beers?ids=${randNum[0]}|${randNum[1]}|${randNum[2]}|${randNum[3]}`);
          const data = await response.json();
          setRandList(data);

          const response2 = await fetch(`https://api.punkapi.com/v2/beers?abv_gt=18`);
          const data2 = await response2.json();
          setAbv(data2);

        } catch (err) {
          console.error(err);
        }
      };
  
      fetchData();
    }, [randNum]);
  
    return (
      <div className="main">
        <div className='beerList'>
          <h3>Random Beers</h3>
          {randList.map((beer) => (
            <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
              <BeerCard id={beer.id} name={beer.name} imageUrl={beer.image_url} line={beer.tagline} abv={beer.abv} />
            </Link>
          ))}
          <h3>Beers with the highest ABV</h3>
          {abvList.map((beer) => (
            <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
              <BeerCard id={beer.id} name={beer.name} imageUrl={beer.image_url} line={beer.tagline} abv={beer.abv} />
            </Link>
          ))}
        </div>
        <button className='mt button'>View all beers</button>
      </div>
    );
  };
  
  export default Beers;