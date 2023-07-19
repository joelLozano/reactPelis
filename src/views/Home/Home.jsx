import React from "react";
import Navbar from "../menu/navbar.jsx";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Aside from "../menu/aside/Aside.jsx";

export default function Home() {
  return (
   <div className="main">
      <div>
        <Navbar />
      </div>
      
      <div className="main-container">
        <Aside className="aside-item"/>
        <Outlet className="outlet-item"/>
      </div>
    </div>
  );
}
