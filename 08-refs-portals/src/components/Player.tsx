import React, { useRef, useState } from "react";

type Name = {
  name: string
  inputName: string
}

const Player = () => {
  const playerName = useRef<HTMLInputElement>(null);
  const [enteredPlayerName, setEnteredPlayerName] = useState<string>('');

  const handleClick = () => {
    if (!playerName.current) return
    setEnteredPlayerName(playerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName} entity</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
