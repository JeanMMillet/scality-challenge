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
  // const arrowRightInterval = useRef(null);
  const intervalBetweenIncrementAndDecrement = 50;

  useEffect(() => {
    function manageArrow(e: KeyboardEvent) {
      if (e.key === "ArrowRight" && counter < max) {
        // when we arrive here trigger the timer

        // console.log("canCallTheFunction.current", canCallTheFunction.current);

        if (canCallIncrementFunction.current === true) {
          canCallIncrementFunction.current = false;
          setTimeout(() => {
            setter(() => {
              if (counter + step > max) {
                return max;
              }
              return counter + step;
            });
            canCallIncrementFunction.current = true;
          }, intervalBetweenIncrementAndDecrement);
        }
      } else if (e.key === "ArrowLeft" && counter > 0) {
        // when we arrive here trigger the timer

        // console.log("canCallTheFunction.current", canCallTheFunction.current);

        if (canCallIncrementFunction.current === true) {
          canCallIncrementFunction.current = false;
          setTimeout(() => {
            setter(() => {
              if (counter - step < 0) {
                return 0;
              }
              return counter - step;
            });
            canCallIncrementFunction.current = true;
          }, intervalBetweenIncrementAndDecrement);
        }
      }
    }

    window.addEventListener("keydown", manageArrow);

    return () => {
      window.removeEventListener("keydown", manageArrow);
    };
  }, [counter, max, setter, step]);

  const handleClick = () => {
    if (type === "increment") {
      setter((prevState) => {
        if (prevState + step > max) {
          return max;
        } else return prevState + step;
      });
    } else if (type === "decrement")
      setter((prevState) => {
        if (prevState - step < 0) {
          return 0;
        } else return prevState - step;
      });
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
