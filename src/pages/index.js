import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../css/index.css";

const sections = [
  {
    title: "Section 1",
    image: <StaticImage src="../images/aaf-comp.jpg" alt="Section 1" />,
    text: {
      title: "Intro",
      content: "Hi there. I'm Serena",
      desc: "I’m a designer working on infrastructure and developer experiences."
    },
  },
  {
    title: "Section 2",
    image: <StaticImage src="../images/aaf-comp.jpg" alt="Section 2" />,
    text: {
      title: "Work",
      content: "Pantheon sdfagsdasd",
      desc: "I do blah blah blah....."
    },
  },
  {
    title: "Section 3",
    image: <StaticImage src="../images/aaf-comp.jpg" alt="Section 3" />,
    text: {
      title: "Work",
      content: "Tempus Ex sdfagsdasd",
      desc: "I do blah blah blah afsdgfr....."
    },
  },
  {
    title: "Section 2",
    image: <StaticImage src="../images/aaf-comp.jpg" alt="Section 2" />,
    text: {
      title: "Work",
      content: "FreeWire sdfagsdasd",
      desc: "I do blah blah blah....."
    },
  },
];

const IndexPage = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [heroText, setHeroText] = useState(sections[0].text); // Initialize with the first section's text

  const handleSectionHover = (image, text) => {
    setBackgroundImage(image);
    setHeroText(text);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(sections[0].image);
    setHeroText(sections[0].text);
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
                  onMouseEnter={() => handleSectionHover(section.image, section.text)}
                  onMouseLeave={handleMouseLeave} // Use the new event handler
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
          <h2>{heroText.title}</h2>
          <p>{heroText.content}</p>
          <p>{heroText.desc}</p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
