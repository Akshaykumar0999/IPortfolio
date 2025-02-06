import { useContext } from "react";
import "./index.css";
import { VscSettings } from "react-icons/vsc";
import { ThemeContext } from "../../Context/themeContext";
const Theme = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className="theme">
      <div>
        <h3 className="theme-title">Theme</h3>
        <p className="theme-text">{theme}</p>
      </div>
      <div className="theme-icon-settings">
        <VscSettings
          style={{ border: "1px solid #000", borderRadius: "3px" }}
        />
        <select
          className="theme-select"
          onChange={() => setTheme(theme === "Light" ? "Dark" : "Light")}
        >
          <option value="" selected disabled>
            Change Theme
          </option>
          <option value="Dark" style={{ background: "#000", color: "#ffffff" }}>
            Dark
          </option>
          <option value="Light">Light</option>
        </select>
      </div>
    </div>
  );
};

export default Theme;
