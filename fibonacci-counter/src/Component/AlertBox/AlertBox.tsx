import { useState, useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import "./AlertBox.css";

interface AlertBoxProps {
  counter: number;
  max: number;
  step: number;
  threshold: number;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  counter,
  max,
  step,
  threshold,
}) => {
  const [visible, setVisible] = useState(false);
  const [warning, setWarning] = useState(
    `${Math.ceil((max - threshold) / step)} increments remaining before maximum`
  );

  useEffect(() => {
    setVisible(counter >= threshold);
    setWarning(
      `${Math.ceil((max - counter) / step)} increments remaining before maximum`
    );
    if (counter === max) {
      setWarning("Maximum reached !");
    }
  }, [counter, max, step, threshold]);

  return (
    <div
      className={
        visible
          ? counter === max
            ? "alert-box visible block"
            : "alert-box visible"
          : "alert-box"
      }
    >
      <span>
        <AiOutlineWarning />
      </span>
      <p>{warning}</p>
    </div>
  );
};

export default AlertBox;
