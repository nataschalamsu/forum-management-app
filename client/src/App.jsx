/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Router from './router/Router';
import logo from './logo.svg';
import './App.css';
import AppContext from './App.context';

const App = () => {
  return (
    <AppContext.Provider>
      <header className="App-header">
        <Router />
      </header>
    </AppContext.Provider>
  );
}

export default App;
