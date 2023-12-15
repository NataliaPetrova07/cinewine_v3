function OutlinedButton({ label, href }) {
  return (
    <button href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </button>
  );
}

export default OutlinedButton;
