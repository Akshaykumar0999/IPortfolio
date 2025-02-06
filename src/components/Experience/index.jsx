import './index.css'

const Experience = () => {
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
          Experience
        </h3>
        <div className="experience-card">
          <p style={{ fontSize: "12px", color: "#525252", fontWeight: "500" }}>
            January 2022 - Present
          </p>
          <p style={{ fontWeight: "600" }}>Frontend Developer</p>
          <p style={{ fontSize: "14px", color: "#525252", fontWeight: "500" }}>
            Joudah Info Lingo Tech Pvt Ltd.
          </p>
        </div>
      </div>
    );
}

export default Experience