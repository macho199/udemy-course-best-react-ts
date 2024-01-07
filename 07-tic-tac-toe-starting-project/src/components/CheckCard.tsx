import React from "react";

type CheckCardProps = {
  children: React.ReactNode;
};

const CheckCard = ({ children }: CheckCardProps) => {
  return (
    <div
      style={{
        position: "absolute",
        fontSize: "70px",
        fontWeight: "bold",
        padding: "20px 30px"
      }}
    >
      {children}
    </div>
  );
};

export default CheckCard;
