import React from "react";
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const {t} = useTranslation("blog");

  return (
    <>
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
      </div>
    </>
  );
};

export default Blog;
