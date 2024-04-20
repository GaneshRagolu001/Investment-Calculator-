import { useState } from "react";
import Header from "./Components/Header";
import Result from "./Components/Result";
import UserInput from "./Components/UserInput";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const checkInputValid = userInput.duration >= 1;

  function handleInputchange(inputIdentifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleInputchange} userInput={userInput} />
      {!checkInputValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {checkInputValid && <Result input={userInput} />}
    </>
  );
}

export default App;
