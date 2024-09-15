import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LenguageSwitcher";
import LanguageSwitcherMobile from "./LenguageSwitcherMobile";
import ThemeContext from "../store/theme/ThemeContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

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
            src="public/photos/foto.jpg"
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
              {location.pathname === "/" ? (
                  <PlaceIcon fontSize="large" />
                ) : null}
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className={` nav-Link ${
                    location.pathname === "/" ? "position-utent" : ""
                  } ${theme} secondary`}
                >
                  Home
                </Link>
              </li>
              <li>
                {location.pathname === "/about" ? (
                  <PlaceIcon fontSize="large" />
                ) : null}
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className={`nav-Link ${
                    location.pathname === "/about" ? "position-utent" : ""
                  } ${theme} secondary`}
                >
                  About
                </Link>
              </li>
              <li
              >
                {location.pathname === "/contact" ? (
                  <PlaceIcon fontSize="large" />
                ) : null}
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className={`nav-Link ${location.pathname === "/contact" ? "position-utent" : ""} ${theme} secondary`}
                >
                  Contact
                </Link>
              </li>
              <li>
                {location.pathname === "/blog" ? (
                  <PlaceIcon fontSize="large" />
                ) : null}
                <Link
                  to="/blog"
                  onClick={toggleMenu}
                  className={`nav-Link ${location.pathname === "/blog" ? "position-utent" : ""} ${theme} secondary`}
                >
                  Blog
                </Link>
              </li>
              <li>
                {location.pathname === "/portfolio" ? (
                  <PlaceIcon fontSize="large" />
                ) : null}
                <Link
                  to="/portfolio"
                  onClick={toggleMenu}
                  className={`nav-Link ${location.pathname === "/portfolio" ? "position-utent" : ""} ${theme} secondary`}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-secondary-containerSetting">
            <nav className={`nav-secondary-settingLanguage ${theme} secondary`}>
              <ul>
                <li>
                  <a href="">
                    <GitHubIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <InstagramIcon fontSize="large" />
                  </a>
                </li>
                <li>
                  <a href="">CV</a>
                </li>
                <li>
                  <a href="">
                    <EmailIcon fontSize="large" />
                  </a>
                </li>
              </ul>
              <LanguageSwitcherMobile />
            </nav>
          </div>
        </nav>
      </div>

      <div className={`nav-primary ${theme} secondary`}>
        <nav className="nav-primary-logo">
          <img
            src="public/photos/foto.jpg"
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
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className={`nav-Link ${theme} secondary`}>
                Blog
              </Link>
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
          <LanguageSwitcher />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
