import React from 'react'
import { useLocation } from 'react-router-dom'
import './DetailMovie.css'

export default function DatailMovie() {
  const location = useLocation()

  const movie = location.state

  return (
    <div className="container detail-container">
        <div className="row">
            <div className="col">
                <img className='detail-portada' src={movie.portada} alt="" />
            </div>
            <div className="col">
            <h1>{movie.titulo}</h1>

            <p>{movie.sinopsis}</p>
            </div>
        </div>

        <div className="row">
          <div className="col">
            <h2>Actores:</h2>
            <ul>
            {movie.actores.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))
            }
            </ul>
            
          </div>
        </div>
    </div>
  )
}
