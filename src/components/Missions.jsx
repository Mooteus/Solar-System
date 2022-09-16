import React from 'react';
import Missions from '../data/missions';

import Title from './Title';
import MissionCard from './MissionCard';

function Mission() {
  return (
    <div className="missions-container">
      <Title headline="Missões" />
      <div className="missions-cards-container">
        {Missions.map(({
          name, year, country, destination,
        }) => (
          <MissionCard
            key={name}
            name={name}
            year={year}
            country={country}
            destination={destination}
          />
        ))}
      </div>
    </div>
  );
}

export default Mission;
