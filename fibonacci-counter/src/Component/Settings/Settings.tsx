import "./Settings.css";
import { AiOutlineClose } from "react-icons/ai";

interface SettingsProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMax: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  max: number;
  counter: number;
  show: "show" | "";
}

const Settings: React.FC<SettingsProps> = ({
  max,
  setMax,
  setStep,
  step,
  counter,
  show,
  setToggleSetting,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const value = parseInt(e.target.value);

    if (name === "max" && value >= counter) {
      setMax(value);
    }
    if (name === "step") {
      setStep(value);
    } else e.preventDefault;
  };

  return (
    <div className={`setting-window ${show}`}>
      <div className="setting-container">
        <button onClick={() => setToggleSetting(false)}>
          <AiOutlineClose />
        </button>
        <div className="max">
          <label htmlFor="max">Set the maximum value of your counter</label>
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
          <label htmlFor="step">
            Set the step value of the increment and decrement button
          </label>
          <input
            type="number"
            name="step"
            id=""
            value={step}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
