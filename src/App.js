import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { TodoList } from "./TodoList";
import { TodoItem} from "./TodoItem";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List with React Testing Library</h2>
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Route path="/item/:id" component={TodoItem}/>
          <Route exact path="/" component={TodoList} />
        </BrowserRouter>
       </div>
    </div>
  );
}

export default App;
