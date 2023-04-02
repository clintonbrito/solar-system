import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/MissionCard.css';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card__container" data-testid="mission-card">
        <p className="page__text" data-testid="mission-name">{name}</p>
        <p className="page__text" data-testid="mission-year">{year}</p>
        <p className="page__text" data-testid="mission-country">{country}</p>
        <p className="page__text" data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string,
  destination: PropTypes.string,
  name: PropTypes.string,
  year: PropTypes.number,
}.isRequired;
