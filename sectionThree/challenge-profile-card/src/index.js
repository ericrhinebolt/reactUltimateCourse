import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Java",
    level: "advanced",
    color: "#37b24d",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#1098ad",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#e8590c",
  },
  {
    skill: "GraphQL",
    level: "advanced",
    color: "#e64980",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "#be4bdb",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#91a7ff",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="eric.png" alt="me" />;
}

function Intro() {
  return (
    <div className="">
      <h1>Eric Rhinebolt</h1>
      <p>
        Full-stack web developer. When I'm not working or gaming, I enjoy the
        outdoors and hands on work.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skills) => (
        <Skill skillObj={skills} key={skills.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  const emoji =
    skillObj.level === "advanced"
      ? `\u{1F4AA}`
      : skillObj.level === "intermediate"
      ? `\u{1F44D}`
      : skillObj.level === "beginner"
      ? `\u{1F476}`
      : null;
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{emoji}</span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
