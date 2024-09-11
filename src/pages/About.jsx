import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";

const About = () => {
  const { t } = useTranslation("about");
const {theme} = useContext(ThemeContext);
const skills = ["HTML", "CSS", "BOOTSTRAP","SASS","JAVASCRIPT","NODE.JS","REACT","GIT","restfulAPI",
  "MONGODB","REDUX","RESPONSIVE DESIGN","GITHUB","TAILWIND","AEM","FIGMA"];

  return (
    <>
    <div className={`main-base ${theme} primary`}>
    <div className="container-about">
        <div>
          <h1>About</h1>
          <div className="container-about-bio">
            <img src="https://images.unsplash.com/photo-1725109431802-d73f9fda6ba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="container-about-bio-text">
              <h2>Sono un Web developer, studio a Palermo, Italia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, eius qui dicta itaque minus odit maiores aut dolore
                similique a? Eligendi eum laudantium iusto voluptates maxime
                quas itaque ad exercitationem repellat iste molestias ipsam,
                placeat blanditiis labore nostrum nam laborum sequi neque? Totam
                debitis, quas magni ea cupiditate, autem amet illo perspiciatis
                modi, accusantium veniam! Quisquam a, nesciunt sunt, perferendis
                quod accusantium dicta odio dolores minus culpa ipsum? Qui eius
                nulla exercitationem fugit voluptate, optio illum doloremque
                neque mollitia ea quae nam, iusto quas voluptas repudiandae,
                beatae ab voluptates modi tempora aliquam consectetur? Error
                illum, illo perspiciatis sit libero sint.
              </p>
            </div>
          </div>
        </div>
        <button>CONTATTAMI</button>
      </div>
      <div className="base-container-normal ${theme} primary">
        <div className={`main-container-secondary--large ${theme} secondary`}>
          <h2>Design</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ullam nemo at a ducimus voluptate 
            rerum vel? Veritatis nesciunt voluptatum, atque tempora beatae, repellendus voluptate quibusdam 
            saepe doloremque rem sapiente.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ullam nemo at a ducimus voluptate 
            rerum vel? Veritatis nesciunt voluptatum, atque tempora beatae, repellendus voluptate quibusdam 
            saepe doloremque rem sapiente.</p>
            <h2>Engine</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ullam nemo at a ducimus voluptate 
            rerum vel? Veritatis nesciunt voluptatum, atque tempora beatae, repellendus voluptate quibusdam 
            saepe doloremque rem sapiente.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ullam nemo at a ducimus voluptate 
            rerum vel? Veritatis nesciunt voluptatum, atque tempora beatae, repellendus voluptate quibusdam 
            saepe doloremque rem sapiente.</p>
        </div>
      </div>
      <div className="base-container-normal">
        <div className="container-about-skills">
        <h3>Competenze tecniche</h3>
        <div className="container-about-box">
          {skills.map((element) => (
            <div className="about-box-card line-card"><p>{element}</p></div>
          ))}
        </div>
        </div>
        </div>
      <div className="base-container-normal">
        <div className={`main-container-secondary--large ${theme} secondary`}>
          <h2>Soft Skills</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ullam nemo at a ducimus voluptate 
            rerum vel? Veritatis nesciunt voluptatum, atque tempora beatae, repellendus voluptate quibusdam 
            saepe doloremque rem sapiente.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ullam nemo at a ducimus voluptate 
            rerum vel? Veritatis nesciunt voluptatum, atque tempora beatae, repellendus voluptate quibusdam 
            saepe doloremque rem sapiente.</p>
            <button>CURRICULUM PDF</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
