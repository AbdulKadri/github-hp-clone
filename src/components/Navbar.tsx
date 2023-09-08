import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
        <ul className="navbar-menu">
          <li className="navbar-item has-submenu">
            <span>Product</span>
            <ul className="submenu">
              <li>
                <a href="#">
                  {/* Icon here */}
                  <div>
                    <h3>Actions</h3>
                    <p>automate any workflow</p>
                  </div>
                </a>
              </li>
              <li>Packages</li>
              <li>Security</li>
              <li>Codespaces</li>
              <li>Copilot</li>
              <li>Code review</li>
              <li>Issues</li>
              <li>Discussions</li>
            </ul>
            <ul className="submenu">
              <span>Explore</span>
              <li>All Features</li>
              <li>Documentation</li>
              <li>Github Skills</li>
              <li>Blog</li>
            </ul>
          </li>
          <li className="navbar-item has-submenu">
            <span>Solutions</span>
            <ul className="submenu">
              <span>For</span>
              <li>Enterprises</li>
              <li>Teams</li>
              <li>Startups</li>
              <li>Education</li>
              <br />
              <span>By Solution</span>
              <li>CI/CD & Automation</li>
              <li>DevOps</li>
              <li>DevSecOps</li>
              <br />
              <span>Resources</span>
              <li>Customer Stories</li>
              <li>White papers, Ebooks, Webinars</li>
              <li>Partners</li>
            </ul>
          </li>
          <li className="navbar-item has-submenu">
            <span>Open Source</span>
            <ul className="submenu">
              <li>
                <b>Github Sponsers</b>
                <br />
                Fund open source developers
              </li>
              <br />
              <li>
                <b>The ReadME Project</b>
                <br />
                Github community articles
              </li>
              <br />
              <span>Repositories</span>
              <li>Topics</li>
              <li>Trending</li>
              <li>Collections</li>
            </ul>
          </li>
          <li className="navbar-item">
            <span>Pricing</span>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} color="white" />
          <input type="text" placeholder="Search or jump to..." />
        </div>
        <button className="navbar-button sign-in">Sign In</button>
        <button className="navbar-button sign-up">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
