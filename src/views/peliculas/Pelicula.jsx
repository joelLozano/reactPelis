import React, { useState, useEffect } from "react";
import Card from "../components/card/card_component";
import "./style/pelicula.css";
//import pelisJson from'./pelisJson.json'

export default function Pelicula() {
  const [pelisState, setPelis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) {
      console.log("fetching data");
        fetch("http://localhost:5000/getPeliculas")
        .then((response) => response.json())
        .then((data) => {
          setPelis(data.peliculas);
          setLoading(false);
        })
    }
  }, []);

  if (loading) {
    return <div>
      <h2>loader</h2>
    </div>
  } else {
    return (
      <div className="container-movies">
        {pelisState.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
    );
  }

  
}

// funcion que es destinada para una tarea especifica
// useState // hook que permite manejar el estado de un componente
