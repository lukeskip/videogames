import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getVideogames } from "../redux/actions.js";
import getVideogames from "../controllers/getVideogames.js";
import Videogames from "../components/Videogames";
import styles from "../css/Container.module.css";
import Header from "../components/Header";

export default function Home() {
  const dispatch = useDispatch();
  const { videogames } = useSelector((state) => state.videogames);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [videogamesLocal, setVideogamesLocal] = useState();

  useEffect(() => {
    const reduxLocal = localStorage.getItem("reduxState");
    if (!reduxLocal) {
      (async () => {
        setVideogamesLocal(await getVideogames(dispatch));
      })();
    } else {
      const videogamesLocal = JSON.parse(reduxLocal).videogames;
      setVideogamesLocal(videogamesLocal);
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className="home">
        <Header></Header>
        <Videogames
          videogames={videogamesLocal ? videogamesLocal : videogames}
        />
      </div>
    </div>
  );
}
