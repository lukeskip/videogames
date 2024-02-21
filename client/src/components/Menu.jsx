import React from "react";
import styles from "../css/Menu.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetStore } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(resetStore());
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to="/create-videogame">Crear Video Juego</Link>
        </li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}
