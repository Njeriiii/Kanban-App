import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";


import './App.css';
import Header from "./Components/Header";
import About from './Components/About';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <Header/>
      <About/>
      <TodoList/>
    </div>
  );
}
export default App;