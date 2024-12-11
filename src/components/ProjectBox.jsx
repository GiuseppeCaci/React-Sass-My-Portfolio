import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProjectBox = ({ backgroundImage, to, className = "" }) => {
  return (
    <Link
      className={`link-project project-box ${className}`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      to={to}
    >
    </Link>
  );
};

ProjectBox.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string 
};

export default ProjectBox;