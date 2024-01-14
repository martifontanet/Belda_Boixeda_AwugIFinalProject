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
          <div className='dropdown'>
            <p><i class="material-icons">help_outline</i> <strong>ABV:</strong> {`${this.props.abv}`}%  </p>
            <div class="dropdown-content">
              <p>Alcohol by volume, is the standard measurement, used worldwide, to assess the strength of a particular beer. <a className='linkcol' href='https://www.webstaurantstore.com/blog/3620/what-is-abv.html' target='_blank'  rel="noreferrer">More Information</a></p>
            </div>
          </div>
          <br />
          <div className='dropdown'>
            <p><i class="material-icons">help_outline</i> <strong>IBU:</strong> {`${this.props.ibu}`}</p>
            <div class="dropdown-content">
              <p>International Bitterness Units, a scale to gauge the level of a beer's bitterness. <a className='linkcol' href='https://www.firestonewalker.com/what-really-is-ibu/' target='_blank'  rel="noreferrer">More Information</a></p>
            </div>
          </div>
          <br />
          <div className='dropdown'>
            <p><i class="material-icons">help_outline</i> <strong>EBC:</strong> {`${this.props.ebc}`}</p>
            <div class="dropdown-content">
              <p>European Brewery Convention and it's used as a measure of colour intensity. The higher the EBC, the darker the beer. <a className='linkcol' href='https://www.saveur-biere.com/en/magazine/brewing/4/white-blonde-ruby-brown-beer-in-every-colour/58' target='_blank'  rel="noreferrer">More Information</a></p>
            </div>
          </div>
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