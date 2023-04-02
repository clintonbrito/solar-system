import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../style/Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <div className="missions-div__parentContainer" data-testid="missions">
        <Title headline="Missões" />
        <div className="missions-div__container">
          {
            missions.map((mission, index) => (
              <MissionCard
                key={ index }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />))
          }
        </div>
      </div>
    );
  }
}
