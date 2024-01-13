import React, { Component } from 'react';

class BeerCard extends Component {

  render() {
    return (
      <div className="card" id={`beer_${this.props.id}`}>
          <img src={this.props.imageUrl} alt="charIMG"></img>
          <h3 className="cardtext cardH3">{`${this.props.name}`}</h3>
          <p className="cardtext cardP">{`${this.props.line}`}</p> 
          <p className="cardtext cardP">{`ABV : ${this.props.abv}%`}</p>
      </div>
    );
  }
}

export default BeerCard;