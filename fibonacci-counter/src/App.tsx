import { useState } from "react";
import {
  AiOutlineRight,
  AiOutlineSetting,
  AiOutlineUndo,
} from "react-icons/ai";
import "./App.css";
import CounterButton from "./Component/CounterButton/CounterButton";
import ProgressionBar from "./Component/ProgressionBar/ProgressionBar";
import AlertBox from "./Component/AlertBox/AlertBox";

function App() {
  const [counter, setCounter] = useState(0);

  const handleResetClick = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <h1 className="title">Fibonacci Indicator</h1>
      <div className="sub-title">
        <h2>
          This app indicates if the number is included in the Fibonacci sequence
        </h2>
        <button type="button" className="learn-more">
          Learn more
          <span>
            <AiOutlineRight />
          </span>
        </button>
      </div>
      <div className="counter">
        <CounterButton
          setter={setCounter}
          counter={counter}
          step={1}
          type="decrement"
          max={10}
        />
        <p className="counter-value">{counter}</p>
        <CounterButton
          setter={setCounter}
          counter={counter}
          step={1}
          type="increment"
          max={10}
        />
      </div>
      <div className="progression-bar">
        <ProgressionBar counter={counter} max={10} />
        <AlertBox
          counter={counter}
          max={10}
          step={1}
          visible={counter === 10 - 2}
        />
      </div>
      <div className="utilities">
        <button
          type="button"
          onClick={handleResetClick}
          style={counter === 0 ? { opacity: "50%" } : undefined}
        >
          <AiOutlineUndo />
        </button>
        <button type="button">
          <AiOutlineSetting />
        </button>
      </div>
    </div>
  );
}

export default App;
