import { useState, useEffect, ReactNode } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import "./AlertBox.css";

interface AlertBoxProps {
  counter: number;
  max: number;
  step: number;
  children: ReactNode;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  counter,
  max,
  step,
  children,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(counter >= max - 2 * step);
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, [counter, max, step]);

  return (
    <div className={visible ? "alert-box visible" : "alert-box"}>
      <span>
        <AiOutlineWarning />
      </span>
      <p>{children}</p>
    </div>
  );
};

export default AlertBox;
