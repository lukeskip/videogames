import React from "react";
import Videogame from "./Videogame";
import styles from "../css/Videogames.module.css";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

export default function Videogames({ videogames }) {
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.videogames}>
      {videogames.map((videogame) => {
        return <Videogame key={videogame.id} videogame={videogame} />;
      })}
    </div>
  );
}
