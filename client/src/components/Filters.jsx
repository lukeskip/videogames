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
  const [filters, setFilters] = useState({ genre: "all", location: "all" });

  const dispatch = useDispatch();

  const handleFilter = (property, value) => {
    console.log("Handling Filter...");
    const newFilters = { ...filters, [property]: value };
    setFilters(newFilters);
    const filtered = filterVideogamesController(videogamesDefault, newFilters);
    dispatch(filterVideogames(filtered));
    dispatch(setPage(1));
  };

  const orderHandler = (property, order) => {
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
          <label htmlFor="">Por rating:</label>
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
          <label htmlFor="">Por nombre:</label>
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
