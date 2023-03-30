import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState(' ');
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header />
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
