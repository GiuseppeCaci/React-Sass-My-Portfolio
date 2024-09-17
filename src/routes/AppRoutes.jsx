import React from "react";
import { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const CollaborazionePS = lazy(() => import("../pages/CollaborazionePS"));

//components
import Loading from "../components/Loading";
import Layout from "./Layout";

const AppRoutes = () => {

  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoadingComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return(
    <>
      <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/collaborazione-01" element={<CollaborazionePS/>} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
    </>
  )
};

export default AppRoutes;
