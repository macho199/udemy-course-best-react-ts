import React from "react";

type GameOverProps = {
  winner?: string;
  onRestart: () => void;
};

const GameOver = ({ winner, onRestart }: GameOverProps) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
