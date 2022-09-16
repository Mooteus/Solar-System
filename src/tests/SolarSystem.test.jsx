import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import SolarSystem from '../components/SolarSystem';

describe('Test SolarSystem', () => {
  test('01- Check planets container title', () => {
    render(<SolarSystem />);
    const title = screen.getByText('Planetas');
    expect(title).toBeInTheDocument();
  });
});