import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./App.css";
import CounterButton from "./Component/CounterButton/CounterButton";
import ProgressionBar from "./Component/ProgressionBar/ProgressionBar";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <h1 className="title">Fibonacci Indicator</h1>
      <div className="sub-title">
        <h2>
          This app indicates if the number is includes in the Fibonacci sequence
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
        <p>Barre de progression</p> <br />
        <p>alert box</p>
        <ProgressionBar counter={counter} max={10} />
      </div>
      <div className="utilities">
        <p>Reset icon</p>
        <p>Settings icon</p>
      </div>
    </div>
  );
}

export default App;
