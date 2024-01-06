import React from "react";

type TabButtonProps = {
  children: React.ReactNode;
  onSelect: () => void;
  isSelected: boolean;
}


export default function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
