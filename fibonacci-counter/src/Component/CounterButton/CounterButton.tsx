import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./CounterButton.css";

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
  const handleClick = () => {
    if (type === "increment") {
      setter((prevState) => prevState + step);
    } else setter((prevState) => prevState - step);
  };
  return (
    <button
      className="counter-button"
      type="button"
      onClick={handleClick}
      disabled={
        type === "increment" && counter === max
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
