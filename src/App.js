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
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
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
              <img src={movie.medium_cover_image}></img>
              {/* 이 컴포넌트들은 movies 배열에 있는 각 movie에서 변형되어 나온 것임. */}
              <h2>{movie.title}</h2> {/*영화제목 불러오기*/}
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li> // map을 쓸 때에는 key를 element로 줘야함. 주지 않으면 에러
                  // 장르는 ID등 어떠한 고유값이 없음. 따라서 key를 g로 줬는데, g가 고유한 값인 한 상관 없음.
                ))}
              </ul>
              <p>{movie.summary}</p> {/*영화 줄거리 불러오기*/}
            </div> // key는 unique 여야 한다. fetch 사이트에서 보면 영화마다 고유한 id가 있기 때문에 그걸 가져다 쓸거임.
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
