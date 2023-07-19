import React, { useState, useEffect } from "react";
import Card from "../components/card/card_component";
import "./style/pelicula.css";
//import pelisJson from'./pelisJson.json'

export default function Pelicula(props) {
  const [pelisState, setPelis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) {
      console.log(`http://localhost:5000/${props.type}`);
      fetch(`http://localhost:5000/${props.type}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          setPelis(data);
          setLoading(false);
        });
    }
  }, []);

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
            <div className="col">
              <h2 className="genero-title">{pelisState.genero}</h2>
            </div>
          </div>

          <div className="row">
            {pelisState.peliculas.map((movie, index) => (
              <div className="col-3">
                <Card movie={movie} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// funcion que es destinada para una tarea especifica
// useState // hook que permite manejar el estado de un componente
