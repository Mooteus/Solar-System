import React from 'react';
import {getByTestId, render, screen} from '@testing-library/react';
import PlanetCard from '../components/PlanetCard';

describe('Test PlanetCard', () => {
  test('01- Check if PlanetCard component is rendered', () => {
    render(<PlanetCard />);
    const planetCard = screen.getByTestId('planet-card');
    expect(planetCard).toBeInTheDocument();
  });

  test('02- Check planet name and planet image in the Card', () => {
    render(<PlanetCard planetName='Marte' planetImage='imagem'/>);

    const planetName = screen.getByText('Marte');
    expect(planetName).toBeInTheDocument();

    const planetImage = screen.getByRole('img');
    expect(planetImage).toHaveAttribute('src', 'imagem');
  });
});