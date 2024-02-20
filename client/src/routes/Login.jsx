import React, { useState, useEffect } from "react";
import styles from "../css/Login.module.css";
import Cross from "../assets/img/cross.png";
import Buttons from "../components/Buttons";
import Logo from "../assets/img/logo.png";
import loginController from "../controllers/loginController";
import registerController from "../controllers/registerController";
import { setCredentials } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import orderVideogames from "../controllers/orderVideogamesController";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleForm = async () => {
    console.log("Handling form...");
    let response = {};
    try {
      if (register) {
        response = await registerController(formData);
      } else {
        response = await loginController(formData);
      }

      console.log(response);
      if (response.access) {
        dispatch(setCredentials(response.access));
        navigate("/");
      } else {
        setErrors(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const buttonsLogin = [
    { label: "Entrar", action: handleForm },
    { label: "Registrar", action: () => setRegister(!register) },
  ];

  const buttonsRegister = [
    { label: "Registrar", action: handleForm },
    { label: "Entrar", action: () => setRegister(!register) },
  ];

  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
                <input
                  id="email"
                  type="email"
                  value={formData?.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  value={formData?.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="password_confirm">Confirma tu password:</label>
                <input
                  id="password_confirm"
                  type="password"
                  value={formData?.passwordConfirm}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      passwordConfirm: e.target.value,
                    });
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.fieldGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="email"
                  value={formData?.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  value={formData?.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                />
              </div>
            </>
          )}
        </div>
        <div className="buttons">
          {register ? (
            <Buttons big buttons={buttonsRegister} />
          ) : (
            <Buttons big buttons={buttonsLogin} />
          )}
        </div>
      </div>
      <div className={styles.error}>{errors}</div>
      <img className={styles.logo} src={Logo} alt="" />
    </div>
  );
}
