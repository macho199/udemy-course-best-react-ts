type PlayerSymbol = "X" | "O" | null;

type Players = {
  X: string;
  O: string;
};

type GameTurn = {
  square: {
    row: number;
    col: number;
  };
  player: PlayerSymbol;
};
