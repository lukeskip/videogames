import Reac, { useState, useEffect } from "react";
import styles from "../css/Form.module.css";
import stylesContainer from "../css/Container.module.css";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import postVideogame from "../controllers/postVideogame.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import getGenres from "../controllers/getGenres";
import getPlatforms from "../controllers/getPlatforms";
import Multiselect from "../components/Multiselect";

import MainLayout from "../layouts/MainLayout";

export default function CreateVideogameRoute() {
  const [formData, setFormData] = useState({});
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const credentials = useSelector((state) => state.credentials);
  const navigate = useNavigate();

  const formHandler = async () => {
    console.log("Sending form...");
    try {
      postVideogame(formData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const genreSelectionHandle = (event) => {
    const genres = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, genres });
  };

  const platformSelectionHandle = (event) => {
    const platforms = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, platforms });
  };

  const multiSelectHandle = (array, property) => {
    console.log(array, property);
    setFormData({ ...formData, [property]: array });
  };

  const clearHandler = () => {
    console.log("Cleaning form...");
  };
  const buttons = [
    { label: "Guardar", action: formHandler },
    { label: "Limpiar", action: clearHandler },
  ];
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    if (!credentials) {
      return navigate("/login");
    }

    return async () => {
      setGenres(await getGenres());
      setPlatforms(await getPlatforms());
    };
  }, []);

  return (
    <MainLayout>
      <section className={stylesContainer.container}>
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
            <Multiselect
              array={genres}
              action={multiSelectHandle}
              property="genres"
              label="Género"
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
            <Multiselect
              array={platforms}
              action={multiSelectHandle}
              property="platforms"
              label="Plataforma"
            />
          </div>
          <div className={styles.submitWrapper}>
            <Buttons big={true} buttons={buttons} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
