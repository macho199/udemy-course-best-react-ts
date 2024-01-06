import React from "react";

type TabButtonProps = {
  children: React.ReactNode;
  isSelected: boolean;
  onClick?: () => void;
}

export default function TabButton({ children, isSelected, ...props }: TabButtonProps) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
