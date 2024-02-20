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

export default function Videogames({ videogames }) {
  const location = useLocation();
  let page = getQueryVariable("page", location);
  const pageSize = 20;
  const loading = useSelector((state) => state.loading);
  const pages = Math.ceil(videogames.length / pageSize);
  const dispatch = useDispatch();

  const getVisibleVideogames = () => {
    if (!page) {
      page = 1;
    }
    // dispatch(setPage(page));
    const end = pageSize * Number(page);
    const init = end - pageSize;
    return videogames.slice(init, end);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Pagination pages={pages} />
      <Filters videogames={videogames} />
      <div className={styles.videogames}>
        {getVisibleVideogames().map((videogame) => {
          return <Videogame key={videogame.id} videogame={videogame} />;
        })}
      </div>
    </>
  );
}
