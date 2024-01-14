import React, { Component } from 'react';

class BeerCard extends Component {

  render() {
    return (
      <div className="detailcard" id={`beer_${this.props.id}`}>
        <div>
          <img src={this.props.imageUrl} alt="charIMG"></img>
        </div>
        <div>
          <h2 className="cardH3">{`${this.props.name}`}</h2><br />
          <p><strong>Brewed Date:</strong> {`${this.props.date}`}</p>
          <p className="cardP"><strong>TagLine:</strong> {`${this.props.line}`}</p> 
          <p><strong>Description:</strong> {`${this.props.descr}`}</p>
          <p><strong>ABV:</strong> {`${this.props.abv}`}%</p>
          <p><strong>Food Pairing:</strong></p>
          <ul>
          {this.props.food.map((beer) => (
            <li>{`${beer}`}</li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BeerCard;