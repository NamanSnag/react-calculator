import React, { useState } from "react";

import './style.scss';

const Calculator = () => {
  const [answer, setAnswer] = useState("");
  const [calculation, setCalculation] = useState([]);

  const handleInput = (e) => {
    let value = e.target.value;
    let length = value.length - 1;
    setAnswer(answer + value[length]);
  };

  const handleClick = button => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      clear();
    } else {
      setAnswer(answer + button);
      setCalculation(calculation.concat(button));
    }
  };

  const calculate = () => {
    let evalResult;
    try {
      evalResult = eval(answer);
    } catch (e) {
      evalResult = "Error";
    }
    setAnswer(evalResult);
  };

  const clear = () => {
    setAnswer("");
    setCalculation([]);
  };

  return (
    <div className="calculator">
      <div className="answer"><input type="text" value={answer} onChange={e => handleInput(e)}/></div>
      <div className="buttons">
        <button id="ac" onClick={() => handleClick("C")}>AC</button>
        <button id="percentage" className="symbol" onClick={() => handleClick("%")}>%</button>
        <button id="divider" className="symbol" onClick={() => handleClick("/")}>/</button>
        <button id="seven" onClick={() => handleClick("7")}>7</button>
        <button id="eight" onClick={() => handleClick("8")}>8</button>
        <button id="nine" onClick={() => handleClick("9")}>9</button>
        <button id="plus" className="symbol" onClick={() => handleClick("+")}>+</button>
        <button id="four" onClick={() => handleClick("4")}>4</button>
        <button id="five" onClick={() => handleClick("5")}>5</button>
        <button id="six" onClick={() => handleClick("6")}>6</button>
        <button id="minus" className="symbol" onClick={() => handleClick("-")}>-</button>
        <button id="one" onClick={() => handleClick("1")}>1</button>
        <button id="two" onClick={() => handleClick("2")}>2</button>
        <button id="three" onClick={() => handleClick("3")}>3</button>
        <button id="multipler" className="symbol" onClick={() => handleClick("*")}>x</button>
        <button id="zero" onClick={() => handleClick("0")}>0</button>
        <button id="dot" className="symbol" onClick={() => handleClick(".")}>.</button>
        <button id="equal" className="symbol" onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
};

export default Calculator;