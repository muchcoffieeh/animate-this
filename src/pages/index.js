import React, { useState } from "react"; 
import { StaticImage } from "gatsby-plugin-image";
import "../css/index.css";

const sections = [
  {
    title: "Section 1",
    image: "../images/aaf-comp.jpg", // Replace with actual image path
  },
  {
    title: "Section 2",
    image: "../images/aaf-comp.jpg", // Replace with actual image path
  },
  {
    title: "Section 3",
    image: "../images/aaf-comp.jpg", // Replace with actual image path
  },
  // Add more sections as needed
];

const IndexPage = () => {
  const [backgroundImage, setBackgroundImage] = React.useState("");

  const handleSectionHover = (image) => {
    setBackgroundImage(image);
  };

  return (
    <main>
      <div className="left-div">
        <div className="logo-container">
          <StaticImage
            src="../images/sx-logo.png"
            loading="eager"
            width={200}
            quality={80}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
      </div>

      <div className="right-div" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="navigation-container">
          <h2 className="navigation-heading">My Work</h2>
          <nav className="vertical-nav">
            <ul>
              {sections.map((section, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleSectionHover(section.image)}
                  onMouseLeave={() => handleSectionHover("")}
                >
                  <a href={`#section${index + 1}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-left">
          <h2>Intro</h2>
          <p>Hi there. I'm Serena</p>
          <p>I’m a designer working on infrastructure and developer experiences.</p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
