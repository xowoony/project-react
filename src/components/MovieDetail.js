import React from "react";
import PropTypes from "prop-types";
import "../css/MovieDetail.css";
import { Link } from "react-router-dom";
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
      {/* 배경 이미지 */}
      <div className="md">
        <img src={fullImg} alt="fullImg" className="fullImg"></img>
      </div>
      <div className="md_container">
        {/* 상단 표시줄 */}
        <div className="top">
          <div className="top_container">
            <div className="top_icon hover">
              <span className="material-symbols-outlined font">remove</span>
            </div>
            <div className="max_icon hover">
              <span className="material-symbols-outlined max_font">
                check_box_outline_blank
              </span>
            </div>
            <Link to={`/`} className="top_icon hoverx">
            <span className="material-symbols-outlined font">close</span>
            </Link>
          </div>
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
