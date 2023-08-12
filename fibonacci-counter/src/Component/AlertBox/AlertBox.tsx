import { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import "./AlertBox.css";

interface AlertBoxProps {
  counter: number;
  max: number;
  step: number;
  visible: boolean;
}

const AlertBox: React.FC<AlertBoxProps> = ({ counter, max, step, visible }) => {
  // const [visible, setVisible] = useState(counter === max - 2);

  return (
    <div className={visible ? "alert-box visible" : "alert-box"}>
      <span>
        <AiOutlineWarning />
      </span>
      <p>
        Warning ! You will reach the maximum value of the counter in 2
        increments
      </p>
    </div>
  );
};

export default AlertBox;
