import { useContext } from "react";
import "./index.css";
import { ThemeContext } from "../../Context/themeContext";

const cretifiactesList = [
  {
    id: 1,
    name: "Build Your Own Static Website",
    refer:
      "https://certificates.ccbp.in/intensive/static-website?id=ITMGRATNKB",
    course: "HTML, CSS, Bootstrap",
  },
  {
    id: 2,
    name: "Build Your Own Responsive Website",
    refer:
      "https://certificates.ccbp.in/intensive/responsive-website?id=ANCHAQRRNT",
    course: "Bootstrap, Css Flex-Boxes, Css Mediaqueries",
  },
  {
    id: 3,
    name: "Programming Foundations with Python",
    refer:
      "https://certificates.ccbp.in/intensive/programming-foundations?id=NQBLXNBKUX",
    course: "Python",
  },
  {
    id: 4,
    name: "Build Your Own Dynamic Web Application",
    refer:
      "https://certificates.ccbp.in/intensive/dynamic-web-application?id=IEZPMMERXZ",
    course: "Javascript",
  },
  {
    id: 5,
    name: "Introduction to Databases",
    refer:
      "https://certificates.ccbp.in/intensive/introduction-to-databases?id=RKAQCBSYRU",
    course: "SQLite, MySQL",
  },
  {
    id: 6,
    name: "JavaScript Essentials",
    refer:
      "https://certificates.ccbp.in/intensive/javascript-essentials?id=WHNERVAVNW",
    course: "Javascript",
  },

  {
    id: 7,
    name: "Responsive Web Design using Flexbox",
    refer: "https://certificates.ccbp.in/intensive/flexbox?id=IGKSRZXSQG",
    course: "Css Flex-Boxes",
  },

  {
    id: 8,
    name: "Developer Foundations",
    refer:
      "https://certificates.ccbp.in/intensive/developer-foundations?id=KUPRZWEWMZ",
    course: "Git, Command Line",
  },

  {
    id: 9,
    name: "Node.js",
    refer: "https://certificates.ccbp.in/intensive/node-js?id=BFJRSJUFHV",
    course: "Node.js, Express.js",
  },

  {
    id: 10,
    name: "React JS",
    refer: "https://certificates.ccbp.in/intensive/react-js?id=BKDFYLJXDG",
    course: "React JS, Redux",
  },
];
const Certificates = () => {
  const {theme} = useContext(ThemeContext)
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
        Certificates
      </h3>
      <ul className="certificates-ul-list">
        {cretifiactesList.map((certificate) => (
          <a
            className="certificate-li-list"
            key={certificate.id}
            href={certificate.refer}
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
              Nxt Wave Disruptive Technologies.
            </p>
            <p
              style={{
                fontWeight: "600",
                color: theme === "Dark" ? "#DDDDDD" : "#525252",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {certificate.name}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: theme === "Dark" ? "#BBBBBB" : "#525252",
                fontWeight: "bold",
              }}
            >
              {certificate.course}
            </p>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
