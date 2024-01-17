import React, { Component } from 'react';
import noimg from '../img/noimg.png';

class BeerCard extends Component {

  render() {
    return (
      <div className="card" id={`beer_${this.props.id}`}>
          <img src={this.props.imageUrl || noimg} alt="beer product visual"></img><br />
          <h4 className="cardtext">{`${this.props.name}`}</h4>
          <p className="cardtext">{`${this.props.line}`}</p> 
          <p className="cardtext">{`ABV : ${this.props.abv}%`}</p>
      </div>
    );
  }
}

export default BeerCard;