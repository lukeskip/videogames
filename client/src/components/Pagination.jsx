import React from "react";
import styles from "../css/Pagination.module.css";
import { Link, useLocation } from "react-router-dom";
import getQueryVariable from "../helpers/getQueryVariable.js";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions.js";

export default function Pagination({ pages }) {
  const location = useLocation();
  const page = getQueryVariable("page", location);
  const array = [];
  const dispatch = useDispatch();
  const getActive = (item) => {
    return item === Number(page) ? "active" : "";
  };
  for (let i = 1; i <= pages; i++) {
    array.push(i);
  }
  return (
    <div className={styles.pagination}>
      {pages > 1 &&
        array.map((item) => {
          return (
            <Link
              key={item}
              className={`${styles.page} ${styles[getActive(item)]}`}
              to={`/?page=${item}`}
              onClick={() => dispatch(setPage(item))}
            >
              {item}
            </Link>
          );
        })}
    </div>
  );
}
