import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import Header from '../components/Header';
import App from '../App';

describe('1 - Check Header', () => {
  test('01- Check if the header exists', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('02- Check header title', () => {
    render(<Header />);
    const title = screen.getByTestId('header-title');
    expect(title).toHaveTextContent('Sistema Solar');
  });

  test('03- Check if the header is rendered in the app', () => {
    render(<App />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
