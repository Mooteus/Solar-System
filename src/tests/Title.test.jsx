import React from 'react';
import {render, screen} from '@testing-library/react';
import Title from '../components/Title';

describe('Test Title', () => {
  test('01- Verify if props are working', () => {
    render(<Title headline="sol"/>);
    const title = screen.getByText('sol');
    expect(title).toBeInTheDocument();
  });
});