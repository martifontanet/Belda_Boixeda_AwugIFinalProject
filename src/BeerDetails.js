import React, { useState, useEffect } from 'react';
import DetailCard from './DetailCard';
const BeerDetails = ({ match }) => {
  const [Loading, setLoading] = useState(true);
  const [beerData, setData] = useState({});

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${match.params.beer_Id}`);
        const data = await response.json();
        setData(data);
        setLoading(false); 
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchBeer();
  }, [match.params.beer_Id]);

  return (
    <>

      {Loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <h2>BEER DETAIL PAGE</h2>
        <div className='detailPage'>
        {beerData.map((beer) => (
            <DetailCard 
            id={beer.id} 
            name={beer.name} 
            imageUrl={beer.image_url} 
            line={beer.tagline} 
            date={beer.first_brewed} 
            descr={beer.description}
            abv={beer.abv}
            food={beer.food_pairing}
            />
          ))}
        </div>
        </>
      )}
    </>
  );
};

export default BeerDetails;