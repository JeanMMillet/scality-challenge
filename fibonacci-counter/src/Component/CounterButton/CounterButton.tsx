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
  const callTimeout = useRef(true);
  const canCallTheFunction = useRef(true);

  useEffect(() => {
    function manageArrow(e: KeyboardEvent) {
      console.log(e.key, canCallTheFunction.current, callTimeout.current);
      if (e.key === "ArrowRight") {
        // when we arrive here trigger the timer

        console.log("canCallTheFunction.current", canCallTheFunction.current);

        if (callTimeout.current === true) {
          console.log("in if", callTimeout.current);
          callTimeout.current = false;
          console.log("after set", callTimeout.current);
          setTimeout(() => {
            // console.log(
            //   "canCallTheFunction set timeout",
            //   canCallTheFunction.current
            // );

            setter((prevState) => prevState + step);
            canCallTheFunction.current = true;
            callTimeout.current = true;
            console.log("after set 2", callTimeout.current);
          }, 1000);
        }

        canCallTheFunction.current = false;

        // change canCallTheFunction to false
        // after 1sec change it back to true

        // if canCallTheFunction is true
        // call the function
        // if (canCallTheFunction.current === true) {
        //   setter((prevState) => prevState + step);
        // }
        // setter((prevState) => prevState + step);
      }
      //  else if (e.key === "ArrowLeft") {
      //   // when we arrive here
      //   setter((prevState) => prevState - step);
      // }
    }

    window.addEventListener("keydown", manageArrow);

    return () => {
      window.removeEventListener("keydown", manageArrow);
    };
  }, [callTimeout.current]);

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
