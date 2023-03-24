import Header from "../components/Header";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Group.module.css";
import { Group_key_arr, Group_object_arr } from "../components/Type";

const ListArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Group 에는 불러올 것들에 대한 정보를 입력 (이미지 사이즈 등등)
function Group() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { group, page } = useParams();
  const currentPage = window.location.pathname;

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?${group}&page=${page}&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
    setLoading(true);
  }, [group, page]);

  let title;
  for (let i = 0; i < Group_object_arr.length; i++) {
    if (group === Group_object_arr[i]) {
      title = Group_key_arr[i];
    }
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div>
            <h1>{title}</h1>
            <ul>
              {movies.map((movie) => {
                return (
                  <li>
                    <Movie
                      key={movie.id}
                      id={movie.id}
                      coverImage={movie.medium_cover_image}
                      smallImage={movie.small_cover_image}
                      year={movie.year}
                      title={movie.title}
                      genres={movie.geners}
                      summary={movie.summary}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      {/* 페이징 */}
      {loading ? null : (
        <div className="paging_container">
          {ListArray.map((list) => {
            return (
              <Link
              key={list}
              to={`/page/${group}/${list}`}
              className={currentPage === `/page/${group}/${list}` ? "active" : null}
              >
                {list}
              </Link>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Group;
