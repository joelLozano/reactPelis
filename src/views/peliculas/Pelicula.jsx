import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card/card_component";
import "./style/pelicula.css";
import { Col, Row } from "react-bootstrap";
//import pelisJson from'./pelisJson.json'

export default function Pelicula(props) {
  const [pelisState, setPelisState] = useState([]);
  const [pelisFilter, setPelisFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Estado de barra de busqueda
  const [ search, setSearch] = useState('');
  
  useEffect(() => {
    if (loading) {
      fetch(`https://api-pelis-back.onrender.com/${props.type}`)
        .then((response) => response.json())
        .then((data) => {
          setPelisState(data);
          setPelisFilter(data.peliculas);
          setLoading(false);
        });
    }
  }, []);


  const searchBar = (e) => {
    let value = e.target.value;
    setSearch(e.target.value);

    console.log(search);
    if (!value) {
      // Si el valor de búsqueda está vacío, restaurar todas las películas originales
      setPelisFilter(pelisState.peliculas)
    } else {
      // Filtrar las películas según el valor de búsqueda
      const filteredPeliculas = pelisState.peliculas.filter((movie) =>
        movie.titulo.toLowerCase().includes(value.toLowerCase())
      );
      setPelisFilter(filteredPeliculas);
    }
}
  
  if (loading) {
    return (
      <div>
        <h2>loader</h2>
      </div>
    );
  } else {
    return (
      <div className="container-movies">

        <div className="container">
          <div className="row">
            <div className="col text-center mb-3 mt-5">
              <h3>Encuentra tu pulicula favorita</h3>
            </div>

            <div className="row">
              <div className="col text-center">
                <input type="text"  onChange={searchBar} placeholder="titulo de pelicula"/>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col">
              <h2 className="genero-title mt-5">{pelisState.genero}</h2>
            </div>
          </div>

          <Row className="row row-items">
            {pelisFilter.map((movie, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index} className="items">
                <Link  to={`/${movie.titulo}`} state={movie} >
                  <Card movie={movie} key={index}/>
                </Link>
                </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

// funcion que es destinada para una tarea especifica
// useState // hook que permite manejar el estado de un componente
