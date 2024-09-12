import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../store/theme/ThemeContext";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t } = useTranslation("blog");
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`main-base ${theme} primary`}>
      <div className="container-base flex-center-column">
        <div className="pm-title">
          <h2>Blog</h2>
          <p>Tutorial, esperienze e tendenze sul mondo della programmazione</p>
        </div>
        <div className="flex-center-column">
          <Link
            to="/articolo-es"
            className={`container-blog-post ${theme} secondary`}
          >
            <h3>Blog</h3>
            <p>pubblicato il 05/09/2024</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              eius qui dicta itaque..
            </p>
          </Link>
          <Link
            to="/articolo-es"
            className={`container-blog-post ${theme} secondary`}
          >
            <h3>Blog</h3>
            <p>pubblicato il 05/09/2024</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              eius qui dicta itaque..
            </p>
          </Link>
          <Link
            to="/articolo-es"
            className={`container-blog-post ${theme} secondary`}
          >
            <h3>Blog</h3>
            <p>pubblicato il 05/09/2024</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              eius qui dicta itaque..
            </p>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
