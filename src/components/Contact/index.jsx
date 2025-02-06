import "./index.css";
import {
  IoLocation,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoYoutube,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GiMineralHeart } from "react-icons/gi";
import { VscMapVerticalFilled } from "react-icons/vsc";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

const contactListCard = [
  {
    id: 1,
    name: "Email:",
    icon: <MdEmail style={{ marginRight: "8px" }} />,
    text: "Kanikeakshay55@gmail.com",
    reference: "Kanikeakshay55@gmail.com",
  },
  {
    id: 2,
    name: "Linkedin:",
    icon: <IoLogoLinkedin style={{ marginRight: "8px" }} />,
    text: "linkedin.com/akshaykumar",
    reference: "https://www.linkedin.com/in/akshaykumar-kanike-502204228/",
  },
  {
    id: 3,
    name: "Github:",
    icon: <IoLogoGithub style={{ marginRight: "8px" }} />,
    text: "github.com/akshaykumar",
    reference: "https://github.com/Akshaykumar0999",
  },
  {
    id: 5,
    name: "My Website:",
    icon: <GiMineralHeart style={{ marginRight: "8px" }} />,
    text: "Akshaykumarkanike",
    reference: "#",
  },
  {
    id: 6,
    name: "Youtube:",
    icon: <IoLogoYoutube style={{ marginRight: "8px" }} />,
    text: "youtube.com/@Akshaykumar",
    reference: "https://www.youtube.com/@AkshayKumar-gd1xz",
  },
  {
    id: 4,
    name: "Naukri:",
    icon: <VscMapVerticalFilled style={{ marginRight: "8px" }} />,
    text: "naukri.com/akshaykumar",
    reference: "https://www.naukri.com/mnjuser/profile",
  },
];
const Contact = () => {
  const {theme} = useContext(ThemeContext)
    return (
      <div
        className="contact"
        style={{
          background:
            theme === "Dark" && "oklch(25.3267% .015896 252.417568 / 1)",
          color: theme === "Dark" && "#BBBBBB",
          boxShadow:
            theme === "Dark" &&
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <ul
          className="contact-ul-list"
          style={{
            color: theme === "Dark" && "#BBBBBB",
          }}
        >
          <li className="contact-li-list">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "600",
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              <IoLocation style={{ marginRight: "8px" }} />
              <p>Base In:</p>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#525252",
                fontWeight: "500",
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              Hyderabad, India
            </p>
          </li>
          {contactListCard.map((list) => (
            <li
              key={list.id}
              className="contact-li-list"
              style={{
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                }}
              >
                {list.icon}
                <p>{list.name}</p>
              </div>
              <a
                href={list.reference}
                style={{
                  fontSize: "14px",
                  color: theme === "Dark" ? "#BBBBBB" : "#525252",
                }}
              >
                {list.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Contact