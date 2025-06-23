import { useState } from "react";

const navData = [
  {
    phase: "Phase I",
    name: "10 Seconds",
    description: "A month long audio diary.",
    link: "phase-i"
  },
  {
    phase: "Phase II",
    name: "Panels",
    description: "Let's make a comic strip!",
    link: "phase-ii"
  },
  {
    phase: "Phase III",
    name: "Rorschach",
    description: "What do you see?",
    link: "phase-iii"
  },
  {
    phase: "Phase IV",
    name: "Object Stories",
    description: "Every object has a story.",
    link: "phase-iv"
  },
  {
    phase: "Phase V",
    name: "Bar None",
    description: "Our first foray in to music making.",
    link: "phase-v"
  }
  // ,
  // {
  //   phase: "Phase VI",
  //   name: "Vegetable Revue",
  //   description: "Music with veggie themes.",
  //   link: "phase-vi"
  // },
];

const Nav = ({ mode }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div
      className={`Nav  ${mode === "dark" ? "Nav--isDark" : ""} ${
        isVisible ? "Nav--isVisible" : ""
      }`}
    >
      <button
        className="Nav__Toggle"
        onClick={() => {
          setVisible(!isVisible);
        }}
      >
        {" "}
      </button>
      <div className="Nav__Pane">
        <ul>
          {navData.map((item, i) => (
            <li key={`nav${i}`} className="Nav__Item">
              <a href={`/${item.link}`}>
                <div className="Nav__Item__Phase">
                  <h3>{item.phase}</h3>
                </div>
                <div className="Nav__Item__Desc">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="Nav__Footer">
          A{" "}
          <a href="https://sanju.io/" target="_blank">
            Sanju
          </a>{" "}
          &{" "}
          <a href="https://natelaffan.info" target="_blank">
            Nate
          </a>{" "}
          Production
        </div>
      </div>
    </div>
  );
};

export default Nav;
