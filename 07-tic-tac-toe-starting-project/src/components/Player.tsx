import React, { useEffect, useState } from "react";

type PlayerProps = {
  initialName: string;
  symbol: PlayerSymbol;
  isActive: boolean;
  onChangeName: (symbol: PlayerSymbol, name: string) => void;
};

const Player = ({
  initialName,
  symbol,
  isActive,
  onChangeName,
}: PlayerProps) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  let editablePalyerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePalyerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{editablePalyerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
