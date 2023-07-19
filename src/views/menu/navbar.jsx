import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <header>
        <nav className='container-nav'>
          <div className='container-nav-title'>
            <span>
              MEDIA APP
            </span>
          </div>

          <div className='container-nav-search'>
            
            <div className='container-nav-search-input'>
              <input type="text" placeholder='Search movies' />
            </div>

            <div className='container-nav-profile'>
              <span>joel lozano</span>
              <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
            </div>
          </div>
        </nav>
    </header>
    </>
  )
}


{/* <NavLink to={'/'} className={({isActive}) => isActive ? "active" : ""} > Home </NavLink>
<span>Terror</span>
<span>Anime</span>
<span>Accion</span>
<span>Comedia</span>
<NavLink to={'peliculas/'} className={({isActive}) => isActive ? "active" : ""} > Peliculas </NavLink> */}