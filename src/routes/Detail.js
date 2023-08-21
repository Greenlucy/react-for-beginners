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
        <div className={styles.movie}>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            className={styles.movie__img}
          />
          <h2>{movie.title}</h2>
          <div>
            <h3 className={styles.movie__year}>{movie.year}</h3>
            <h3 className={styles.movie__runtime}>runtime : {movie.runtime}</h3>
            <h3 className={styles.movie__language}>
              language : {movie.language}
            </h3>
            <h3 className={styles.movie__rate}>rate : {movie.rating}</h3>
          </div>
          <p>{movie.description_full}</p>
          <ul className={styles.movie__genres}>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
