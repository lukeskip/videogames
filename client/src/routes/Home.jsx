import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getVideogames from "../controllers/getVideogames.js";
import Videogames from "../components/Videogames";
import styles from "../css/Container.module.css";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { setPage } from "../redux/actions.js";
import getQueryVariable from "../helpers/getQueryVariable.js";

export default function Home() {
  const dispatch = useDispatch();
  const credentials = useSelector((state) => state.credentials);
  const { videogames } = useSelector((state) => state.videogames);
  const loading = useSelector((state) => state.loading);
  const page = useSelector((state) => state.page);
  const error = useSelector((state) => state.error);
  const location = useLocation();
  const [videogamesLocal, setVideogamesLocal] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!credentials) {
      return navigate("/login");
    }

    const queryPage = getQueryVariable("page", location);
    dispatch(setPage(queryPage ? queryPage : 1));
  }, []);

  useEffect(() => {
    if (credentials) {
      const reduxLocal = localStorage.getItem("reduxState");
      if (!reduxLocal) {
        (async () => {
          setVideogamesLocal(await getVideogames(null, dispatch));
        })();
      } else {
        const videogamesLocal = JSON.parse(reduxLocal).videogames;
        setVideogamesLocal(videogamesLocal);
      }
    }
  }, [videogames]);

  useEffect(() => {
    if (page) {
      navigate(`/?page=${page}`);
    }
  }, [videogamesLocal]);

  return (
    <MainLayout>
      <section className={styles.container}>
        {error ? (
          <h2>{error}</h2>
        ) : (
          <Videogames
            videogames={videogamesLocal ? videogamesLocal : videogames}
          />
        )}
      </section>
    </MainLayout>
  );
}
