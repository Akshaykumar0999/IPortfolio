import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../Context/themeContext";

const Education = () => {
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
        Education
      </h3>
      <div
        className="experience-card"
        style={{
          margin: "12px 0px",
          borderLeft: theme === "Dark" && "2px solid #8181EF",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: theme === "Dark" ? "#BBBBBB" : "#525252",
          }}
        >
          January 2021 - December 2022
        </p>
        <p style={{ fontWeight: "600", color: theme === "Dark" && "#DDDDDD" }}>
          Fullstack Developer Student
        </p>
        <p
          style={{
            fontSize: "14px",
            color: theme === "Dark" ? "#BBBBBB" : "#525252",
            fontWeight: "500",
          }}
        >
          Nxt Wave Disruptive Technologies.
        </p>
      </div>
      <div
        className="experience-card"
        style={{
          margin: "12px 0px",
          borderLeft: theme === "Dark" && "2px solid #8181EF",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: theme === "Dark" ? "#BBBBBB" : "#525252",
            fontWeight: "500",
          }}
        >
          July 2016 - Agust 2020
        </p>
        <p style={{ fontWeight: "600", color: theme === "Dark" && "#DDDDDD" }}>
          Bsc-(MECS) Computer Science Student.
        </p>
        <p
          style={{
            fontSize: "14px",
            color: theme === "Dark" ? "#BBBBBB" : "#525252",
            fontWeight: "500",
          }}
        >
          Swmamy Vivekananda Degree & Pg Collage.
        </p>
      </div>
    </div>
  );
};

export default Education;
