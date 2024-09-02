import React from "react";
import { Outlet } from "react-router-dom";

//components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Layout = () => (
    <div>
     <NavBar/>
        <main>
            <Outlet/>
        </main>
    <Footer/>
    </div>
)


export default Layout