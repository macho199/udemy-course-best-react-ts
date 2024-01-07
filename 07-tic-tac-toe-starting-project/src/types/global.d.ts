type PlayerSymbol = "X" | "O" | null;

type GameTurn = {
  square: {
    row: number;
    col: number;
  };
  player: PlayerSymbol;
};
