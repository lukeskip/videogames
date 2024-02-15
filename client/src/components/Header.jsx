import styles from "../css/Header.module.css";
import logo from "../assets/img/logo.png";
import SearchForm from "./SearchForm";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt=""
        onClick={() => navigate(`/`)}
      />
      <SearchForm />
    </div>
  );
}
