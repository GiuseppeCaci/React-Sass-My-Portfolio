import React from "react";
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation("about");

  return (
    <>
      <div className="content-wrappet-flex">
      <div className="container-title">
           <h1>{t("title")}</h1>
        </div>
        <div className="container-about-base">
          <img src="https://images.unsplash.com/photo-1725109431802-d73f9fda6ba9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <div>
            <h2>Sono un Web developer, studio a Palermo, Italia</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eius qui dicta itaque minus odit maiores aut dolore similique a? Eligendi eum laudantium iusto voluptates maxime quas itaque ad exercitationem repellat iste molestias ipsam, placeat blanditiis labore nostrum nam laborum sequi neque? Totam debitis, quas magni ea cupiditate, autem amet illo perspiciatis modi, accusantium veniam! Quisquam a, nesciunt sunt, perferendis quod accusantium dicta odio dolores minus culpa ipsum? Qui eius nulla exercitationem fugit voluptate, optio illum doloremque neque mollitia ea quae nam, iusto quas voluptas repudiandae, beatae ab voluptates modi tempora aliquam consectetur? Error illum, illo perspiciatis sit libero sint.
            </p>
          </div>
        </div>
        <div className="container-about-skill">
            <h2>Skill tecniche</h2>
            <div>
                <p>html</p>
                <p>css</p>
                <p>tailwind</p>
                <p>bootstrap</p>
                <p>sass</p>
                <p>javascript</p>
                <p>react</p>
                <p>redux</p>
                <p>node.js</p>
                <p>restfulAPI</p>
            </div>
        </div>
        <div className="container-about-softSkill">
            <h2>Soft Skill</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eius qui dicta itaque minus odit maiores aut dolore similique a? Eligendi eum laudantium iusto voluptates maxime quas itaque ad exercitationem repellat iste molestias ipsam, placeat blanditiis labore nostrum nam laborum sequi neque? Totam debitis, quas magni ea cupiditate, autem amet illo perspiciatis modi, accusantium veniam! Quisquam a, nesciunt sunt, perferendis quod accusantium dicta odio dolores minus culpa ipsum? Qui eius nulla exercitationem fugit voluptate, optio illum doloremque neque mollitia ea quae nam, iusto quas voluptas repudiandae, beatae ab voluptates modi tempora aliquam consectetur? Error illum, illo perspiciatis sit libero sint.
            </p>
        </div>
      </div>
    </>
  );
};

export default About;
