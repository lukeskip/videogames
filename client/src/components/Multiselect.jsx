import React, { useState, useEffect } from "react";
import styles from "../css/Multiselect.module.css";

export default function Multiselect({ array, action, property, label }) {
  const [selected, setSelected] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [input, setInput] = useState("");

  const searchHandle = (event) => {
    let filteredItems = [];
    if (event.target.value) {
      filteredItems = array.filter((item) => {
        const regex = new RegExp(event.target.value, "i");

        return regex.test(item.name) && !selected.includes(item);
      });
    }
    setVisibleItems(filteredItems);
    setInput(event.target.value);
  };

  const selectHandle = (item) => {
    setSelected([...selected, item.name]);
    setVisibleItems(visibleItems.filter((vItem) => vItem !== item));
    setInput("");
  };

  const deleteHandle = (id) => {
    const newSelected = selected.filter((item) => {
      return item !== id;
    });
    setSelected(newSelected);
  };

  useEffect(() => {
    action(selected, property);
  }, [selected]);

  return (
    <div className={styles.multiselect}>
      <label htmlFor="">{label}:</label>
      <div className={styles.searchWrapper}>
        <input type="text" onChange={searchHandle} value={input} />
      </div>

      <div className={styles.tags} onChange={searchHandle}>
        {selected.map((item, index) => {
          return (
            <div
              key={index}
              className={`${styles.tag} ${styles.selected}`}
              onClick={() => {
                deleteHandle(item);
              }}
            >
              {item}
            </div>
          );
        })}
        {visibleItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`${styles.tag}`}
              onClick={() => selectHandle(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
