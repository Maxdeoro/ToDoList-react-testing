import React from 'react';
// import { render, screen } from '@testing-library/react';
import { render,screen,waitForElementToBeRemoved } from './custom-render';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/getting started/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('<App/> have rendered correctly',() => {
  it ('Component <App/> renders correctly', async () => {
    render(<App/>);
    expect(screen.getByText(/Todo List with React Testing Library/i))
          .toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/Fetching todos/i));
  });
}); 
