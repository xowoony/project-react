import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  // useEffect를 이용하여 getMovies를 호출
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>로딩 중...</h3>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
            // 원래 medium_cover_image 이지만 mediumCoverImage 로 이름을 바꾸거나 완전 다르게 바꿔 주어도 됨.
            // 난 여기서 coverImg라고 사용하겠음.
            // 여기서 바꿔줬으면 Movies.js에서도 바꾸어주어야 함.
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
