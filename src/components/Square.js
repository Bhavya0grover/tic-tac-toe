// src/components/Square.js
import React from 'react';

function Square({ color, onClick }) {
  return (
    <button className={`square ${color}`} onClick={onClick} />
  );
}

export default Square;
