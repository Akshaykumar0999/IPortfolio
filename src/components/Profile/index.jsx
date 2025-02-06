import './index.css'

const Profile =()=> {
    return (
      <div className="profile">
        <div className="profile-image-card">
          <img src="/Akshay.png" className="profile-image" />
        </div>
        <h1 className="profile-title">Akshaykumar Kanike</h1>
        <p className="profile-text">
          ⚡ Frontend Developer | ReactJS & UI/UX Enthusiast | Passionate
          Educator | 3+ Years Experience in Building Scalable Web Applications |
          HTML/CSS | Javascript | React | Redux ⚡
        </p>
        <button className="download-resume">Download Resume</button>
      </div>
    );
}

export default Profile