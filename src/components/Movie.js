import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.css";

function Movie({ id, coverImg, title }) {
  return (
    <div className={styles.movieContainer}>
      <div className={styles.movie}>
        <Link to={`/movie/${id}`} className="link">
          <img src={coverImg} alt="cover" className="coverImg" />
          <div className="title">{title}</div>
        </Link>
      </div>
      
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
