import "./card_component.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

function Card({ movie }) {
  const [isLikes, setIsLiked] = useState(false);

  function handlerLike() {
    setIsLiked(!isLikes);
  }

  return (
    <div className="card-style">
      <img src={movie.portada} alt="" className="portada" />

      <div className="movie-description ma-10">
        <div className="movie-description-info">
          <h1 className="movie-title">{movie.titulo}</h1>
          <p className="movie-subtitle">{movie.director}</p>
          <p>{movie.duracion}</p>
        </div>

        <div className="like-button">
          <span onClick={handlerLike}>
            {" "}
            {isLikes ? <FaHeart className="icon-red" /> : <FaRegHeart />}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
