import './index.css'

const techStackSkills = [
    'HTML', 'CSS', 'Javascript', 'React.js', 'Redux', 'React-hooks', 'React Native', 'Python', 'SQLite', 'MySQL', 'Node.js', 'Express.js', 'Git', 'Vscode'
]
const TechStack = () => {
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
          Tech Stack
        </h3>
        <ul className="techstack-ul-list">
          {techStackSkills.map((skill, i) => (
            <li
              key={i}
              style={{
                background: "#ffdd2e",
                color: "#000",
                padding: "1px 12px",
                borderRadius: "17px",
                margin: "5px",
                fontWeight: '600',
                fontSize: '12px'
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