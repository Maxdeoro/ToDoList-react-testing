import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/getting started/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<App/> have rendered correctly', () => {
  it ('Component <App/> renders correctly', () => {
    const {getByText} = render(<App/>);
    expect(screen.getByText(/Getting started with React Testing Library/i))
          .toBeInTheDocument();
  });
});
