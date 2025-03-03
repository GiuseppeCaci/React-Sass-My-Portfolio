import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import ThemeContext from "../store/theme/ThemeContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation, Trans } from 'react-i18next';

const NavBar = () => {
  //chiamo il context del tema per recuperare il tema inserito
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation('navBar');

  //stato che gestisce l'apertura/chiusura del menu a discesa
  const [isOpen, setIsOpen] = useState(false);

  //funzione che gestisce il cambio stato menu a discesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //stato che gestisce la rotazione del logo
  const [touchIt, setTouchIt] = useState(false);

  //funzione che gestisce la rotazione del logo
  const toggleLogo = () => {
    setTouchIt(!touchIt);

    //resetto dopo l'animazione
    setTimeout(() => {
      setTouchIt(false);
    }, 300);
  };
  //creo una funzione che blocca lo scroll della pagina se il menu a discesa è attivo
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      {/*MENU VERSIONE MOBILE/TABLET*/}
      <div
        className={`nav-secondary-hamburger ${theme} primary nav-trasparent-color `}
      >
        <nav className="nav-secondary-logo">
          <Link className="nav-secondary-link-logo" to="/" onClick={toggleLogo}>
            <img
              src="/assets/generic/logo.png"
              alt="mia-foto"
              className={`img-logo ${touchIt ? "rotate-logo" : ""}`}
            />
            <p>Giuseppe Caci</p>
          </Link>
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
          } ${theme} secondary`}
        >
          <div className="nav-secondary-groupLinks">
            <ul>
              <li
                className={`link-transition-left  ${
                  isOpen ? "link-transition-state" : ""
                }`}
              >
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className={` nav-Link ${theme} secondary ${
                    location.pathname === "/"
                      ? "position-utent navigation-menu"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li
                className={`link-transition-right  ${
                  isOpen ? "link-transition-state" : ""
                }`}
              >
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className={`nav-Link ${theme} secondary ${
                    location.pathname === "/about"
                      ? "position-utent navigation-menu"
                      : ""
                  }`}
                >
                  {t('about')}
                </Link>
              </li>
              <li
                className={`link-transition-left  ${
                  isOpen ? "link-transition-state" : ""
                }`}
              >
                <Link
                  to="/chat-assistant"
                  onClick={toggleMenu}
                  className={`nav-Link ${theme} secondary ${
                    location.pathname === "/chat-assistant"
                      ? "position-utent navigation-menu"
                      : ""
                  }`}
                >
                  {t('contact')}
                </Link>
              </li>

              <li
                className={`link-transition-left  ${
                  isOpen ? "link-transition-state" : ""
                }`}
              >
                <Link
                  to="/portfolio"
                  onClick={toggleMenu}
                  className={`nav-Link ${theme} secondary ${
                    location.pathname === "/portfolio"
                      ? "position-utent navigation-menu"
                      : ""
                  }`}
                >
                  Portfolio
                </Link>
              </li>
            </ul>
            <div>
            <LanguageSwitcher/>
            </div>
          </div>
        </nav>
      </div>

      {/*MENU VERSIONE DESKTOP*/}
      <div className={`nav-primary ${theme} secondary`}>
        <nav className="nav-primary-logo">
          <Link className="nav-primary-link-logo" to="/" onClick={toggleLogo}>
            <img
              src="/assets/generic/logo.png"
              alt="mia-foto"
              className={`img-logo ${touchIt ? "rotate-logo" : ""}`}
            />
            <p>Giuseppe Caci</p>
          </Link>
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
              {t('about')}
              </Link>
            </li>
            <li>
              <Link to="/chat-assistant" className={`nav-Link ${theme} secondary`}>
              {t('contact')}
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
        </nav>
      </div>
    </>
  );
};

export default NavBar;
