import React, { Component } from 'react';

class BeerCard extends Component {

  render() {
    return (
      <div className="card" id={`beer_${this.props.id}`}>
        <div>
          <img src={this.props.imageUrl} alt="charIMG"></img>
        </div>
        <div>
          <h3 className="cardH3">{`${this.props.name}`}</h3>
          <p className="cardP">{`${this.props.line}`}</p> 
          {/* <h4 className="vgCardName">{`Status : ${this.props.status}`}</h4>*/}
        </div>
      </div>
    );
  }
}

export default BeerCard;