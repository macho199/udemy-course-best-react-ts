import React from "react";

type GameBoardProps = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: Array<PlayerSymbol>[];
};

const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {
//   let gameBoard = initialGameBoard;

//   for (const turn of turns) {
//     const { square, player } = turn;
//     const { row, col } = square;

//     gameBoard[row][col] = player;
//   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
