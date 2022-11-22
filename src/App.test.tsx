import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {

  test('should render app title', async() => {
    // Arrange
    render(<App />);
    
    // Act
    screen.getByTestId('app-title'); 

    // Assert
    expect(screen.getByTestId('app-title')).toHaveTextContent(/Bill Tracker App/i);

  });

});