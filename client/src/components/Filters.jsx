import React from "react";
import styles from "../css/Filters.module.css";
import filterVideogamesController from "../controllers/filterVideogamesController";
import { filterVideogames } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Filters({ videogames }) {
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
  };
  const handleGenre = () => {
    console.log("Handling genre...");
  };

  const handleLocation = () => {
    console.log("Handling location...");
  };

  return (
    <div>
      <div className={styles.filters}>
        <div className="form-group">
          <label htmlFor="">Order por rating:</label>
          <select name="" id="" onChange={handleOrder}>
            <option value=""></option>
            <option value="a">Ascendente</option>
            <option value="d">Descendente</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Order por nombre:</label>
          <select name="" id="" onChange={handleOrder}>
            <option value=""></option>
            <option value="a">Ascendente</option>
            <option value="d">Descendente</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Filtrar por género</label>
          <select name="" id="" onChange={handleGenre}>
            <option value="all">Todos</option>
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
