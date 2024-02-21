import React, { useEffect } from "react";
import styles from "../css/Header.module.css";
import logo from "../assets/img/logo.png";
import SearchForm from "./SearchForm";
import stylesContainer from "../css/Container.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={stylesContainer.container}>
        <img
          className={styles.logo}
          src={logo}
          alt=""
          onClick={() => navigate(`/`)}
        />
        {location.pathname === "/" && <SearchForm />}
      </div>
    </div>
  );
}
