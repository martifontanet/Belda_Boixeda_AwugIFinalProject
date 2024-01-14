import React, { Component } from 'react';
import noimg from './img/noimg.png';

class BeerCard extends Component {

  render() {
    return (
      <div className="card" id={`beer_${this.props.id}`}>
          <img src={this.props.imageUrl || noimg} alt="charIMG"></img><br />
          <h4 className="cardtext cardH3">{`${this.props.name}`}</h4>
          <p className="cardtext cardP">{`${this.props.line}`}</p> 
          <p className="cardtext cardP">{`ABV : ${this.props.abv}%`}</p>
      </div>
    );
  }
}

export default BeerCard;