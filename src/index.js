import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todos from "./Todos";
import TodoDetails from "./TodoDetails";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Todos/>
    <TodoDetails/>
  </React.StrictMode>,
  document.getElementById('root')
);


