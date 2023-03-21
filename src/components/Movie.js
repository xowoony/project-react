// movie component를 이곳에 담을 것이다
// Movie component가 {medium_cover_image,title,summary,genres} 이 정보들을 parent component로 부터 받아온다
// 이 Movie.js를 App.js에서 <Movie /> 하여 가져다 쓸 수 있다. 맨 위에 import Movie from "./Movie" 적어주어야 하고
// Movie({medium_cover_image, title, summary, genres}) {} 안의 것들은 이름을 바꾸어도 상관 없다. 그래서 너무 긴 이름을 짧게 coverImg로 바꿔주었다.
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt="" />
        <h2>
          <Link to={`/movie/${id}`}> {title}</Link>
        </h2>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

// PropType 설정6
Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
