import React from 'react';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard';

const CardPrint = ({ beer }) => (
  <Link key={beer.id} to={`/beer/${beer.id}`}>
    <BeerCard id={beer.id} name={beer.name} imageUrl={beer.image_url} line={beer.tagline} abv={beer.abv} />
  </Link>
);

export default CardPrint;