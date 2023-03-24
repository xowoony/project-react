import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

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
        <MovieDetail
          coverImg={movie.medium_cover_image}
          year={movie.year}
          rating={movie.rating}
          title={movie.title}
          summary={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
