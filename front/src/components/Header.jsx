import styles from "../css/Header.module.css";
import logo from "../assets/img/logo.png";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
      <SearchForm />
    </div>
  );
}
