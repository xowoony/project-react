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
  let shortSummary = summary;
  if (shortSummary.length > 800) {
    shortSummary = shortSummary.substring(0, 800) + "...";
  }
  return (
    <div>
      <img src={coverImg} alt="coverImg"></img>
      <h1>{title}</h1>
      <h1>{year}</h1>
      <h3>{summary}</h3>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
      <h3>{runtime}</h3>
      <h3>{rating}</h3>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};


export default MovieDetail;