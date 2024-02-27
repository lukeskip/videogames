import Reac, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../css/Form.module.css";
import stylesContainer from "../css/Container.module.css";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import postVideogame from "../controllers/postVideogame.js";
import getGenres from "../controllers/getGenres";
import getPlatforms from "../controllers/getPlatforms";
import Multiselect from "../components/Multiselect";
import MainLayout from "../layouts/MainLayout";

export default function CreateVideogameRoute() {
  const [formData, setFormData] = useState({});
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [errors, setErrors] = useState({});
  const credentials = useSelector((state) => state.credentials);
  const navigate = useNavigate();

  const formHandler = async () => {
    try {
      const response = await postVideogame(formData);
      if (response.status) {
        navigate(`/detail/${response.videogame.id}`);
      } else {
        setErrors(response.errors);
      }
    } catch (error) {
      console.log(error);
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
    setFormData({ ...formData, [property]: array });
  };

  const buttons = [{ label: "Guardar", action: formHandler }];

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
          {errors.api_error && (
            <div className={styles.error}>{errors.api_error}</div>
          )}
          <div className={styles.fieldGroup}>
            <div>
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
              {errors.name && (
                <div className={styles.error}>{errors.name.message}</div>
              )}
            </div>
            <div>
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
              {errors.release && (
                <div className={styles.error}>{errors.release.message}</div>
              )}
            </div>
          </div>
          <div className={styles.fieldGroup}>
            <div>
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
              {errors.image && (
                <div className={styles.error}>{errors.image.message}</div>
              )}
            </div>
            <div>
              <label htmlFor="rating" styles="">
                Rating:
              </label>
              <input
                placeholder="del 1 al 5"
                id="rating"
                type="number"
                step=".1"
                value={formData.rating ? formData.rating : ""}
                onChange={(event) =>
                  setFormData({ ...formData, rating: event.target.value })
                }
              />
              {errors.rating && (
                <div className={styles.error}>{errors.rating.message}</div>
              )}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <div>
              <label htmlFor="description" styles="">
                Descripción:
              </label>
              <textarea
                id="description"
                type="text"
                onChange={(event) =>
                  setFormData({ ...formData, description: event.target.value })
                }
                value={formData.description ? formData.description : ""}
              ></textarea>
              {errors.description && (
                <div className={styles.error}>{errors.description.message}</div>
              )}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <div>
              <Multiselect
                array={genres}
                action={multiSelectHandle}
                property="genres"
                label="Género"
              />
              {errors.genres && (
                <div className={styles.error}>{errors.genres.message}</div>
              )}
            </div>
            <div>
              <Multiselect
                array={platforms}
                action={multiSelectHandle}
                property="platforms"
                label="Plataforma"
              />
              {errors.platforms && (
                <div className={styles.error}>{errors.platforms.message}</div>
              )}
            </div>
          </div>

          <div className={styles.submitWrapper}>
            <Buttons big={true} buttons={buttons} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
