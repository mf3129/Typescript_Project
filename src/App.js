import React from 'react';
import './App.css';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage/TodoWrapperLocalStorage';

export default function App() {
  return (
    <div className="App">
      <TodoWrapperLocalStorage />
    </div>
  );
}
