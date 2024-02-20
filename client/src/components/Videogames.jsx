import React, { useEffect, useState } from "react";
import Videogame from "./Videogame";
import styles from "../css/Videogames.module.css";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import getQueryVariable from "../helpers/getQueryVariable.js";
import Filters from "../components/Filters";
import { setPage } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import { PAGE_LIMIT } from "../config/config.js";

export default function Videogames({ videogames }) {
  const location = useLocation();
  let page = getQueryVariable("page", location);
  const [visibleGames, setVisibleGames] = useState([]);

  const loading = useSelector((state) => state.loading);
  const pageState = useSelector((state) => state.page);
  const pages = Math.ceil(videogames.length / PAGE_LIMIT);
  const dispatch = useDispatch();
  const getVisibleVideogames = () => {
    if (!page) {
      page = 1;
    }
    dispatch(setPage(page));
    const end = PAGE_LIMIT * Number(page);
    const init = end - PAGE_LIMIT;
    return videogames.slice(init, end);
  };

  useEffect(() => {
    setVisibleGames(getVisibleVideogames());
  }, [pageState, videogames]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Pagination pages={pages} />
      <Filters videogames={videogames} />
      <div className={styles.videogames}>
        {visibleGames.length ? (
          visibleGames.map((videogame) => {
            return <Videogame key={videogame.id} videogame={videogame} />;
          })
        ) : (
          <h2>No hay videojuegos que cunmplan con los criterios</h2>
        )}
      </div>
    </>
  );
}
