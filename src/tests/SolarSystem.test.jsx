import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import SolarSystem from '../components/SolarSystem';
import Planets from '../data/planets';

describe('Test SolarSystem', () => {
  test('01- Check planets container title', () => {
    render(<SolarSystem />);
    const title = screen.getByText('Planetas');
    expect(title).toBeInTheDocument();
  });

  test('02- Check missions container title', () => {
    render(<SolarSystem />)
    const title = screen.getByText('Missões');
    expect(title).toBeInTheDocument();
  });

  test('03- Check if all planets are rendered', () => {
    render(<SolarSystem />);
    const planets = screen.getAllByTestId('planet-card');
    planets.forEach((planet, index) => {
      expect(planet).toHaveTextContent(Planets[index].name);
    });
  });
});