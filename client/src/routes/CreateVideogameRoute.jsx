import Reac, { useState, useEffect } from "react";
import styles from "../css/Form.module.css";
import stylesContainer from "../css/Container.module.css";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import postVideogame from "../controllers/postVideogame.js";
import { useLocation, useNavigate } from "react-router-dom";

export default function CreateVideogameRoute() {
  const [formData, setFormData] = useState({});
  const credencials = useSelector((state) => state.credencials);
  const formHandler = async () => {
    console.log("Sending form...");
    try {
      postVideogame(formData);
    } catch (error) {
      console.log(error.message);
    }
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

  useEffect(() => {
    if (!credencials) {
      navigate("/login");
    }
  }, []);

  return (
    <section className={stylesContainer.container}>
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
          <label htmlFor="name" styles="">
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
        {/* <div className={styles.fieldGroup}>
          <label htmlFor="name" styles="">
            Imagen:
          </label>
          <input
            id="name"
            type="file"
            onChange={(event) =>
              setFormData({ ...formData, image: event.target.files[0] })
            }
          />
        </div> */}
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
            type="date"
            value={formData.release ? formData.release : ""}
            onChange={(event) =>
              setFormData({ ...formData, release: event.target.value })
            }
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="genres" styles="">
            Géneros:
          </label>
          <input
            placeholder="Separados por comas"
            id="genres"
            type="text"
            value={formData.genres ? formData.genres : ""}
            onChange={(event) =>
              setFormData({ ...formData, genres: event.target.value })
            }
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="rating" styles="">
            Rating:
          </label>
          <input
            placeholder="del 1 al 5"
            id="rating"
            type="text"
            value={formData.rating ? formData.rating : ""}
            onChange={(event) =>
              setFormData({ ...formData, rating: event.target.value })
            }
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="platforms" styles="">
            Plataformas:
          </label>
          <input
            placeholder="Separadas por comas"
            id="platforms"
            type="text"
            value={formData.platforms ? formData.platforms : ""}
            onChange={(event) =>
              setFormData({ ...formData, platforms: event.target.value })
            }
          />
        </div>
        <div className={styles.submitWrapper}>
          <Buttons buttons={buttons} />
        </div>
      </div>
    </section>
  );
}
