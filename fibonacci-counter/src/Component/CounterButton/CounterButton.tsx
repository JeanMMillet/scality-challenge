import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./CounterButton.css";
import { useEffect, useRef } from "react";

interface CounterButtonProps {
  setter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  step: number;
  type: "increment" | "decrement";
  max: number;
}

const CounterButton: React.FC<CounterButtonProps> = ({
  setter,
  step,
  type,
  max,
  counter,
}) => {
  const canCallIncrementFunction = useRef(true);
  const intervalBetweenIncrementAndDecrement = 50;

  useEffect(() => {
    function manageArrow(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        // when we arrive here trigger the timer

        // console.log("canCallTheFunction.current", canCallTheFunction.current);

        if (canCallIncrementFunction.current === true) {
          canCallIncrementFunction.current = false;
          setTimeout(() => {
            setter(counter + step);
            canCallIncrementFunction.current = true;
          }, intervalBetweenIncrementAndDecrement);
        }
      }
    }

    window.addEventListener("keydown", manageArrow);

    return () => {
      window.removeEventListener("keydown", manageArrow);
    };
  }, [setter, step, counter]);

  const handleClick = () => {
    if (type === "increment" && counter + step <= max) {
      setter((prevState) => prevState + step);
    } else if (type === "decrement") setter((prevState) => prevState - step);
  };
  return (
    <button
      className={`counter-button ${type}`}
      type="button"
      onClick={handleClick}
      disabled={
        type === "increment" && counter >= max
          ? true
          : type === "decrement" && counter === 0
          ? true
          : false
      }
    >
      {type === "increment" ? <AiOutlineRight /> : <AiOutlineLeft />}
    </button>
  );
};

export default CounterButton;
