import React from "react";
import TabButton from "./TabButton";

type TabsProps = {
  buttons: React.ReactNode;
  children: React.ReactNode;
};

const Tabs = ({ buttons, children }: TabsProps) => {
  return (
    <>
      <menu>
        {buttons}
      </menu>
      {children}
    </>
  );
};

export default Tabs;
