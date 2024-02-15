import styles from "../css/Loader.module.css";
import { useSelector } from "react-redux";

export default function loader() {
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return <div className={styles.loader}></div>;
  } else {
    return <></>;
  }
}
