import React from "react";
import CheckCard from "./CheckCard";
import { Player } from "../types/common";

type BackgroundCardProps = {
  row: number,
  column: number,
  pad: Player[][]
  handleClickCard: (row: number, column: number) => void;
  children?: React.ReactNode;
}

const BackgroundCard = ({ row, column, pad, handleClickCard, ...props }: BackgroundCardProps) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "140px",
        height: "140px",
        background: "yellow",
        margin: "10px",
        cursor: 'pointer'
      }}
      onClick={() => handleClickCard(row, column)}
    >{pad[row][column] && <CheckCard>{pad[row][column]}</CheckCard>}</div>
  );
};

export default BackgroundCard;
