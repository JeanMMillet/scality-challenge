import "./ProgressionBar.css";
import { AiOutlineCaretUp } from "react-icons/ai";

interface ProgressionBarProps {
  counter: number;
  max: number;
  threshold: number;
}

const ProgressionBar: React.FC<ProgressionBarProps> = ({
  counter,
  max,
  threshold,
}) => {
  return (
    <>
      <div className="progression-bar-container">
        <div
          className={
            counter >= threshold && counter < max
              ? "threshold full-bar"
              : counter === max
              ? "block full-bar"
              : "full-bar"
          }
        >
          <div
            className={
              counter >= threshold && counter < max
                ? "threshold inside-bar"
                : counter === max
                ? "block inside-bar"
                : "inside-bar"
            }
            style={{ width: `${(counter / max) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="indicator">
        <p className="min">0</p>
        <span style={{ width: `${(threshold / max) * 100}%` }}></span>

        <AiOutlineCaretUp />

        <span style={{ width: `${100 - (threshold / max) * 100}%` }}></span>

        <p className="max">{max}</p>
      </div>
    </>
  );
};

export default ProgressionBar;
