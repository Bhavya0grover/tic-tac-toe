// src/components/Board.js
import React, { useState } from 'react';
import Square from './Square';

const initialBoard = Array(9).fill(null);

function Board({ updateScore }) {
  const [board, setBoard] = useState(initialBoard);
  const [isBlueNext, setIsBlueNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isBlueNext ? 'blue' : 'red';
    setBoard(newBoard);
    setIsBlueNext(!isBlueNext);
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setIsBlueNext(true);
  };

  const winner = calculateWinner(board);
  if (winner) {
    updateScore(winner);
  }

  return (
    <div>
      <div className="board">
        {board.map((color, index) => (
          <Square key={index} color={color} onClick={() => handleClick(index)} />
        ))}
      </div>
      {winner && (
        <div className="winner">
          {winner.charAt(0).toUpperCase() + winner.slice(1)} wins!
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default Board;
