import React, { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import Data from '../data/missions';

class Missions extends Component {
  render() {
    const missionData = Data.map((mission) => {
      const { name, year, country, destination } = mission;
      return (
        <MissionCard
          key={ name }
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      );
    });
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionData}
      </div>
    );
  }
}

export default Missions;
