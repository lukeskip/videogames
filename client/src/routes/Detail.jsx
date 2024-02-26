import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Container.module.css";
import stylesDetail from "../css/Detail.module.css";
import stylesVideogame from "../css/Videogame.module.css";
import Header from "../components/Header";
import getDetailVideogame from "../controllers/getDetailVideogameController.js";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [videogame, setVideogame] = useState();
  const { id } = useParams();
  const credentials = useSelector((state) => state.credentials);
  const error = useSelector((state) => state.error);

  const generateRandom = () => {
    return Math.floor(Math.random() * 7) - 3;
  };

  const getFormattedDate = (release) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const releaseDate = new Date(release + "T00:00:00");
    const day = releaseDate.getDate();
    const month = releaseDate.getMonth();
    const year = releaseDate.getFullYear();
    return `${day} de ${months[month]} de ${year}`;
  };

  useEffect(() => {
    if (!credentials) {
      navigate("/login");
    }
    return async () => {
      try {
        const getVideogame = await getDetailVideogame(id, dispatch);
        setVideogame(getVideogame);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <MainLayout>
      <section className={styles.container}>
        <Loader />
        {error && <h2>{error}</h2>}
        {videogame && (
          <div className={stylesDetail.detail}>
            <div className={stylesDetail.image}>
              <div
                className={`
                ${stylesVideogame.videogame}
                ${stylesVideogame.videogameDetail}
                `}
                style={{ transform: `rotate(${generateRandom()}deg)` }}
              >
                <div className={stylesVideogame.genres}>
                  {videogame.genres.map((genre) => {
                    return <div key={genre.id}>{genre.name}</div>;
                  })}
                </div>
                <div className={stylesVideogame.title}>
                  <h3>{videogame.name}</h3>
                </div>
                <div className={stylesVideogame.rating}>{videogame.rating}</div>
                <div className={stylesVideogame.portrait}>
                  <img
                    src={videogame.image}
                    alt=""
                    className={stylesVideogame.image}
                  />
                </div>
              </div>
            </div>
            <div className={stylesDetail.info}>
              <h1>{videogame.name}</h1>
              <div className={stylesDetail.platforms}>
                {videogame.platforms.map((platform) => {
                  return (
                    <span
                      className={stylesDetail.platform}
                      key={
                        videogame.location === "api"
                          ? platform.platform.id
                          : platform.id
                      }
                    >
                      {videogame.location === "api"
                        ? platform.platform.name
                        : platform.name}
                    </span>
                  );
                })}
              </div>
              <div className={stylesDetail.release}>
                {getFormattedDate(videogame.release)}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: videogame.description }}
                className={stylesDetail.description}
              />
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
