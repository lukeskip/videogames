import React, { useState } from "react";
import styles from "Multiselect.module.css";

export default function Multiselect(array, action) {
  const [selected, setSelected] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);

  const searchHandle = (event) => {
    const filteredItems = array.filter((item) => {
      item.includes(event.target.value);
    });

    setVisibleItems(filteredItems);
  };

  return (
    <div className={styles.multiselect}>
      <input type="text" />
      <div className={styles.tags} onChange={searchHandle}>
        {visibleItems.map((item, index) => {
          return (
            <div className={`${styles.tag} ${styles.selected}`}>{item}</div>
          );
        })}
      </div>
      <div className={styles.tags} onChange={searchHandle}>
        {selected.map((item, index) => {
          return <div className={styles.tag}>{item}</div>;
        })}
      </div>
    </div>
  );
}
