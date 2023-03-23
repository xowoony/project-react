import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Detail.css";


function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <header className="header">
        <a href="https://xowoony.github.io/project-react/">THORNFLIX</a>
      </header>
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image}></img>
          <h1>{movie.title}</h1>
          <h3>{movie.summary}</h3>
          <h3>{movie.genres}</h3>
          <h3>{movie.runtime}</h3>
          <h3>{movie.rating}</h3>
        </div>
      )}
    </div>
  );
}
export default Detail;
