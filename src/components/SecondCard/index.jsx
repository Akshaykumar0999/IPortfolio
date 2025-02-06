import Achievements from "../Achivements";
import Github from "../Github";
import Projects from "../Projects";
import "./index.css";

const SecondCard = () => {
  return (
    <div className="secondcard">
      <Projects />
      <Github />
      <Achievements />
      <div style={{ width: "100%", background: "transperant" }}>
        <h3 style={{ color: "transparent" }}>.</h3>
      </div>
    </div>
  );
};

export default SecondCard;
