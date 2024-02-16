import Reac, { useState, useEffect } from "react";
import styles from "../css/Form.module.css";
import stylesContainer from "../css/Container.module.css";
import Buttons from "../components/Buttons";
import Header from "../components/Header";

export default function CreateVideogameRoute() {
  const [formData, setFormData] = useState({});
  const formHandler = () => {
    console.log("Sending form...");
  };

  const clearHandler = () => {
    console.log("Cleaning form...");
  };
  const buttons = [
    { label: "Crear", action: formHandler },
    { label: "Limpiar", action: clearHandler },
  ];
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className={stylesContainer.container}>
      <Header />
      <div className={`${styles.form} ${styles.column}`}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name" styles="">
            Nombre:
          </label>
          <input
            id="name"
            type="text"
            value={formData.name ? formData.name : ""}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="description" styles="">
            Descripción:
          </label>
          <input
            id="description"
            type="text"
            value={formData.description ? formData.description : ""}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="description" styles="">
            Release:
          </label>
          <input
            id="release"
            type="text"
            value={formData.release ? formData.release : ""}
            onChange={(event) =>
              setFormData({ ...formData, release: event.target.value })
            }
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="image" styles="">
            Imagen:
          </label>
          <input
            id="image"
            type="text"
            value={formData.image ? formData.image : ""}
            onChange={(event) =>
              setFormData({ ...formData, image: event.target.value })
            }
          />
        </div>
        <div className={styles.submitWrapper}>
          <Buttons buttons={buttons} />
        </div>
      </div>
    </div>
  );
}
