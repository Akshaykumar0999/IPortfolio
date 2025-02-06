import './index.css'

const Projects = () => {
    return (
      <div className="projects">
        <div className="projects-headers">
          <h3 className="theme-title" style={{ alignSelf: "flex-start" }}>
            My Projects
          </h3>
          <a
            href="https://github.com/Akshaykumar0999"
            target="_blank"
            style={{ fontSize: "12px", color: "#686868" }}
          >
            See All
          </a>
        </div>
        <div className="projects-list-main">
          <div className="Project-list-item">
            <h3 className="project-name-title">Restaurant POS Application</h3>
            <div className="project-images-card">
              <img
                src="/projects/zara-1.png"
                alt="projectImg1"
                className="project-image-one"
              />
              <img
                src="/projects/zara-3.png"
                alt="projectImg2"
                className="project-image-two"
              />
              <img
                src="/projects/zara-2.png"
                alt="projectImg3"
                className="project-image-three"
              />
            </div>
            <p className="project-des">
              A powerful Restaurant POS System for order management, billing,
              reservations, analytics, and inventory tracking, ensuring seamless
              operations and growth.🚀
            </p>
          </div>
          <div className="Project-list-item">
            <h3 className="project-name-title">Construction Company</h3>
            <div className="project-images-card">
              <img
                src="/projects/con-1.png"
                alt="projectImg1"
                className="project-image-one"
              />
              <img
                src="/projects/con-2.png"
                alt="projectImg2"
                className="project-image-two"
              />
              <img
                src="/projects/con-3.png"
                alt="projectImg3"
                className="project-image-three"
              />
            </div>{" "}
            <p className="project-des">
              A construction company offering building, painting, tiling, and
              installation services with online quotations and a free
              consultation for clients.🚀
            </p>
          </div>
          <div className="Project-list-item">
            <h3 className="project-name-title">Palamuru Biosciences</h3>
            <div className="project-images-card">
              <img
                src="/projects/palamuru-3.png"
                alt="projectImg2"
                className="project-image-two"
              />
              <img
                src="/projects/palamuru-2.png"
                alt="projectImg3"
                className="project-image-three"
              />
              <img
                src="/projects/palamuru-1.png"
                alt="projectImg1"
                className="project-image-one"
              />
            </div>{" "}
            <p className="project-des">
              A laboratory management system for drug and blood sample testing,
              offering data tracking, real-time access, and automated scheduling
              for efficiency.
            </p>
          </div>
          <div className="Project-list-item">
            <h3 className="project-name-title">Inventory Application</h3>
            <div className="project-images-card">
              <img
                src="/projects/paint-3.png"
                alt="projectImg2"
                className="project-image-two"
              />
              <img
                src="/projects/paint-2.png"
                alt="projectImg3"
                className="project-image-three"
              />
              <img
                src="/projects/paint-1.png"
                alt="projectImg1"
                className="project-image-one"
              />
            </div>{" "}
            <p className="project-des">
              A Paint Inventory Application managing paints, customers, vendors,
              companies, and sales, ensuring efficient tracking, inventory
              control, and business operations.🚀
            </p>
          </div>
          <div className="Project-list-item">
            <h3 className="project-name-title">POS Software</h3>
            <div className="project-images-card">
              <img
                src="/projects/chiken-1.png"
                alt="projectImg1"
                className="project-image-one"
              />
              <img
                src="/projects/chiken-3.png"
                alt="projectImg2"
                className="project-image-two"
              />
              <img
                src="/projects/chiken-2.png"
                alt="projectImg3"
                className="project-image-three"
              />
            </div>{" "}
            <p className="project-des">
              A POS Inventory Application managing customers, vendors,
              companies, and sales, ensuring efficient tracking, inventory
              control, and business operations.🚀
            </p>
          </div>
          <div className="Project-list-item">
            <h3 className="project-name-title">Jobby Application</h3>
            <div className="project-images-card">
              <img
                src="/projects/jobby-1.png"
                alt="projectImg1"
                className="project-image-one"
              />
              <img
                src="/projects/jobby-3.png"
                alt="projectImg2"
                className="project-image-two"
              />
              <img
                src="/projects/jobby-2.png"
                alt="projectImg3"
                className="project-image-three"
              />
            </div>{" "}
            <p className="project-des">
              A job application platform displaying current industry jobs, with
              salary and company filters, providing detailed descriptions and
              direct application access.🚀
            </p>
          </div>
        </div>
      </div>
    );
}

export default Projects