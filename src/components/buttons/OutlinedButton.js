import PropTypes from "prop-types";

function OutlinedButton({ label }) {
  return <button>{label}</button>;
}

OutlinedButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default OutlinedButton;
