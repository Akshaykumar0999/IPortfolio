import { useContext } from 'react';
import './index.css'
import { ThemeContext } from '../../Context/themeContext';

const techStackSkills = [
    'HTML', 'CSS', 'Javascript', 'React.js', 'Redux', 'React-hooks', 'React Native', 'Python', 'SQLite', 'MySQL', 'Node.js', 'Express.js', 'Git', 'Vscode'
]
const TechStack = () => {
  const {theme} = useContext(ThemeContext);
    return (
      <div
        className="techstack"
        style={{
          background:
            theme === "Dark" && "oklch(25.3267% .015896 252.417568 / 1)",
          color: theme === "Dark" && "#BBBBBB",
          boxShadow:
            theme === "Dark" &&
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <h3
          className="theme-title"
          style={{
            marginBottom: "12px",
            textAlign: "left",
            alignSelf: "flex-start",
            color: theme === "Dark" && "#BBBBBB",
          }}
        >
          Tech Stack
        </h3>
        <ul className="techstack-ul-list">
          {techStackSkills.map((skill, i) => (
            <li
              key={i}
              style={{
                padding: "3px 12px",
                borderRadius: "17px",
                margin: "5px",
                fontWeight: "600",
                fontSize: "12px",
                color: theme === "Dark" ? "#DDDDDD" : "#000",
                backgroundColor: theme === "Dark" ? "#5151CB" : "#ffdd2e",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TechStack