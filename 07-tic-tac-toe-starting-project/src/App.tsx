import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATION } from "./winning-combination";
import GameOver from "./components/GameOver";

type PlayersKey = keyof typeof PLAYERS

const PLAYERS: Players = {
  X: 'Player1',
  O: 'Player2'
}

const INITIAL_GAME_BOARD: Array<PlayerSymbol>[] = [
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

const deriveGameBoard = (gameTurns: GameTurn[]) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])]

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return gameBoard
}

const deriveWinner = (gameBoard: Array<PlayerSymbol>[], players: Players) => {
  let winner

  for (const combination of WINNING_COMBINATION) {
    const firstSquareSymbol: PlayerSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol: PlayerSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol: PlayerSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol as PlayersKey]
    }
  }

  return winner
}

const App = () => {
  const [players, setPlayers] = useState<Players>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayer: PlayerSymbol = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
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

  const handlePlayerNameChange = (symbol: PlayerSymbol, newName: string) => {
    setPlayers((prevPlayers => {
      return {
        ...prevPlayers,
        [symbol as PlayersKey]: newName
      }
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
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
