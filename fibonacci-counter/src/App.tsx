import { useState, useEffect } from "react";
import { AiOutlineSetting, AiOutlineUndo } from "react-icons/ai";
import "./App.css";
import CounterButton from "./Component/CounterButton/CounterButton";
import ProgressionBar from "./Component/ProgressionBar/ProgressionBar";
import AlertBox from "./Component/AlertBox/AlertBox";
import { createArraysofFibonacciNumbers } from "./Function/FibonacciNumbers";
import Settings from "./Component/Settings/Settings";

function App() {
  const [counter, setCounter] = useState(0);
  const [max, setMax] = useState(100);
  const [warningThreshold, setWarningThreshold] = useState(80);

  const [step, setStep] = useState(1);
  const [fibonacciNumbers, setFibonacciNumbers] = useState([0, 1]);
  const [toggleSetting, setToggleSetting] = useState(false);

  useEffect(() => {
    setFibonacciNumbers(createArraysofFibonacciNumbers(max));
  }, [max]);

  const handleResetClick = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <h1 className="title">Fibonacci Indicator</h1>
      <div className="sub-title">
        <h2>
          This app indicates if the number is included in the{" "}
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Fibonacci_sequence"
            className="learn-more"
          >
            Fibonacci sequence
          </a>
        </h2>
      </div>
      <div className="counter">
        <CounterButton
          setter={setCounter}
          counter={counter}
          step={step}
          type="decrement"
          max={max}
        />
        <p
          className={`counter-value ${
            fibonacciNumbers.includes(counter) ? "fibonacci-number" : null
          }`}
        >
          {counter}
        </p>
        <CounterButton
          setter={setCounter}
          counter={counter}
          step={step}
          type="increment"
          max={max}
        />
      </div>
      <div className="progression-bar">
        <ProgressionBar
          counter={counter}
          max={max}
          threshold={warningThreshold}
        />
        <AlertBox
          counter={counter}
          max={max}
          step={step}
          threshold={warningThreshold}
        />
      </div>
      <div className="utilities">
        <button
          type="button"
          onClick={handleResetClick}
          className="undo"
          disabled={counter === 0 ? true : false}
        >
          <AiOutlineUndo />
        </button>
        <button
          type="button"
          className="setting"
          onClick={() => setToggleSetting(!toggleSetting)}
        >
          <AiOutlineSetting />
        </button>
      </div>

      <Settings
        max={max}
        setMax={setMax}
        setStep={setStep}
        step={step}
        counter={counter}
        show={toggleSetting ? "show" : ""}
        setToggleSetting={setToggleSetting}
        threshold={warningThreshold}
        setThreshold={setWarningThreshold}
      />
    </div>
  );
}

export default App;
