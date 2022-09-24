import React from 'react';
import {getByTestId, render, screen} from '@testing-library/react';
import PlanetCard from '../components/PlanetCard';

describe('Test PlanetCard', () => {
  test('01- Check if PlanetCard component is rendered', () => {
    render(<PlanetCard />);
    const planetCard = screen.getByTestId('planet-card');
    expect(planetCard).toBeInTheDocument();
  });
});