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

export default LabeledDivider;
