import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import EventHandler from './EventHandler.js';
import ColoredBlock from './ColoredBlock.js';
import Products from './Products.js';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{props.name}</p>
        <Clock />
        <EventHandler />
        <ColoredBlock />
        <Products />
      </header>
    </div>
  );
}

export default App;
