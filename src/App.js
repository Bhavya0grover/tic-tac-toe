// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [scores, setScores] = useState({ blue: 0, red: 0 });

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('ticTacToeScores'));
    if (storedScores) {
      setScores(storedScores);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
  }, [scores]);

  const updateScore = (winner) => {
    setScores((prevScores) => ({
      ...prevScores,
      [winner]: prevScores[winner] + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <ScoreBoard scores={scores} />
      <Board updateScore={updateScore} />
    </div>
  );
}

export default App;
