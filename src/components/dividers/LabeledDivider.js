import PropTypes from "prop-types";

function LabeledDivider({ label }) {
  return (
    <div>
      <div>
        <h4 className="label">{label}</h4>
        <div className="divider"></div>
      </div>
    </div>
  );
}

LabeledDivider.propTypes = {
  label: PropTypes.string.isRequired,
};

export default LabeledDivider;
