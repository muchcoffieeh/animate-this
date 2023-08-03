import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../css/index.css";

const sections = [
  {
    title: "Pantheon Platform",
    image: "../images/pantheon-comp.jpg",
    text: {
      title: "Work",
      content: "Pantheon powers the open web with a cloud native software making it easy to securely manage a single website or thousands of websites across multiple teams in one platform.",
      desc: "I’m currently designing developer experiences and leading design on the Core Site Services team."
    },
  },
  {
    title: "Tempus Ex",
    image: "../images/txm-comp.jpg",
    text: {
      title: "Work",
      content: "Merging sports, video, and data with innovation and accessibility, Tempus Ex technology enables the creation of new interactive experiences around live events.",
      desc: "I was rapidly translating product ideas into dynamic visual prototypes."
    },
  },
  {
    title: "FreeWire Technologies",
    image: "../images/freewire-comp.jpg",
    text: {
      title: "Work",
      content: "FreeWire is an industry leader in battery-integrated ultrafast electric vehicle (EV) charging and energy management solutions solving grid infrastructure constraints.",
      desc: "I designed digital solutions that seamlessly complemented the battery-integrated ultrafast EV charging and energy management offerings."
    },
  },
  {
    title: "Alliance of American Football",
    image: "../images/aaf-comp.jpg",
    text: {
      title: "Work",
      content: "The Alliance of American Football left a legacy of pioneering advanced sport tech, including real-time fantasy app with interactive features that revolutionized the fan experience.",
      desc: "I focused on crafting interactive experiences and enhancing fan engagement both during games and in-between."
    },
  },
];

const IndexPage = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [heroText, setHeroText] = useState(sections[0].text); // Initialize with the first section's text
  const [isHovering, setIsHovering] = useState(false); // Track whether a section link is being hovered
  const defaultText = {
    title: "INTRO",
    content: "Hi there. I'm Serena.",
    desc: "I’m a designer working on infrastructure and developer experiences.",
  };

  const handleSectionHover = (image, text) => {
    setBackgroundImage(image);
    setHeroText(text);
    setIsHovering(true); // Set the flag to true when hovering over a section link
  };

  // const handleMouseLeave = () => {
  //   setBackgroundImage(sections[0].image);
  //   setHeroText(defaultText);
  //   setIsHovering(false); // Set the flag to false when not hovering over a section link
  // };

  const handleMouseLeave = () => {
    setBackgroundImage(""); // Reset background image to empty string
    setHeroText(defaultText);
    setIsHovering(false); // Set the flag to false when not hovering over a section link
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
          <h2 className="navigation-heading">MY WORK</h2>
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
          <h2>{isHovering ? heroText.title : defaultText.title}</h2>
          <p>{isHovering ? heroText.content : defaultText.content}</p>
          <p className="p-2">{isHovering ? heroText.desc : defaultText.desc}</p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Designed By Serena</title>;
