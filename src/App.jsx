import { useContext } from "react";
import "./App.css";
import ProfileMain from "./components/profileMain";
import { ThemeContext } from "./Context/themeContext";

function App() {
  const themeData = useContext(ThemeContext);
  console.log(themeData.theme)
  return (
    <div
      className="App"
      style={{
        background:
          themeData.theme === "Dark" && "oklch(21.1484% .01165 254.087939 / 1)",
      }}
    >
      <ProfileMain />
    </div>
  );
}

export default App;
