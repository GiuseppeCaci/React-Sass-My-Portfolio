import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Blog = lazy(() => import("../pages/Blog"));
const ArticoloES = lazy(() => import("../pages/ArticoloES"));
const CollaborazionePS = lazy(() => import("../pages/CollaborazionePS"));

//components
import Loading from "../components/Loading";
import Layout from "./Layout";

const AppRoutes = () => {

  return(
    <>
      <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/articolo-es" element={<ArticoloES />} />
          <Route path="/collaborazione-01" element={<CollaborazionePS/>} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
    </>
  )
};

export default AppRoutes;
