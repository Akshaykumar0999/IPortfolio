import { useContext } from 'react';
import './index.css'
import { ThemeContext } from '../../Context/themeContext';

const Projects = () => {
  const {theme} = useContext(ThemeContext);
    return (
      <div
        className="projects"
        style={{
          backgroundColor:
            theme === "Dark" && "oklch(25.3267% .015896 252.417568 / .4)",
        }}
      >
        <div className="projects-headers">
          <h3
            className="theme-title"
            style={{
              alignSelf: "flex-start",
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            My Projects
          </h3>
          <a
            href="https://github.com/Akshaykumar0999"
            target="_blank"
            style={{
              fontSize: "12px",
              color: theme === "Dark" ? "#BBBBBB" : "#686868",
            }}
          >
            See All
          </a>
        </div>
        <div className="projects-list-main">
          <div
            className="Project-list-item"
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
              className="project-name-title"
              style={{
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Restaurant POS Application
            </h3>
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
            <p
              className="project-des"
              style={{
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              A powerful Restaurant POS System for order management, billing,
              reservations, analytics, and inventory tracking, ensuring seamless
              operations and growth.🚀
            </p>
          </div>
          <div
            className="Project-list-item"
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
              className="project-name-title"
              style={{
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Construction Company
            </h3>
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
            <p
              className="project-des"
              style={{
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              A construction company offering building, painting, tiling, and
              installation services with online quotations and a free
              consultation for clients.🚀
            </p>
          </div>
          <div
            className="Project-list-item"
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
              className="project-name-title"
              style={{
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Palamuru Biosciences
            </h3>
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
            <p
              className="project-des"
              style={{
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              A laboratory management system for drug and blood sample testing,
              offering data tracking, real-time access, and automated scheduling
              for efficiency.
            </p>
          </div>
          <div
            className="Project-list-item"
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
              className="project-name-title"
              style={{
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Inventory Application
            </h3>
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
            <p
              className="project-des"
              style={{
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              A Paint Inventory Application managing paints, customers, vendors,
              companies, and sales, ensuring efficient tracking, inventory
              control, and business operations.🚀
            </p>
          </div>
          <div
            className="Project-list-item"
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
              className="project-name-title"
              style={{
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              POS Software
            </h3>
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
            <p
              className="project-des"
              style={{
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
              A POS Inventory Application managing customers, vendors,
              companies, and sales, ensuring efficient tracking, inventory
              control, and business operations.🚀
            </p>
          </div>
          <div
            className="Project-list-item"
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
              className="project-name-title"
              style={{
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Jobby Application
            </h3>
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
            <p
              className="project-des"
              style={{
                color: theme === "Dark" && "#BBBBBB",
              }}
            >
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