import "./Settings.css";

interface SettingsProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setMax: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  max: number;
  counter: number;
  show: "show" | undefined;
}

const Settings: React.FC<SettingsProps> = ({
  max,
  setMax,
  setStep,
  step,
  counter,
  show,
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
    <div className={`setting-container ${show}`}>
      <div className="max">
        <label htmlFor="max">Set Max Value</label>
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
        <label htmlFor="step">Set Step Value</label>
        <input
          type="number"
          name="step"
          id=""
          value={step}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Settings;
