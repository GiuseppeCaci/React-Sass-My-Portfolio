import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//pagine
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const CollaborazionePS = lazy(() => import("../pages/CollaborazionePS"));
const ProgettoPortfolio = lazy(() => import("../pages/ProgettoPortfolio"));
const ProgettoAdventuresCode = lazy(() => import("../pages/ProgettoAdventuresCode"));
const ProgettoPanasci = lazy(() => import("../pages/ProgettoPanasci"));
const ProgettoStreaming = lazy(() => import("../pages/ProgettoStreaming"));
const ProgettoSeica = lazy(() => import("../pages/ProgettoSeica"));
const ContattiChatBox = lazy(() => import("../pages/ContattiChatBox"));


//componenti
import Loading from "../components/Loading";
import Layout from "./Layout";

const AppRoutes = () => {

  return(
    <>
      <Router>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/chat-assistant" element={<ContattiChatBox/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/collaborazione-01" element={<CollaborazionePS/>} />
          <Route path="/portfolio/progetto-01" element={<ProgettoPortfolio/>} />
          <Route path="/portfolio/progetto-02" element={<ProgettoAdventuresCode/>} />
          <Route path="/portfolio/progetto-03" element={<ProgettoPanasci/>} />
          <Route path="/portfolio/progetto-04" element={<ProgettoStreaming/>} />
          <Route path="/portfolio/progetto-05" element={<ProgettoSeica/>} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
    </>
  )
};

export default AppRoutes;
