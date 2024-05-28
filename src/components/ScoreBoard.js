// src/components/ScoreBoard.js
import React from 'react';

function ScoreBoard({ scores }) {
  return (
    <div className="score-board">
      <div className="score blue">Blue: {scores.blue}</div>
      <div className="score red">Red: {scores.red}</div>
    </div>
  );
}

export default ScoreBoard;
