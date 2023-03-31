import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../style/SolarSystem.css';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solar-system__div--align">
          {
            planets.map((planet, index) => (
              <PlanetCard
                key={ index }
                planetName={ planet.name }
                planetImage={ planet.image }
              />))
          }
        </div>
      </div>
    );
  }
}
