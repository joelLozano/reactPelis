import React from "react";
import "./Aside.css";
import { NavLink } from "react-router-dom";

export default function Aside() {
  return (
    <aside className="aside">
      
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "linkActive" : "")}
        >
          {" "}
          Home{" "}
        </NavLink>
      
     
        <NavLink
          to={"cienciaFiccion/"}
          className={({ isActive }) => (isActive ? "linkActive" : "")}
        >
          {" "}
          C&F{" "}
        </NavLink>
      
        <NavLink
          to={"comedia/"}
          className={({ isActive }) => (isActive ? "linkActive" : "")}
        >
          {" "}
          COMEDIA{" "}
        </NavLink>
   
    </aside>
  );
}
