import React, { useState } from "react";
import { UserInputType } from "../App";

type UserInputProps = {
  onChange: (name: string, value: number) => void
  userInput: UserInputType
}

const UserInput = ({ onChange, userInput }: UserInputProps) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(e) => {onChange('initialInvestment', Number(e.target.value))}} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(e) => {onChange('annualInvestment', Number(e.target.value))}}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(e) => {onChange('expectedReturn', Number(e.target.value))}} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(e) => {onChange('duration', Number(e.target.value))}} />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
