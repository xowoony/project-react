import PropTypes from "prop-types"; // import 해주면 밑에서 쓸 수 있다.


function Button({ text, onClick }) {
  return <button className={styles.btn} onClick={onClick}>{text}</button>; // className 부여 styles.btn 

}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick:PropTypes.func
};

export default Button;
