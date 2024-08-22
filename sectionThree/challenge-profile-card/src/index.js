import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
    <div className="skill-list">
      <Skill skillName="Java" skillEmoji="&#x1F4AA;" skillColor="#37b24d" />
      <Skill skillName="HTML+CSS" skillEmoji="&#x1F4AA;" skillColor="#1098ad" />
      <Skill
        skillName="JavaScript"
        skillEmoji="&#x1F44D;"
        skillColor="#e8590c"
      />
      <Skill skillName="GraphQL" skillEmoji="&#x1F4AA;" skillColor="#e64980" />
      <Skill
        skillName="Git and Github"
        skillEmoji="&#x1F4AA;"
        skillColor="#be4bdb"
      />
      <Skill skillName="React" skillEmoji="&#x1F476;" skillColor="#91a7ff" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.skillColor }}>
      <span>{props.skillName}</span>
      <span>{props.skillEmoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
