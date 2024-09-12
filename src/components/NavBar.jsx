import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LenguageSwitcher";
import LanguageSwitcherMobile from "./LenguageSwitcherMobile";
import ThemeContext from "../store/theme/ThemeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

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
      <div className={`nav-secondary-hamburger ${theme} secondary`}>
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
          className={`nav-hamburger-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="nav-hamburger-line"></div>
          <div className="nav-hamburger-line"></div>
          <div className="nav-hamburger-line"></div>
        </nav>
        </div>
        <nav className={`nav-secondary-menu ${isOpen ? "open" : ""}  ${theme} primary`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu} className={`nav-Link ${theme} primary`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className={`nav-Link ${theme} primary`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className={`nav-Link ${theme} primary`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={toggleMenu} className={`nav-Link ${theme} primary`}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={toggleMenu} className={`nav-Link ${theme} primary`}>
                Portfolio
              </Link>
            </li>
          </ul>
          <nav className={`nav-secondary-settingLanguage ${theme} primary`}>
          <LanguageSwitcherMobile />
        </nav>
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
