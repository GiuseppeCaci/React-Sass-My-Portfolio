import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t } = useTranslation("blog");
  const {theme} = useContext(ThemeContext);

  return (
    <>
      <div className={`container-blog-title ${theme} primary`}>
        <div className={`main-container-secondary--large ${theme} primary`}>
          <h2>Blog</h2>
          <p>Tutorial, esperienze e tendenze sul mondo della programmazione</p>
        </div>
      </div>
      <div className={`container-blog ${theme} primary`}>
        <Link to="/articolo-es" className={`container-blog-post ${theme} secondary`}>
          <h3>Blog</h3>
          <p>pubblicato il 05/09/2024</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            eius qui dicta itaque..
          </p>
        </Link>
        <Link to="/articolo-es" className={`container-blog-post ${theme} secondary`}>
          <h3>Blog</h3>
          <p>pubblicato il 05/09/2024</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            eius qui dicta itaque..
          </p>
        </Link>
        <Link to="/articolo-es" className={`container-blog-post ${theme} secondary`}>
          <h3>Blog</h3>
          <p>pubblicato il 05/09/2024</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            eius qui dicta itaque..
          </p>
        </Link>
      </div>

      {/*
      <div className="content-wrappet-flex content-wrappet-doubleTop">
      <div className="container-title">
      <h3>{t("title")}</h3>
        </div>
     <div className="container-blog-post">
      <div>
        <h2>title</h2>
        <h4>date</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum.</p>
      </div>
      <div>
        <h2>title</h2>
        <h4>date</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum.</p>
      </div>
      <div>
        <h2>title</h2>
        <h4>date</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum.</p>
      </div>
      <div>
        <h2>title</h2>
        <h4>date</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum.</p>
      </div>
     </div>
      </div>*/}
    </>
  );
};

export default Blog;
