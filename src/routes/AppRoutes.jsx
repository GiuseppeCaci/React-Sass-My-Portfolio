import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
//pages
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))
const Portfolio = lazy(() => import('../pages/Portfolio'))
const Blog = lazy(() => import('../pages/Blog'))
//components
import Loading from "../components/Loading";
import NavBarProva from "../components/NavBarProva";

const AppRoutes = () => (
    <Router>
    <Suspense fallback={<Loading/>}>
    <NavBarProva></NavBarProva>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes