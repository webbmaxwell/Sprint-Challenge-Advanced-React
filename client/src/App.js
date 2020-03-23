import React from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerList from './Components/PlayerList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Yes, this is hard, and yes, you should have prepared better, but...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          You can do this!
        </a>
      </header>
      <PlayerList />
    </div>
  );
}

export default App;
