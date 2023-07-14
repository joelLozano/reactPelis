import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";


import Pelicula from './views/peliculas/pelicula.jsx'
import Navbar from './views/menu/navbar.jsx'
import Footer from './views/footer/Footer.jsx'
import './index.css'
import Home from './views/Home/Home.jsx';
import Peliculas from './views/peliculas/pelicula.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404 Sorry</h1>,
    children: [
      {
        path: "/",
        element: <h1>Welcome</h1>,
      },
      {
        path: "/peliculas",
        element: <Peliculas />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
)
