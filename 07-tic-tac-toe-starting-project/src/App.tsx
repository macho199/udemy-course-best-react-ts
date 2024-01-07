import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATION } from "./winning-combination";
import GameOver from "./components/GameOver";

const initialGameBoard: Array<PlayerSymbol>[] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns: GameTurn[]) => {
  let activePlayer: PlayerSymbol = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }
  return activePlayer;
};

const App = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayer: PlayerSymbol = deriveActivePlayer(gameTurns);
  //const prevPlayer: PlayerSymbol = activePlayer === 'X' ? 'O' : 'X'

  let gameBoard = [...initialGameBoard.map((row) => [...row])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  let winner

  for (const combination of WINNING_COMBINATION) {
    const firstSquareSymbol: PlayerSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol: PlayerSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol: PlayerSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  const hasDraw: boolean = gameTurns.length === 9

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurns) => {
      const currentPlayer: PlayerSymbol = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handleRestart = () => {
    setGameTurns([])
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
};

export default App;
