import React from "react";
import styles from "../css/Footer.module.css";
import stylesContainer from "../css/Container.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={stylesContainer.container}>
        <div>Desarrollado por Sergio "Cheko" García</div>
        <div>Proyecto Individual para Henry</div>
        <div>Email: contacto@chekogarcia.com.mx</div>
      </div>
    </div>
  );
}
