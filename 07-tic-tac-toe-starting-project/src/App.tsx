import React, { useEffect, useState } from "react";
import BackgroundCard from "./components/BackgroundCard";
import { Player, Column } from "./types/common";
import CheckCard from "./components/CheckCard";

type ColumnKey = keyof typeof defaultColumn;

const defaultColumn = { "0": null, "1": null, "2": null };
let leftPlayerName: string = "smith";
let rightPlayerName: string = "max";

const App = () => {
  const [player, setPlayer] = useState<Player>("O");
  const [clicked, setClicked] = useState<string[]>([]);
  const [pad, setPad] = useState<[Column, Column, Column]>([
    { ...defaultColumn },
    { ...defaultColumn },
    { ...defaultColumn },
  ]);
  const [gamming, setGamming] = useState<boolean>(true);

  const handleClickCard = (row: number, column: number) => {
    // 게임이 종료중이면 클릭할 수 없음.
    if (!gamming) {
      alert('게임이 종료되었습니다.\n다시 시작해 주세요.')
      return
    }

    // 이미 클릭했는지 검사해야 함.
    if (pad[row][String(column) as ColumnKey] !== null) return;

    // 클릭안했으면 클릭해주기.
    setPad((prev) => {
      pad[row][String(column) as ColumnKey] = player;
      return prev;
    });

    setClicked((prev) => {
      return [
        `${row}, ${column} ${
          player === "O" ? leftPlayerName : rightPlayerName
        }`,
        ...prev,
      ];
    });

    changePlayer();
  };

  useEffect(() => {
    if (clicked.length === 9) {
      setTimeout(() => {
        alert("무승부!");
        setPlayer("O");
        setClicked([]);
        setPad([
          { ...defaultColumn },
          { ...defaultColumn },
          { ...defaultColumn },
        ]);
      }, 100);
      return;
    }

    const clickPlayer = player === "O" ? "X" : "O";
    const clickPlayerName =
      clickPlayer === "O" ? leftPlayerName : rightPlayerName;

    if (
      (pad[0]["0"] === clickPlayer &&
        pad[0]["1"] === clickPlayer &&
        pad[0]["2"] === clickPlayer) ||
      (pad[1]["0"] === clickPlayer &&
        pad[1]["1"] === clickPlayer &&
        pad[1]["2"] === clickPlayer) ||
      (pad[2]["0"] === clickPlayer &&
        pad[2]["1"] === clickPlayer &&
        pad[2]["2"] === clickPlayer) ||
      (pad[0]["0"] === clickPlayer &&
        pad[1]["0"] === clickPlayer &&
        pad[2]["0"] === clickPlayer) ||
      (pad[0]["1"] === clickPlayer &&
        pad[1]["1"] === clickPlayer &&
        pad[2]["1"] === clickPlayer) ||
      (pad[0]["2"] === clickPlayer &&
        pad[1]["2"] === clickPlayer &&
        pad[2]["2"] === clickPlayer) ||
      (pad[0]["0"] === clickPlayer &&
        pad[1]["1"] === clickPlayer &&
        pad[2]["2"] === clickPlayer) ||
      (pad[0]["2"] === clickPlayer &&
        pad[1]["1"] === clickPlayer &&
        pad[2]["0"] === clickPlayer)
    ) {
      setTimeout(() => {
        alert(`${clickPlayerName}님이 승리하셨습니다.`);
        setGamming(false);
      }, 100);

      return;
    }
  }, [clicked]);

  useEffect(() => {
    if (gamming) {
      setPlayer("O");
      setClicked([]);
      setPad([
        { ...defaultColumn },
        { ...defaultColumn },
        { ...defaultColumn },
      ]);
    }
  }, [gamming]);

  const changePlayer = () => {
    setPlayer((prev) => {
      return prev === "O" ? "X" : "O";
    });
  };

  return (
    <div>
      {!gamming && (
        <div>
          <button
            onClick={() => {
              setGamming(true);
            }}
          >다시하기</button>
        </div>
      )}
      <div>
        <div style={{ display: "inline-block" }}>
          <input type="text" defaultValue={leftPlayerName} />
        </div>
        <div style={{ display: "inline-block" }}>
          <input type="text" defaultValue={rightPlayerName} />
        </div>
      </div>
      <div>
        <div style={{ padding: "10px" }}>
          <BackgroundCard row={0} column={0} handleClickCard={handleClickCard} pad={pad} />
          <BackgroundCard row={0} column={1} handleClickCard={handleClickCard} pad={pad} />
          <BackgroundCard row={0} column={2} handleClickCard={handleClickCard} pad={pad} />
        </div>
        <div style={{ padding: "10px" }}>
          <BackgroundCard row={1} column={0} handleClickCard={handleClickCard} pad={pad} />
          <BackgroundCard row={1} column={1} handleClickCard={handleClickCard} pad={pad} />
          <BackgroundCard row={1} column={2} handleClickCard={handleClickCard} pad={pad} />
        </div>
        <div style={{ padding: "10px" }}>
          <BackgroundCard row={2} column={0} handleClickCard={handleClickCard} pad={pad} />
          <BackgroundCard row={2} column={1} handleClickCard={handleClickCard} pad={pad} />
          <BackgroundCard row={2} column={2} handleClickCard={handleClickCard} pad={pad} />
        </div>
      </div>
      <div>
        <ol style={{ listStyle: "none" }}>
          {clicked &&
            clicked.map((click, i) => {
              return <li key={i}>{click}</li>;
            })}
        </ol>
      </div>
    </div>
  );
};

export default App;
