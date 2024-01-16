import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import DetailCard from './components/DetailCard';

const BeerDetails = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [beerData, setData] = useState({});
  const [beerLink, setLink] = useState(`https://api.punkapi.com/v2/beers/${match.params.beer_Id}`);

  const fetchBeer = async () => {
    try {
      const response = await fetch(beerLink);
      const data = await response.json();
      setData(data);
      setLoading(false); 
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeer();
    // eslint-disable-next-line
  }, [match.params.beer_Id]);

  const [stateUpdated, setStateUpdated] = useState(false);

  useEffect(() => {
    if (stateUpdated) {
      fetchBeer();
      setStateUpdated(false); 
    }
    // eslint-disable-next-line
  }, [stateUpdated]);

  const randomBeer =  () => {
    setLink('https://api.punkapi.com/v2/beers/random');
    setStateUpdated(true); 
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='detailPage'>
            {beerData.map((beer) => (
              <DetailCard 
                key={beer.id}
                id={beer.id} 
                name={beer.name} 
                imageUrl={beer.image_url} 
                line={beer.tagline} 
                date={beer.first_brewed} 
                descr={beer.description}
                abv={beer.abv}
                ibu={beer.ibu}
                ebc={beer.ebc}
                food={beer.food_pairing}
              />
            ))}
          </div>
          <div>
            <button onClick={randomBeer} className='mt a button orange2'>
              Random Beer
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default BeerDetails;