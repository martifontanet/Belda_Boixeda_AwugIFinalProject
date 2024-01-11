import React, { Component } from 'react';

class BeerCard extends Component {

  render() {
    return (
      <div className="detailcard" id={`beer_${this.props.id}`}>
          <img src={this.props.imageUrl} alt="charIMG"></img>
          <h3 className="cardH3">Nombre: {`${this.props.name}`}</h3>
          <p>Fecha: {`${this.props.date}`}</p>
          <p className="cardP">TagLine: {`${this.props.line}`}</p> 
          <p>Description: {`${this.props.descr}`}</p>
          <p>ABV: {`${this.props.abv}`}%</p>
          <p>Food Pairing</p>
          <ul>
          {this.props.food.map((beer) => (
            <li>{`${beer}`}</li>
          ))}
          </ul>
      </div>
    );
  }
}

export default BeerCard;