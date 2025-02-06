import "./index.css";

const Achievements = () => {
  return (
    <div className="Achivement">
      <div className="projects-headers">
        <h3 className="theme-title" style={{ alignSelf: "flex-start" }}>
          Achievements
        </h3>
        <p></p>
      </div>
      <div className="achivement-list-main">
        <div className="achievements-card">
          <img src="/projects/NxtWave2.jpg" className="achive-image" />
          <div className="achivement-details-card">
            <h5
              style={{
                color: "#484848",
                fontSize: "17px",
                marginBottom: "12px",
              }}
            >
              30 Days Of Coding Challange In Nxt Wave
            </h5>
            <p
              style={{
                color: "#777777",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              By consistently completing daily coding tasks provided by nxtWave
              for 30 days, I earned valuable points and successfully achieved
              the Certificate of Consistency in Coding, showcasing my dedication
              and commitment to enhancing my coding skills through continuous
              practice and learning. 🚀
            </p>
          </div>
        </div>
        <div className="achievements-card">
          <img src="/projects/csit.png" className="achive-image" />
          <div className="achivement-details-card">
            <h5
              style={{
                color: "#484848",
                fontSize: "17px",
                marginBottom: "12px",
              }}
            >
              Recognized for Excellence in Teaching ReactJS
            </h5>
            <p
              style={{
                color: "#777777",
                fontSize: "14px",
                marginBottom: "12px",
              }}
            >
              I taught ReactJS and frontend technologies at CSIT Software
              Training Centre for one year, where I developed an easy-to-learn,
              comprehensive curriculum. My efforts were praised for making React
              more accessible and understandable, leading to successful learning
              outcomes for students. This recognition stands as a testament to
              my teaching skills and dedication. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
