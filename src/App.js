import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCard from './components/FlashCard'

function App() {
  return (
    <div className="App">
      <FlashCard question = 'What?' answer = 'Because!'/>
    </div>
  );
}

export default App;
