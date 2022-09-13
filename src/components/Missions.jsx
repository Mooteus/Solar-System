import React from 'react';
import Missions from '../data/missions';

import Title from './Title';
import MissionCard from './MissionCard';

function Mission() {
  return (
    <div className="missions-container">
      <Title headline="Missões" />
      {Missions.map(({
        name, year, country, destination,
      }) => (
        <MissionCard name={name} year={year} country={country} destination={destination} />
      ))}
    </div>
  );
}

export default Mission;
