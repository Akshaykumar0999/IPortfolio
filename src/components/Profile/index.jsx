import { useContext } from 'react';
import './index.css'
import { ThemeContext } from '../../Context/themeContext';

const Profile =()=> {
  const {theme} = useContext(ThemeContext);
    return (
      <div
        className="profile"
        style={{
          background:
            theme === "Dark" && "oklch(25.3267% .015896 252.417568 / 1)",
          color: theme === "Dark" && "#BBBBBB",
          boxShadow:
            theme === "Dark" &&
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        <div
          className="profile-image-card"
          style={{ border: theme === "Dark" && "3px solid #8181EF" }}
        >
          <img src="/Akshay.png" className="profile-image" />
        </div>
        <h1
          className="profile-title"
          style={{
            color: theme === "Dark" && "#BBBBBB",
          }}
        >
          Akshaykumar Kanike
        </h1>
        <p
          className="profile-text"
          style={{
            color: theme === "Dark" && "#BBBBBB",
          }}
        >
          ⚡ Frontend Developer | ReactJS & UI/UX Enthusiast | Passionate
          Educator | 3+ Years Experience in Building Scalable Web Applications |
          HTML/CSS | Javascript | React | Redux ⚡
        </p>
        <button
          style={{
            color: theme === "Dark" && "#BBBBBB",
          }}
          className="download-resume"
        >
          Download Resume
        </button>
      </div>
    );
}

export default Profile