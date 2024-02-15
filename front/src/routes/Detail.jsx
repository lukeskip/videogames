import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Container.module.css";
import stylesDetail from "../css/Detail.module.css";
import stylesVideogame from "../css/Videogame.module.css";
import Header from "../components/Header";
import getDetailVideogame from "../controllers/getDetailVideogame.js";

export default function Detail() {
  const [videogame, setVideogame] = useState();
  const { id } = useParams();

  const generateRandom = () => {
    return Math.floor(Math.random() * 7) - 3;
  };

  useEffect(() => {
    return async () => {
      const getVideogame = await getDetailVideogame(id);
      setVideogame(getVideogame.data);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header></Header>
      {videogame && (
        <div className={stylesDetail.detail}>
          <div className={stylesDetail.image}>
            <div
              className={`
                ${stylesVideogame.videogame}
                ${stylesVideogame.videogameDetail}
                `}
              style={{ transform: `rotate(${generateRandom()}deg)` }}
              onClick={() => navigate(`/detail/${videogame.id}`)}
            >
              <div className={stylesVideogame.genres}>
                {videogame.genres.map((genre) => {
                  return <div key={genre.id}>{genre.name}</div>;
                })}
              </div>
              <div className={stylesVideogame.title}>
                <h3>{videogame.name}</h3>
              </div>
              <div className={stylesVideogame.portrait}>
                <img
                  src={videogame.background_image}
                  alt=""
                  className={stylesVideogame.image}
                />
              </div>
            </div>
          </div>
          <div className={stylesDetail.info}>
            <h1>{videogame.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: videogame.description }}
              className={stylesDetail.description}
            />
          </div>
        </div>
      )}
    </div>
  );
}
