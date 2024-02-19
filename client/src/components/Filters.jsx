import React, { useState, useEffect } from "react";
import styles from "../css/Filters.module.css";
import filterVideogamesController from "../controllers/filterVideogamesController";
import { filterVideogames, setPage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import getGenres from "../controllers/getGenresController";
import orderVideogames from "../controllers/orderVideogamesController.js";

export default function Filters({ videogames }) {
  const [genres, setGenres] = useState([]);
  const { videogamesDefault } = useSelector((state) => state.videogames);

  const dispatch = useDispatch();
  const handleOrder = () => {
    console.log("Handling order...");
  };

  const handleFilter = (property, value) => {
    console.log("Handling Filter...");
    const filtered = filterVideogamesController(
      videogamesDefault,
      property,
      value
    );

    dispatch(filterVideogames(filtered));
    dispatch(setPage(1));
  };

  const orderHandler = (property, order) => {
    console.log("Handling location...");
    const orderedVideogames = orderVideogames(videogames, property, order);
    dispatch(filterVideogames(orderedVideogames));
    dispatch(setPage(1));
  };

  useEffect(() => {
    setGenres(getGenres(videogamesDefault));
  }, [videogamesDefault]);

  return (
    <div>
      <div className={styles.filters}>
        <div className="form-group">
          <label htmlFor="">Order por rating:</label>
          <select
            name=""
            id=""
            onChange={(event) => {
              orderHandler("rating", event.target.value);
            }}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Order por nombre:</label>
          <select
            name=""
            id=""
            onChange={(event) => {
              orderHandler("name", event.target.value);
            }}
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Filtrar por género</label>
          <select
            name=""
            id=""
            onChange={(event) => handleFilter("genre", event.target.value)}
          >
            <option value="all">Todos</option>
            {genres.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="">Filtrar por origen</label>
          <select
            name=""
            id=""
            onChange={(event) => handleFilter("location", event.target.value)}
          >
            <option value="all">Todos</option>
            <option value="db">Base de datos</option>
            <option value="api">API</option>
          </select>
        </div>
      </div>
    </div>
  );
}
