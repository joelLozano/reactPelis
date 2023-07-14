import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <header>
        <nav className='container-nav'>
            <NavLink to={'/'} className={({isActive}) => isActive ? "active" : ""} > Home </NavLink>
            <span>Terror</span>
            <span>Anime</span>
            <span>Accion</span>
            <span>Comedia</span>
            <NavLink to={'peliculas/'} className={({isActive}) => isActive ? "active" : ""} > Peliculas </NavLink>
           
        </nav>
    </header>
    </>
  )
}
