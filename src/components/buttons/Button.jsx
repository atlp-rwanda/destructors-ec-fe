const Button = ({ label, onClick, variant }) => {
  const buttonClass = variant ? `btn ${variant}` : 'btn';

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
