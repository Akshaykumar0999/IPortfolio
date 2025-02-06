import "./index.css";

const Education = () => {
  return (
    <div className="techstack">
      <h3
        className="theme-title"
        style={{
          marginBottom: "12px",
          textAlign: "left",
          alignSelf: "flex-start",
        }}
      >
        Education
      </h3>
      <div className="experience-card" style={{ margin: "12px 0px" }}>
        <p style={{ fontSize: "12px", color: "#525252", fontWeight: "500" }}>
          January 2021 - December 2022
        </p>
        <p style={{ fontWeight: "600" }}>Fullstack Developer Student</p>
        <p style={{ fontSize: "14px", color: "#525252", fontWeight: "500" }}>
          Nxt Wave Disruptive Technologies.
        </p>
      </div>
      <div className="experience-card" style={{ margin: "12px 0px" }}>
        <p style={{ fontSize: "12px", color: "#525252", fontWeight: "500" }}>
          July 2016 - Agust 2020
        </p>
        <p style={{ fontWeight: "600" }}>
          Bsc-(MECS) Computer Science Student.
        </p>
        <p style={{ fontSize: "14px", color: "#525252", fontWeight: "500" }}>
          Swmamy Vivekananda Degree & Pg Collage.
        </p>
      </div>
    </div>
  );
};

export default Education;
