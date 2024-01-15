import React, { useState, useEffect } from 'react';
import CardPrint from './CardPrint';
import { Link, useHistory } from 'react-router-dom';

const Beers = () => {
  const history = useHistory();

  const handleViewAllClick = () => {
    // Hacer scroll hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navegar a la página de todas las cervezas
    history.push('/beers/page=1');
  };
    const [randList, setRandList] = useState([]);
    const [randNum, setRandomNumbers] = useState([]);
    const [abvList, setAbv] = useState([]);
    const [darkList, setDark] = useState([]);

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

          const response3 = await fetch(`https://api.punkapi.com/v2/beers?ebc_gt=399`);
          const data3 = await response3.json();

          const sortedDarkList = data3.sort((a, b) => b.ebc - a.ebc); //Ordenem la llista de el ebc mes gran al mes petit
        
          const top4DarkBeers = sortedDarkList.slice(0, 4); //Ens quedem amb els 4 més grans
          setDark(top4DarkBeers);
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
          <div className='beersDiv'>
            {randList.map((beer) => (
              <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
                <CardPrint key={beer.id} beer={beer} />
              </Link>
            ))}
          </div>
          
          <br />
          <h3>Beers with the highest ABV</h3>
          <div className='beersDiv'>
            {abvList.map((beer) => (
              <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
                <CardPrint key={beer.id} beer={beer} />
              </Link>
            ))}
          </div>
          
          <br />
          <h3>Darkest Beers</h3>
          <div className='beersDiv'>
            {darkList.map((beer) => (
              <Link key={beer.id} className="link" to={`/beer/${beer.id}`}>
                <CardPrint key={beer.id} beer={beer} />
              </Link>
            ))}
          </div>
        </div>
        
        <Link to='/beers/page=1'>
        <button onClick={handleViewAllClick} className='mt a button orange2'>
          View all beers
        </button>
      </Link>
    </div>
  );
};

export default Beers;