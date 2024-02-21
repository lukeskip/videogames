import React, { useState } from "react";
import styles from "../css/Form.module.css";
import Buttons from "./Buttons";
import getVideogames from "../controllers/getVideogames";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions.js";

export default function SearchForm() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const formHandler = () => {
    if (input) {
      getVideogames({ name: input }, dispatch);
    } else {
      setError("Debes escribir un término de búsqueda");
    }
  };

  const clearHandler = () => {
    setInput("");
    getVideogames(null, dispatch);
  };

  const buttons = [
    { label: "Buscar", action: formHandler },
    { label: "Limpiar", action: clearHandler },
  ];

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      formHandler();
    }
  };

  return (
    <div className={styles.form}>
      <input
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
        onKeyPress={handleKeyPress}
      />
      <Buttons buttons={buttons} />
    </div>
  );
}
