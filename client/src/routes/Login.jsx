import React, { useState } from "react";
import styles from "../css/Login.module.css";
import Cross from "../assets/img/cross.png";
import Buttons from "../components/Buttons";
import Logo from "../assets/img/logo.png";

export default function Login() {
  const [register, setRegister] = useState(false);
  const buttons = [
    { label: "Entrar", action: () => console.log("funciona") },
    { label: "Registrar", action: () => console.log("funciona") },
  ];
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginFormWrapper}>
        <div className={styles.cross}>
          <img src={Cross} alt="" />
        </div>
        <div className={styles.form}>
          {register ? (
            <>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="password_confirm">Confirma tu password:</label>
                <input id="password_confirm" type="password" />
              </div>
            </>
          ) : (
            <>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" />
              </div>
            </>
          )}
        </div>
        <div className="buttons">
          <Buttons buttons={buttons} />
        </div>
      </div>
      <img className={styles.logo} src={Logo} alt="" />
    </div>
  );
}
