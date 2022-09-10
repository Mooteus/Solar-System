import React from 'react';
import Planets from '../data/planets';

import Title from './Title';
import PlanetCard from './PlanetCard';
import Missions from './Missions';

function SolarSystem() {
  return (
    <div className="solar-system">
      <Title headline="Planetas" />
      <div className="planets-container">
        {Planets.map(({ name, image }) => (
          <PlanetCard planetName={name} planetImage={image} />
        ))}
      </div>
      <Missions />
    </div>
  );
}

export default SolarSystem;
