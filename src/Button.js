import PropTypes from "prop-types"; // import 해주면 밑에서 쓸 수 있다.
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>; // className 부여 styles.btn 

}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
