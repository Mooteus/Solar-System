import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Data from '../data/planets';
import './style.css';

class SolarSystem extends Component {
  render() {
    const planets = Data.map((planet) => {
      const { name, image } = planet;
      return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
    });
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          { planets }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
