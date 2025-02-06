import { useContext } from "react";
import "./index.css";
import { VscSettings } from "react-icons/vsc";
import { ThemeContext } from "../../Context/themeContext";
const Theme = () => {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div
      className="theme"
      style={{
        background:
          theme === "Dark" && "oklch(25.3267% .015896 252.417568 / 1)",
        color: theme === "Dark" && "#BBBBBB",
        boxShadow:
          theme === "Dark" &&
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
      }}
    >
      <div>
        <h3
          className="theme-title"
          style={{
            color: theme === "Dark" && "#BBBBBB",
          }}
        >
          Theme
        </h3>
        <p
          className="theme-text"
          style={{
            color: theme === "Dark" && "#BBBBBB",
          }}
        >
          {theme}
        </p>
      </div>
      <div className="theme-icon-settings">
        <VscSettings
          style={{
            border: theme === "Dark" ? "1px solid #fff" : "1px solid #000",
            borderRadius: "3px",
            color: theme === "Dark" ? "#ffffff" : "#525252",
          }}
        />
        <select
          style={{
            background:
              theme === "Dark"
                ? "oklch(25.3267% .015896 252.417568 / 1)"
                : "#ffffff",
            color: theme === "Dark" && "#BBBBBB",
          }}
          className="theme-select"
          onChange={() => setTheme(theme === "Light" ? "Dark" : "Light")}
        >
          <option value="" selected disabled>
            Change Theme
          </option>
          <option value="Dark">Dark</option>
          <option value="Light">Light</option>
        </select>
      </div>
    </div>
  );
};

export default Theme;
