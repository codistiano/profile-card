import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
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
  return <img className="avatar" src="./avatar.jpg" alt="avatar"></img>;
}

function Intro() {
  return (
    <>
      <h1>Abdella Bedru</h1>
      <p>A Self-taught programmer advancing in his Web Development skills</p>
    </>
  );
}

function SkillList() {
  const skillList = skills;

  return (
    <ul className="skill-list">
      {skillList.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </ul>

    // <div className="skill-list">
    //   <Skill skill="HTML & CSS" emoji="💪🏼" color="orangered" />
    //   <Skill skill="JavaScript" emoji="💪🏼" color="crimson" />
    //   <Skill skill="NodeJS" emoji="💪🏼" color="yellow" />
    //   <Skill skill="ExpressJS" emoji="💪🏼" color="yellowgreen" />
    //   <Skill skill="MongoDB" emoji="💪🏼" color="green" />
    // </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶🏼"}
        {level === "intermediate" && "👍🏼"}
        {level === "advanced" && "💪🏼"}
      </span>
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
