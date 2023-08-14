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
        <div className="min">
          <p>0</p>
        </div>

        <div style={{ width: "calc(100% - 64px" }}>
          <div style={{ paddingLeft: `calc(${(threshold / max) * 100}%)` }}>
            <AiOutlineCaretUp />
          </div>
        </div>

        <div className="max">
          <p>{max}</p>
        </div>
      </div>
    </>
  );
};

export default ProgressionBar;
