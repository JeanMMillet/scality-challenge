import "./ProgressionBar.css";

interface ProgressionBarProps {
  counter: number;
  max: number;
}

const ProgressionBar: React.FC<ProgressionBarProps> = ({ counter, max }) => {
  return (
    <div className="full-bar">
      <div
        className="inside-bar"
        style={{ width: `${(counter / max) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressionBar;
