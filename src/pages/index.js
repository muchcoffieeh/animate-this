import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../css/index.css";

const IndexPage = () => {
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

      <div className="right-div">
        <div className="navigation-container">
          <h2 className="navigation-heading">My Work</h2>
          <nav className="vertical-nav">
            <ul>
              <li>
                <a href="#section1">Section 1</a>
              </li>
              <li>
                <a href="#section2">Section 2</a>
              </li>
              <li>
                <a href="#section3">Section 3</a>
              </li>
              {/* Add more navigation items as needed */}
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
