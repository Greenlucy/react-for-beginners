import { useEffect, useState } from "react";
import { useParams, Link, Router, Routes } from "react-router-dom";

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
    <div>
      {wait ? (
        <h1>Please wait a moment..</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <div>
            <span>runtime : {movie.runtime}</span>
            <span>language : {movie.language}</span>
            <span>rate : {movie.rating}</span>
          </div>
          <p>{movie.description_full}</p>
          <ul>
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
