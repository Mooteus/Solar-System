import React from 'react';
import {render, screen} from '@testing-library/react';
import Title from '../components/Title';
import SolarSystem from '../components/SolarSystem';
import Missions from '../components/SolarSystem';

describe('Test Title', () => {
  test('01- Verify if props are working', () => {
    render(<Title headline="sol"/>);
    const title = screen.getByText('sol');
    expect(title).toBeInTheDocument();
  });

  test('02- Verify if title is rendered in the solar system', () => {
    render(<SolarSystem />);
    const title = screen.getByText('Planetas');
    expect(title).toBeInTheDocument();
  });

  test('03- Verify if title is rendered in Missions component', () => {
    render(<Missions />);
    const title = screen.getByText('Missões');
    expect(title).toBeInTheDocument();
  });
});