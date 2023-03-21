import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/Movie.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
      <div className="movie">
        <img src={coverImg} alt="cover" className="coverImg" />
        <div className="infos">
          <h2 className="title">{title}</h2>
          <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
          <span>{summary}</span>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
