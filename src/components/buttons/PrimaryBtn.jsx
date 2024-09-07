import PropTypes from "prop-types";

const PrimaryBtn = ({ text = "", onClick = () => {}, isFullWidth }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isFullWidth ? "w-full" : ""
      } mt-6 px-5 shadow-xl py-2 tracking-wide text-white transition-colors duration-200 bg-custom-green rounded-lg shrink-0 hover:shadow-lg`}
    >
      {text}
    </button>
  );
};

PrimaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isFullWidth: PropTypes.bool,
};

export default PrimaryBtn;
