import { useEffect, useState } from "react";
import { useParams, Link, Router, Routes } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [wait, setWait] = useState(true);
  console.log("id > " + id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);

    // 변수에 저장.
    setMovie(json.data.movie);
    setWait((current) => !current);
  };
  useEffect(() => {
    getMovie();
  }, []);

  //   id, coverImg, title, summary, genres
  // 비동기이므로 loading 동안 기다려줄 수 있는 시간이 필요함.
  return (
    <div className={styles.container}>
      {wait ? (
        <div className={styles.loader}>
          <h1>Please wait a moment..</h1>
        </div>
      ) : (
        <div id="detail">
          <div id="movie">
            <h2 className={styles.movie__title}>{movie.title}</h2>
            <div id="description">
              <div id="mini1">
                <div className={styles.flex__box}>
                  <span>Release</span>
                  <h3>{movie.year}</h3>
                </div>
                <div className={styles.flex__box}>
                  <span>Genre</span>
                  <ul className={styles.movie__genres}>
                    {movie.genres.map((genre) => (
                      <li key={genre}>
                        <h3> {genre} | </h3>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.flex__box}>
                  <span>Runtime</span>
                  <h3>{movie.runtime}</h3>
                </div>
                <div className={styles.flex__box}>
                  <span>Language</span>
                  <h3>{movie.language}</h3>
                </div>
                <div className={styles.flex__box}>
                  <span>Rate</span>
                  <h3>{movie.rating}⭐</h3>
                </div>
                <h3>
                  <p>{movie.description_full}</p>
                </h3>
              </div>
              <img
                src={movie.large_cover_image}
                alt={movie.title}
                className={styles.movie__img}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
