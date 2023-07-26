import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './views/menu/navbar.jsx'
import Footer from './views/footer/Footer.jsx'
import './index.css'
import Home from './views/Home/Home.jsx';
import Peliculas from './views/peliculas/Pelicula.jsx';
import DatailMovie from './views/detailMoview/DatailMovie.jsx';


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
        path: "/cienciaFiccion",
        element: <Peliculas type="cienciaFiccion" key="cienciaFiccion" />,
      },
      {
        path: "/comedia",
        element: <Peliculas type="comedia" key="comedia"/>,
      },
      {
        path: "/independientes/",
        element: <Peliculas type="independientes" key="independientes"/>,
        // children: [
        //   {
        //     path: ":id",
        //     element: <h1>Movie</h1>,
        //   }
        // ]
      },
      {
        path: "/:moview",
        element: <DatailMovie/>
        
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>
)
