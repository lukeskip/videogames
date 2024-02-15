import React, { useState } from "react";
import styles from "../css/Form.module.css";
import Buttons from "./Buttons";
export default function SearchForm() {
  const [input, setInput] = useState("");

  const formHandler = () => {
    console.log(input);
  };

  const clearHandler = () => {
    console.log("cleanded");
  };

  const buttons = [
    { label: "Buscar", action: formHandler },
    { label: "Limpiar", action: clearHandler },
  ];

  return (
    <div className={styles.form}>
      <input
        styles={styles.input}
        type="text"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
      <Buttons buttons={buttons} />
    </div>
  );
}
