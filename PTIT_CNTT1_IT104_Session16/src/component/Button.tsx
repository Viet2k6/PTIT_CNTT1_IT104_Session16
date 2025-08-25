import "../style/button.css";
const buttons = [
  {label: "Primary", type: "primary"},
  {label: "Secondary", type: "secondary"},
  {label: "Success", type: "success"},
  {label: "Warning", type: "warning"},
  {label: "Danger", type: "danger"},
  {label: "Info", type: "info"},
  {label: "Light", type: "light"},
  {label: "Dark", type: "dark"},
];

const Button = () => {
  return (
    <div>
      <div>
        {buttons.map((btn, index) => (
          <button key={index} className={`button ${btn.type}`}>
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
