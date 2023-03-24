import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.css";
import { useState } from "react";



function Movie({ id, coverImage, title, summary, year, genres, smallImage }) {
  const [info, setInfo] = useState(false);
  const showInfo = () => setInfo(true);
  const hideInfo = () => setInfo(false);

  return (
    <div className={style.slide_container}>
      <div onClick={showInfo} className={style.movies}>
        <img src={coverImage} alt="" className={style.title_image} />
        <h2 className={style.title}>{title}</h2>
        <span className={style.year}>{year}</span>
      </div>
      {info ? (
        <div>
          <div>
            <button onClick={hideInfo}>닫기</button>
          </div>
          <img src={smallImage} alt="" className={style.title_image}/>
          <p>{summary}</p>
        </div>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
