import React from "react";
import PropTypes from "prop-types";
import "../css/MovieDetail.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieDetail({
  year,
  rating,
  title,
  genres,
  coverImg,
  summary,
  fullImg,
}) {
  return (
    <div className="t_container">
      <div className="md_container">
        {/* 배경 이미지 */}
        <div className="md">
          <img src={fullImg} alt="fullImg" className="fullImg"></img>
        </div>
        <div className="box">
          <div>
            <img src={coverImg} alt="coverImg" className="info_img"></img>
          </div>
          <div className="info_container">
            {/* 영화제목 */}
            <div className="info_title">
              <h2>{title}</h2>
            </div>

            {/* 개봉연도 & 별점 정보*/}
            <div className="year_rating">
              <span>
                <FontAwesomeIcon className="rating_icon" icon={faStar} />
              </span>
              <span className="rating_data">{rating}/10</span>
              <span className="year_data">{year}</span>
            </div>

            {/* 별점정보 */}

            {/* 시놉 */}
            <div className="info_summary">
              <p>
                {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
              </p>
            </div>

            {/* 장르 */}
            <ul className="genres_container">
              {genres
                ? genres.map((g) => (
                    <li className="genres" key={g}>
                      {g}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
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
  rating: PropTypes.number.isRequired,
};

export default MovieDetail;
