import PropTypes from "prop-types"; // import 해주면 밑에서 쓸 수 있다.

function Button({text}) {
    return <button>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;