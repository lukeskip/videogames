import React from "react";
import styles from "../css/Videogame.module.css";
import { useNavigate } from "react-router-dom";
import generateRandom from "../helpers/generateRandom.js";

export default function Videogame({ videogame }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.videogame}
      style={{ transform: `rotate(${generateRandom()}deg)` }}
      onClick={() => navigate(`/detail/${videogame.id}`)}
    >
      <div className={styles.genres}>
        {videogame.genres.map((genre) => {
          return <div key={genre.id}>{genre.name}</div>;
        })}
      </div>
      <div className={styles.title}>
        <h3>{videogame.name}</h3>
      </div>
      <div className={styles.rating}>{videogame.rating}</div>
      <div className={styles.portrait}>
        <img src={videogame.image} alt="" className={styles.image} />
      </div>
    </div>
  );
}
