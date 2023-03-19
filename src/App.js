import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // 새로 생성함
  // 비동기(Asynchronous : 동시에 일어나지 않는)
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  // useEffect를 이용하여 getMovies를 호출할 것이다.
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
            <div key={movie.id}>
              <h2>{movie.title}</h2>
            </div> // key는 unique 여야 한다. fetch 사이트에서 보면 영화마다 고유한 id가 있기 때문에 그걸 가져다 쓸거임.
          ))}
        </div>
      )}
    </div>
  );

 
}

export default App;
