import React from 'react';
// import { render, screen } from '@testing-library/react';
import { render,screen,waitForElementToBeRemoved } from './custom-render';
import App from './App';
import userEvent from '@testing-library/user-event';
import {todos} from './makeTodos';
import axios from 'axios';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/getting started/i);
//   expect(linkElement).toBeInTheDocument();
// });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual('react-router-dom'),
}));

describe('<App/> have rendered correctly',() => {
  it ('Component <App/> renders correctly', async () => {
    render(<App/>);
    expect(screen.getByText(/Todo List with React Testing Library/i))
          .toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/Fetching todos/i));
  });

  it("Renders todos, and I can click to view a todo item", async () => {
    render (<App/>);
    await waitForElementToBeRemoved(screen.queryByText(/Fetching todos/i));
    todos.slice(0,15).forEach((td) => {
      expect(screen.getByText(td.title)).toBeInTheDocument();
    });
    //click test
    const {id,title,completed,userId} = todos[0];
    axios.get.mockImplementationOnce(() => 
                      Promise.resolve({
                        data: {id,title,userId,completed},
                      }));
    userEvent.click(screen.getByTestId(String(id)));
    await waitForElementToBeRemoved(() => {
      screen.queryByText(`Fetching todo item ${String(id)}`);
    });

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`Added by: ${userId}`)).toBeInTheDocument();
    switch(completed) {
      case true:
        expect(screen.getByText(/This item has been completed/)).toBeInTheDocument();
          break;
      case false:
        expect(screen.getByText(/This item is yet to be completed/)).toBeInTheDocument();
          break;
      default:
        throw new Error('No match');
    }
  });
}); 
