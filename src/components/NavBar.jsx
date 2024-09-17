import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import ThemeContext from "../store/theme/ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <div className={`nav-secondary-hamburger ${theme} primary`}>
        <nav className="nav-secondary-logo">
          <img
            src="/assets/logo.png"
            alt="mia-foto"
            className="img-logo"
          />
          <p>Giuseppe Caci</p>
        </nav>
        <nav className="nav-secondary-settingTheme">
          <ThemeToggle />
        </nav>
        <div className="nav-secondary-container-hamburger">
          <nav
            className={`nav-hamburger-icon ${
              isOpen ? "open rotate-90-cw" : "rotate-90-ccw"
            } ${theme} secondary`}
            onClick={toggleMenu}
          >
            <div className="nav-hamburger-line line-hamburger"></div>
            <div className="nav-hamburger-line line-hamburger"></div>
            <div className="nav-hamburger-line line-hamburger"></div>
          </nav>
        </div>
        <nav
          className={`nav-secondary-menu ${
            isOpen ? "open" : ""
          }  ${theme} secondary`}
        >
          <div className="nav-secondary-groupLinks">
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className={` nav-Link ${theme} secondary ${
                    location.pathname === "/" ? "position-utent navigation-menu" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className={`nav-Link ${theme} secondary ${
                    location.pathname === "/about" ? "position-utent navigation-menu" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className={`nav-Link ${theme} secondary ${
                    location.pathname === "/contact" ? "position-utent navigation-menu" : ""
                  }`}
                >
                  Contatti
                </Link>
              </li>
              <li className={`nav-Link ${theme} secondary`} >
                <div className="coming-soon-container coming-soon-color">
                  <p>Blog</p>
                  <p>ComingSoon</p>
                </div>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={toggleMenu}
                  className={`nav-Link ${theme} secondary ${
                    location.pathname === "/portfolio" ? "position-utent navigation-menu" : ""
                  }`}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-secondary-containerSetting">
            <nav className={`nav-secondary-link-icons ${theme} secondary`}>
              <ul>
                <li>
                  <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
                    <GitHubIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
                    <LinkedInIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank"> 
                    <InstagramIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a
                    href={import.meta.env.VITE_CV_URL} target="_blank"
                    download="curriculum-CACI.pdf"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                    <EmailIcon fontSize="large" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </div>

      <div className={`nav-primary ${theme} secondary`}>
        <nav className="nav-primary-logo">
          <img
            src="/assets/logo.png"
            alt="mia-foto"
            className="img-logo"
          />
          <p>Giuseppe Caci</p>
        </nav>
        <nav className="nav-primary-link">
          <ul>
            <li>
              <Link to="/" className={`nav-Link ${theme} secondary`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-Link ${theme} secondary`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-Link ${theme} secondary`}>
                Contatti
              </Link>
            </li>
            <li>
            <div className="coming-soon-container-desk coming-soon-color">
                  <p>Blog</p>
                  <p>ComingSoon</p>
                </div>
            </li>
            <li>
              <Link to="/portfolio" className={`nav-Link ${theme} secondary`}>
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="nav-primary-setting">
          <ThemeToggle />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
