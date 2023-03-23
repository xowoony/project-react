import React from "react";
import PropTypes from "prop-types";
import "../css/MovieDetail.css";

function MovieDetail({
  year,
  rating,
  title,
  genres,
  runtime,
  coverImg,
  summary,
}) {

  return (
    <div>
      <div>
        <img src={coverImg} alt="coverImg"></img>
      </div>
      <div>
        <h1>{title}</h1>
        <h1>{year}</h1>
        <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
        <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
        <h3>{runtime}</h3>
        <h3>{rating}</h3>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetail;
