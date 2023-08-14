import "./Settings.css";
import { AiOutlineClose } from "react-icons/ai";

interface SettingsProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMax: React.Dispatch<React.SetStateAction<number>>;
  setThreshold: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  max: number;
  counter: number;
  show: "show" | "";
  setToggleSetting: React.Dispatch<React.SetStateAction<boolean>>;
  threshold: number;
}

const Settings: React.FC<SettingsProps> = ({
  max,
  setMax,
  setStep,
  step,
  counter,
  show,
  setToggleSetting,
  setThreshold,
  threshold,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const value = parseInt(e.target.value);

    if (name === "max" && value >= counter) {
      setMax(value);
    }
    if (name === "step") {
      setStep(value);
    }
    if (name === "warning") {
      setThreshold(value);
    } else e.preventDefault;
  };

  return (
    <div className={`setting-window ${show}`}>
      <div className="setting-container">
        <button onClick={() => setToggleSetting(false)}>
          <AiOutlineClose />
        </button>
        <div className="setting-content">
          <div className="threshold">
            <label htmlFor="step">Warning Threshold</label>
            <input
              type="number"
              name="warning"
              value={threshold}
              onChange={handleChange}
            />
          </div>
          <div className="max">
            <label htmlFor="max">Blocking Threshold</label>
            <input
              type="number"
              name="max"
              id=""
              value={max}
              min={counter}
              onChange={handleChange}
            />
          </div>
          <div className="step">
            <label htmlFor="step">Step</label>
            <input
              type="number"
              name="step"
              value={step}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
