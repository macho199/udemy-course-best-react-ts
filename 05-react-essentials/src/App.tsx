import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

export type UserInputType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

const App = () => {
  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier: string, newValue: number) => {
    setUserInput((prevUserInput) => {
      return {...prevUserInput, [inputIdentifier]: newValue}
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
};

export default App;
