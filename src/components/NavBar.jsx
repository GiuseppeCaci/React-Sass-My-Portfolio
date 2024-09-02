import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {


    return(
        <>
         <div>
      <p>Menu bozza</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
      </div>
        </>
    )
}

export default NavBar