import React from "react";
import { Column } from "../types/common";
import CheckCard from "./CheckCard";

type BackgroundCardProps = {
  row: number,
  column: number,
  pad: [Column, Column, Column]
  handleClickCard: (row: number, column: number) => void;
  children?: React.ReactNode;
}

type ColumnKey = keyof typeof defaultColumn;

const defaultColumn = { "0": null, "1": null, "2": null };

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
    >{pad[row][String(column) as ColumnKey] && <CheckCard>{pad[row][String(column) as ColumnKey]}</CheckCard>}</div>
  );
};

export default BackgroundCard;
