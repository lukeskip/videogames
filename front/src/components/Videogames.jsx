import React from "react";
import Videogame from "./Videogame";
import styles from "../css/Videogames.module.css";

export default function Videogames({ videogames }) {
  return (
    <div className={styles.videogames}>
      {videogames.map((videogame) => {
        return <Videogame key={videogame.id} videogame={videogame} />;
      })}
    </div>
  );
}
