import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Header.css';
import '../style/PlanetCard.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-card__childDiv--align" data-testid="planet-card">
        <p className="page__text" data-testid="planet-name">{planetName}</p>
        <img
          className={ planetName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;
