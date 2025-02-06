import "./index.css";
import { IoMdLink } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";

const Github = () => {
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
          Github Projects
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
        <a
          href="https://github.com/Akshaykumar0999/NxtTrendsApp"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Nxt-Trends Ecommerce Website
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            Implemented Nxt Trendz application which is a Clone for Ecommerce
            Website like Amazon, Flipcart, Myntra etc..., where users can login
            and can see list of products with search, filters, sort by, etc..🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/MtTasksAssignment"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              My Tasks
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            A task management application to track, organize, prioritize tasks,
            set deadlines, and boost productivity with an intuitive and
            efficient workflow. ✅🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/CoinTossGameApp"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Coin Game
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            A coin game that tracks heads and tails counts, displays real-time
            visuals, and offers an interactive experience, allowing users to
            enjoy and engage with the gameplay. 🎮🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#FF6A20" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              HTML
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/zarawebsite"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Restaurant Webiste
            </h3>
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
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#3b79ff" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              Typescript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/CCBP-TimeLines-Using-react-Chronos"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              CCBP Timeline
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            React-Chronos Timeline creates interactive, responsive timelines
            with smooth animations, displaying events, milestones, and
            customizable content for an engaging user experience.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/simpleTodos"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Simple Todos
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            A simple To-Do List application built with HTML, CSS, and
            JavaScript, enabling users to add, view, and delete tasks, providing
            an interactive and user-friendly way to manage daily tasks.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#FF6A20" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              HTML
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/ColorGradientGenerator"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Color Gradients
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            CSS color gradients create smooth transitions between two or more
            colors. They can be linear, radial, or conic, offering a visually
            appealing way to enhance backgrounds, buttons, and other design
            elements.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/MemeApp"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Meme App
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            A Meme App allows users to create, share, and browse memes, with
            features like adding text, choosing images, and customizing designs
            for a fun and interactive experience.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/PrimeVideoPlayer"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Prime Video
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            Prime Video provides a vast selection of movies, TV shows, and
            exclusive original content, available for on-demand streaming with a
            subscription, offering high-quality entertainment.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/ProjectsShowCase"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink
              style={{
                marginRight: "8px",
                color: "#afaeac",
              }}
            />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Project-Showcase
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            A Project Showcase displays personal or professional projects,
            featuring descriptions, visuals, and technologies used, aimed at
            attracting clients or employers.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/ReactRouterL2"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              React-Router
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            React Router enables navigation between components in a React
            application, allowing dynamic routing and rendering of views based
            on URL.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
        <a
          href="https://github.com/Akshaykumar0999/CowinDashBoardApp"
          target="_blank"
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
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <IoMdLink style={{ marginRight: "8px", color: "#afaeac" }} />
            <h3
              className="project-name-title"
              style={{
                alignSelf: "flex-start",
                textAlign: "left",
                color: theme === "Dark" && "#DDDDDD",
              }}
            >
              Covid Dashboard
            </h3>
          </div>
          <p
            className="project-des"
            style={{
              color: theme === "Dark" && "#BBBBBB",
            }}
          >
            A COVID Dashboard displays real-time statistics, including cases,
            recoveries, and deaths, providing visual insights using charts and
            graphs.🚀
          </p>
          <div className="github-code-dots">
            <GoDotFill
              size={20}
              style={{ marginRight: "2px", color: "#ffdd2e" }}
            />
            <p
              style={{
                color: theme === "Dark" ? "#DDDDDD" : "#6b6b6b",
              }}
            >
              JavaScript
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Github;
